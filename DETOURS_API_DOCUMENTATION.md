# Detours / EpicTravels Web API Documentation

## Overview

This document provides comprehensive documentation for all endpoints in the Detours application.

### What's Included

Each endpoint entry documents:
- **HTTP Method(s)** and URL pattern
- **Authentication** and permission requirements  
- **Request** structure with field types, validation rules, and constraints
- **Response** formats with sample JSON examples
- **Side Effects** and business logic behavior
- **Error Cases** with status codes

### ⚠️ Important Notes

| Note | Details |
|------|---------|
| **Order** | Endpoints are listed in the order they appear in `epictravels\travel\urls.py` |
| **Development Status** | Some endpoints are **still in development** and may not be available in production |
| **External APIs** | Endpoints with Plaid, Stripe, Salesforce integrations require proper API credentials |

---

## 1. GET `/`

**Homepage**

| Property | Value |
|----------|-------|
| **Method** | GET |
| **Auth** | None |
| **Response** | HTML (FreeEasyView) |

Home page rendered by `FreeEasyView`.

---

## 2. GET, POST `/contact-us`

**Contact Form**

| Property | Value |
|----------|-------|
| **Methods** | GET (form), POST (submit) |
| **Auth** | None |

#### Request (POST)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `first_name` | string | ✓ | Max 100 chars |
| `last_name` | string | ✓ | Max 100 chars |
| `email` | email | ✓ | Valid email format |
| `comments` | string | ✓ | 10–1000 chars recommended |
| `g-recaptcha-response` | string | ✓ | Google reCAPTCHA v2 token |

#### Response

**Success (GET):** 200 OK HTML contact form page

**Success (POST):** 302 Redirect or 200 OK with re-render if validation fails

#### Example

**Request:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "comments": "I'm interested in learning more about your trips.",
  "g-recaptcha-response": "[reCAPTCHA token]"
}
```

**Response (POST Error):** 200 OK with form and error messages

---

## 3. POST `/registration/newsletter`

**Newsletter Signup**

| Property | Value |
|----------|-------|
| **Method** | POST |
| **Auth** | None |

#### Request Body

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `email` | email | ✓ | Valid email |
| `given_name` | string | ✓ | Max 50 chars |
| `family_name` | string | ✓ | Max 50 chars |
| `middle_name` | string | ✗ | Max 50 chars |
| `gender` | choice | ✓ | From FormQuestionText |
| `city` | string | ✓ | Max 50 chars |
| `trip` | int | ✓ | Valid trip ID |

#### Response

**Success:** 200 OK with confirmation message (sends email to newsletter list)

**Error:** 400 Bad Request with validation errors

#### Example

**Request:**
```json
{
  "email": "jane@example.com",
  "given_name": "Jane",
  "family_name": "Smith",
  "middle_name": "Marie",
  "gender": "Female",
  "city": "New York",
  "trip": 15
}
```

---

## 4. GET `/registration/newsletter/*`

**Newsletter Wildcard Redirect**

| Property | Value |
|----------|-------|
| **Method** | GET |
| **Auth** | None |

Wildcard route that redirects to homepage.

---

## 5. GET, POST `/registration/more-info`

**More Info Request**

| Property | Value |
|----------|-------|
| **Methods** | GET (form), POST (submit) |
| **Auth** | None |

Request more information about a trip/adventure via form submission.

---

## 6. POST `/registration/save`

**Save Dream Trip**

| Property | Value |
|----------|-------|
| **Method** | POST |
| **Auth** | ✓ login_required |

#### Request Body

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `adventure_id` | int | ✓ | Must exist in database |

#### Response

**Success:** 200 OK
```json
{
  "status": "saved",
  "dream_trip_id": 5
}
```

**Errors:**
- **403 Forbidden:** Adventure not found or user not authenticated
- **400 Bad Request:** Validation errors

#### Example

**Request:**
```json
{
  "adventure_id": 5
}
```

**Side Effects:** Creates/updates TravelDream record linking user to adventure

---

## 7. GET `/registration`

**Registration Landing Page**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |

#### Response

**Success:** 200 OK — HTML registration listing page rendered by `RegistrationView`

#### Description

Landing page for trip registration. Displays available adventures and upcoming trips.

---

## 8. POST `/registration/<adventure_slug>/choose-trip`

**Choose Trip**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | None         |

#### Request Body

| Field  | Type | Required | Constraints                            |
| ------ | ---- | -------- | -------------------------------------- |
| `trip` | int  | ✓        | Must exist and belong to the adventure |

#### Validation Rules

* Trip must belong to `adventure.get_upcoming_trips()`
* Trip must not be full (staff users bypass capacity checks)

#### Response

**Success:** 302 Redirect → `/registration/<adventure_slug>/your-info`
**Error:** 400 Bad Request or form re-render

#### Example

```json
{
  "trip": 42
}
```

#### Side Effects

* Stores selected trip ID in session under `registration/trip`

#### Description

Selects a scheduled trip for an adventure and stores the selection in the session.

---

## 9. GET, POST `/registration/<adventure_slug>/your-info`

**Primary Traveler Information**

| Property    | Value                               |
| ----------- | ----------------------------------- |
| **Methods** | GET (form), POST (submit)           |
| **Auth**    | None (login enforced conditionally) |

#### Request Body (POST)

**Primary Traveler Info**

| Field                  | Type         | Required | Notes                      |
| ---------------------- | ------------ | -------- | -------------------------- |
| `email`                | email        | ✓        | Existing users must log in |
| `given_name`           | string       | ✓        | Max 50 chars               |
| `family_name`          | string       | ✓        | Max 50 chars               |
| `middle_name`          | string       | ✗        | Max 50 chars               |
| `nickname`             | string       | ✗        | Max 50 chars               |
| `citizenship`          | country code | ✓        | ISO-2                      |
| `date_of_birth`        | date         | ✓        | YYYY-MM-DD                 |
| `gender`               | choice       | ✓        | From FormQuestionText      |
| `street_address`       | string       | ✓        | Max 100 chars              |
| `street_address_2`     | string       | ✗        | Max 100 chars              |
| `city`                 | string       | ✓        | Max 50 chars               |
| `postal_code`          | string       | ✓        | Required                   |
| `country`              | country code | ✓        | ISO-2                      |
| `primary_phone`        | phone        | ✓        | +()- allowed               |
| `secondary_phone`      | phone        | ✗        | Same validation            |
| `solo_room`            | choice       | ✓        | Bed type                   |
| `traveling_partners`   | string       | ✗        | —                          |
| `dietary_requirements` | string       | ✗        | —                          |
| `flight_booking`       | boolean      | ✗        | Adds $50 fee               |
| `promotional_code`     | string       | ✗        | —                          |
| `travel_agent_email`   | email        | ✗        | —                          |

**Confirmation Fields**

| Field                      | Type    | Required |
| -------------------------- | ------- | -------- |
| `how_did_you_hear_details` | string  | ✓        |
| `comments`                 | string  | ✓        |
| `agree_to_terms`           | boolean | ✓        |

#### Response

**Success:** 302 Redirect → `/registration/<adventure_slug>/personal-info`
**Error:** 200 OK form re-render with validation errors

#### Side Effects

* Stores data in session keys:

  * `registration/your-information`
  * `registration/confirmation`

#### Description

Collects primary traveler information and registration confirmation details.

---

## 10. GET, POST `/registration/<adventure_slug>/personal-info`

**Additional Travelers & Booking Creation**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Request Body (POST)

* `RegistrationPersonalInfoFormSet` (0+ travelers)
* Confirmation fields (`agree_to_terms`, comments)

#### Response

**Success:** 302 Redirect → `/registration/<booking_code>/processing`
**Error:** 200 OK form re-render

#### Side Effects

* Creates:

  * `Booking`
  * `Traveler`
  * `TravelerOnTrip`
* Sends FNE notifications
* Initializes Salesforce sync

#### Description

Finalizes registration and creates booking records.

---

## 11. GET, POST `/registration/<booking_code>/processing`

**Registration Processing**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Response

**GET:** HTML processing page
**POST:** JSON response

```json
{
  "location": "/registration/ABC123/deposit"
}
```

#### Description

Polling endpoint to determine next step (deposit or confirmation).

---

## 12. GET `/registration/<booking_code>/deposit`

**Deposit Payment Page**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |

#### Response

HTML page including Plaid client configuration.

#### Description

Deposit step for ACH payment using Plaid.

---

## 13. GET `/registration/<booking_code>/confirmation`

**Registration Confirmation**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |

#### Response

HTML confirmation page with booking details.

---

## 14. GET, POST `/waitlist/join`

**Join Waitlist**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Request (GET)

| Param       | Type   | Required |
| ----------- | ------ | -------- |
| `trip_id`   | int    | ✓        |
| `trip_type` | string | ✓        |

#### Request Body (POST)

| Field                  | Type   | Required |
| ---------------------- | ------ | -------- |
| `email`                | email  | ✓        |
| `bed_type_preference`  | choice | ✓        |
| `notes`                | string | ✗        |
| `form_token`           | string | ✓        |
| `g-recaptcha-response` | string | ✓        |

#### Response

**Success:** 200 OK waitlist success page
**Error:** 200 OK form re-render

#### Side Effects

* Creates `WaitlistEntry`
* Sends confirmation email
* Applies rate limiting and bot detection

#### Description

Allows users to join the waitlist for sold-out trips.

---

## 15. GET `/agent/welcome`

**Agent Welcome Dashboard**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | ✓ Agent      |

#### Response

HTML dashboard showing agent details.

---

## 16. GET `/agent/your-travelers`

**Agent Travelers List**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | ✓ Agent      |

#### Response

HTML list of managed travelers.

---

## 17. POST `/agent/your-travelers/<traveler_on_trip_id>/mark-confirmed`

**Mark Traveler Confirmed**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | ✓ Agent      |

#### Response

**204 No Content**

---

## 18. POST `/agent/your-travelers/<traveler_on_trip_id>/mark-cancelled`

**Mark Traveler Cancelled**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | ✓ Agent      |

#### Response

**204 No Content**

---

## 19. GET `/agent/your-travelers/<traveler_on_trip_id>/voucher`

**Download Voucher**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | ✓ Agent      |

#### Response

PDF attachment (`voucher-<id>.pdf`)

---

## 20. GET `/agent/commission`

**Agent Commission**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | ✓ Agent      |

#### Response

HTML commission summary page.

---

## 21. POST `/stripe-webhook` (DEPRECATED)

**Stripe Webhook Handler**

| Property   | Value          |
| ---------- | -------------- |
| **Method** | POST           |
| **Auth**   | None (Webhook) |
| **Status** | ⚠️ Disabled - No longer used |

#### Description

⚠️ **This endpoint is disabled and no longer used.** All Stripe payments now go through Salesforce and result in a Charge event. See endpoint #30 (Salesforce Charge Webhook) for the current payment webhook handling.

---

## 22. POST `/plaid-webhook`

**Plaid Webhook Handler**

| Property   | Value          |
| ---------- | -------------- |
| **Method** | POST           |
| **Auth**   | None (Webhook) |

#### Request

* JSON webhook payload from Plaid

#### Response

| Status | Meaning                |
| ------ | ---------------------- |
| 200    | Processed successfully |
| 405    | Invalid HTTP method    |
| 500    | Server error           |

#### Side Effects

* Maps Plaid transfers to Salesforce `Charge__c`
* Creates `Transaction` records
* Updates `TravelerOnTrip` balances and requirements

#### Description

Processes Plaid transfer lifecycle updates and synchronizes payment status.

---

## 23. GET `/your-trip/<traveler_on_trip_id>/plaid/create-link-token`

**Create Plaid Link Token (Trip Payment)**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

**Success:** 200 OK

```json
{
  "link_token": "link-sandbox-..."
}
```

**Errors:** 403 / 404 / 500

#### Description

Creates a Plaid Link token to allow users to connect a bank account for ACH payments.

---

## 24. POST `/your-trip/<traveler_on_trip_id>/plaid/process-payment`

**Process ACH Payment (Plaid)**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field          | Type    | Required | Constraints             |
| -------------- | ------- | -------- | ----------------------- |
| `public_token` | string  | ✓        | Plaid token             |
| `account_id`   | string  | ✓        | Plaid account ID        |
| `amount`       | decimal | ✓        | 0.01 ≤ amount ≤ balance |

#### Response

**Success:** 200 OK

```json
{
  "success": true,
  "payment_id": "txn_123",
  "transfer_id": "transfer_abc",
  "transfer_status": "PENDING",
  "payment_amount": "500.00",
  "ach_discount_applied": true
}
```

**Error:** 400 / 403 / 404 / 500

#### Side Effects

* Creates Plaid transfer + authorization
* Creates `Transaction`
* Updates balance and applies $50 ACH discount if eligible

#### Description

Processes ACH payments via Plaid for an individual traveler.

---

## 25. GET `/registration/<booking_code>/plaid/create-link-token`

**Create Plaid Link Token (Deposit)**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |
| **CSRF**   | Exempt       |

#### Response

```json
{
  "link_token": "link-production-..."
}
```

#### Description

Creates Plaid Link token for booking-level deposit payments.

---

## 26. POST `/registration/<booking_code>/plaid/process-deposit`

**Process Booking Deposit (ACH)**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | None         |
| **CSRF**   | Exempt       |

#### Request Body

| Field          | Type    | Required |
| -------------- | ------- | -------- |
| `public_token` | string  | ✓        |
| `account_id`   | string  | ✓        |
| `amount`       | decimal | ✓        |

#### Response

```json
{
  "success": true,
  "transfer_id": "transfer_xyz",
  "transfer_status": "PENDING",
  "payment_amount": "450.00",
  "ach_discount_applied": true,
  "booking_code": "ABC123"
}
```

#### Side Effects

* Creates Plaid transfers
* Creates Transactions for each traveler
* Marks booking deposit as paid
* Syncs with Salesforce

#### Description

Processes ACH deposit for an entire booking with discount handling.

---

## 27. GET `/admin/test-salesforce`

**Salesforce Diagnostic Page**

| Property   | Value                        |
| ---------- | ---------------------------- |
| **Method** | GET                          |
| **Auth**   | ✓ `travel.can_edit_traveler` |

#### Response

HTML page with Salesforce connection and query results.

---

## 28. GET `/your-trip/statement-of-account/<traveler_on_trip_id>`

**Legacy Statement of Account**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML legacy statement page.

---

## 29. GET, POST `/your-trip/<traveler_on_trip_id>/make-payment`

**Create Credit Card Payment (Stripe)**

| Property    | Value            |
| ----------- | ---------------- |
| **Methods** | GET, POST        |
| **Auth**    | ✓ login_required |

#### Request Body (POST)

| Field    | Type    | Required |
| -------- | ------- | -------- |
| `amount` | decimal | ✓        |

#### Response (POST)

```json
{
  "success": true,
  "id": "charge_001",
  "payment_url": "https://salesforce-payment-link"
}
```

#### Side Effects

* Creates Salesforce `Charge__c`
* Does not immediately charge card

#### Description

Creates a Stripe-backed Salesforce payment record and returns checkout link.

---

## 30. POST `/your-trip/<traveler_on_trip_id>/make-payment/salesforce-charge-webhook`

**Salesforce Charge Webhook**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | None         |

#### Response

```json
{
  "Id": "a01...",
  "Status__c": "Pending",
  "Payment_Link__c": "https://..."
}
```

#### Description

This endpoint is polled by the webserver to get the status of the current payment from Salesforce. All Stripe payments are routed through Salesforce, which sends charge status updates to this webhook.

---

## 31. GET `/your-trip/<traveler_on_trip_id>/make-payment/success`

**Stripe Payment Success**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML success confirmation page.

---

## 32. GET `/your-trip/statement-of-account`

**Statement Index (Legacy)**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 33. POST `/travelers/<traveler_id>/password/reset`

**Traveler Password Reset**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | None         |

#### Description

Initiates password reset flow for a traveler.

---

## 34. GET `/your-trip`

**Your Trip Entry Point**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

Redirect → `/your-trip/dashboard`

---

## 35. GET `/your-trip/dashboard`

**Traveler Dashboard**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 36. GET `/your-trip/<traveler_id>/dashboard`

**Specific Traveler Dashboard**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 37. GET `/your-trip/points`

**Points History**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 38. GET `/your-trip/<traveler_id>/points`

**Traveler Points History**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 39. GET `/your-trips` (DEPRECATED)

**List User Trips**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |
| **Status** | ⚠️ Deprecated - Use /your-trip/dashboard |

#### Description

⚠️ **This endpoint is deprecated.** Use endpoint #35 (`GET /your-trip/dashboard`) instead for the current trip listing interface.

---

## 40. GET `/your-trip/dream-trip`

**Dream Trip Page**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

---

## 41. GET `/your-trip/<traveler_on_trip_id>/news-and-updates`

**Trip News & Updates**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML page listing news and updates related to the trip.

#### Description

Displays trip-specific announcements, updates, and notifications for a traveler.

---

## 42. POST `/your-trip/<traveler_on_trip_id>/news-and-updates/mark-all-as-read`

**Mark News as Read**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or JSON indicating success.

#### Side Effects

* Marks all unread trip updates as read for the traveler.

#### Description

Marks all trip news and updates as read.

---

## 43. GET `/your-trip/<traveler_on_trip_id>/dates-and-prices`

**Dates & Prices**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML page displaying trip dates, pricing, and extension options.

#### Description

Shows pricing breakdown and available extensions for the booked trip.

---

## 44. GET `/your-trip/<traveler_on_trip_id>/welcome`

**Trip Welcome Page**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML welcome page with onboarding checklist.

#### Description

Displays welcome content and onboarding checklist for the traveler.

---

## 45. GET `/your-trip/<traveler_on_trip_id>/requirements`

**Trip Requirements**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML page listing required documents and actions.

#### Description

Shows all trip requirements and their completion status (passport, forms, agreements, etc.).

---

## 46. GET `/your-trip/<traveler_on_trip_id>/contact-info`

**Traveler Contact Information**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML page displaying traveler contact information.

---

## 47. POST `/your-trip/<traveler_on_trip_id>/contact-info/update`

**Update Contact Information**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field               | Type         | Required | Constraints   |
| ------------------- | ------------ | -------- | ------------- |
| `street_address`    | string       | ✓        | Max 100 chars |
| `street_address_2`  | string       | ✗        | Max 100 chars |
| `city`              | string       | ✓        | Max 50 chars  |
| `state_or_province` | string       | ✓        | —             |
| `postal_code`       | string       | ✓        | Required      |
| `country`           | country code | ✓        | ISO-2         |

#### Response

**Success:** 302 Redirect
**Error:** 400 / 403

#### Side Effects

* Updates `Traveler` address fields

#### Description

Updates traveler contact and address information.

---

## 48. GET `/your-trip/<traveler_on_trip_id>/statement-of-account`

**Statement of Account**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML statement of account page for the traveler.

---

## 49. GET `/your-trip/<traveler_on_trip_id>/statement-of-account/print`

**Printable Statement**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

Printable HTML statement of account.

---

## 50. GET `/your-trip/<traveler_on_trip_id>/extra-info`

**Extra Traveler Information**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

HTML page for additional traveler details.

#### Description

Displays supplemental traveler information (dietary needs, rooming preferences, comments).

---

## 51. GET, POST `/your-trip/<traveler_on_trip_id>/cancel`

**Cancel Trip Registration**

| Property    | Value            |
| ----------- | ---------------- |
| **Methods** | GET, POST        |
| **Auth**    | ✓ login_required |

#### Response

**GET:** HTML cancellation form
**POST:** Redirect on success

#### Side Effects

* Marks `TravelerOnTrip` as cancelled
* Sends notification emails

#### Description

Allows a traveler to cancel their trip registration.

---

## 52. POST `/your-trip/<traveler_on_trip_id>/dates-and-prices/add-extension`

**Add Trip Extension**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or JSON depending on implementation.

#### Description

Adds a trip extension to the booking.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 53. POST `/your-trip/<traveler_on_trip_id>/dates-and-prices/confirm-extension`

**Confirm Trip Extension**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or JSON on success.

#### Description

Confirms selected trip extension and updates pricing.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 54. GET `/your-trip/terms`

**Legacy Terms Page**

| Property   | Value     |
| ---------- | --------- |
| **Method** | GET       |
| **Auth**   | None      |

#### Response

HTML terms page.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 55. GET, POST `/your-trip/<traveler_on_trip_id>/requirements/terms`

**Trip Terms Acceptance**

| Property    | Value            |
| ----------- | ---------------- |
| **Methods** | GET, POST        |
| **Auth**    | ✓ login_required |

#### Response

HTML page or redirect after acceptance.

#### Side Effects

* Records acceptance timestamp

#### Description

Allows travelers to review and accept trip-specific terms.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 56. POST `/your-trip/<traveler_on_trip_id>/requirements/agree-to-flight-dates`

**Agree to Flight Dates**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or JSON confirmation.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 57. POST `/your-trip/<traveler_on_trip_id>/requirements/confirm-self-travel-dates`

**Confirm Self-Arranged Travel Dates**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or JSON confirmation.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 58. GET, POST `/your-trip/<traveler_on_trip_id>/requirements/choose-a-hammock`

**Choose Hammock / Lodging**

| Property    | Value            |
| ----------- | ---------------- |
| **Methods** | GET, POST        |
| **Auth**    | ✓ login_required |

#### Response

HTML page or redirect after submission.

#### Description

Select lodging or hammock preference for the trip.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 59. POST `/your-trip/<traveler_on_trip_id>/requirements/set-passport`

**Set Passport Information**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field             | Type   | Required |
| ----------------- | ------ | -------- |
| `passport_number` | string | ✓        |
| `passport_expiry` | date   | ✓        |

#### Response

302 Redirect on success.

#### Side Effects

* Updates `Traveler` passport fields
* Marks passport requirement as fulfilled

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 60. POST `/your-trip/<traveler_on_trip_id>/requirements/set-emergency-contact`

**Set Emergency Contact**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field                     | Type   | Required |
| ------------------------- | ------ | -------- |
| `emergency_contact_name`  | string | ✓        |
| `emergency_contact_phone` | string | ✓        |

#### Response

302 Redirect on success.

#### Description

Stores emergency contact details for the traveler.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 61. POST `/your-trip/<traveler_on_trip_id>/requirements/set-postal`

**Set Postal Code Requirement**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field         | Type   | Required |
| ------------- | ------ | -------- |
| `postal_code` | string | ✓        |

#### Response

**Success:** 302 Redirect
**Error:** 400 / 403

#### Side Effects

* Updates traveler postal code
* Marks postal code requirement as fulfilled

#### Description

Updates the postal/ZIP code requirement for the traveler.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 62. POST `/your-trip/<traveler_on_trip_id>/requirements/choose-a-hammock/edit`

**Edit Hammock / Lodging Preference**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field               | Type   | Required |
| ------------------- | ------ | -------- |
| `hammock_selection` | string | ✓        |

#### Response

302 Redirect on success.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 63. POST `/your-trip/<traveler_on_trip_id>/requirements/sleeping_partner/edit`

**Set Sleeping Partner**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field              | Type   | Required |
| ------------------ | ------ | -------- |
| `sleeping_partner` | string | ✓        |

#### Response

302 Redirect on success.

#### Description

Sets or updates the sleeping partner for the trip.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 64. POST `/your-trip/<traveler_on_trip_id>/requirements/insurance/edit`

**Choose Insurance Option**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field                 | Type   | Required |
| --------------------- | ------ | -------- |
| `insurance_selection` | choice | ✓        |

#### Response

302 Redirect on success.

#### Side Effects

* Sends FNE notification email on change

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 65. POST `/your-trip/<traveler_on_trip_id>/requirements/insurance-policy-number/edit`

**Set Insurance Policy Number**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field                     | Type   | Required |
| ------------------------- | ------ | -------- |
| `insurance_provider`      | string | ✓        |
| `insurance_policy_number` | string | ✓        |

#### Response

302 Redirect on success.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 66. POST `/your-trip/<traveler_on_trip_id>/requirements/terms/edit`

**Accept Trip Terms (Edit View)**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Request Body

| Field             | Type    | Required |
| ----------------- | ------- | -------- |
| `agreed_to_terms` | boolean | ✓        |
| `signature`       | string  | ✗        |

#### Response

302 Redirect on success.

#### Side Effects

* Updates `TravelerOnTrip.agreed_to_terms_on` timestamp

#### Description

Accepts trip terms and records agreement.

⚠️ **Note:** This endpoint is conditional on the Trip definition and may not be used for all trips.

---

## 67. POST `/your-trip/<traveler_on_trip_id>/requirements/opt-out-dvd`

**Opt Out of Trip DVD**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

302 Redirect on success.

#### Description

⚠️ **Note:** This endpoint is a legacy feature left over from a previous project. It is conditional on the Trip definition and may not be used in current deployments.

---

## 68. GET, POST `/login`

**User Login**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Response

**GET:** HTML login form
**POST:** Redirect on success or re-render on error

---

## 69. POST `/change-password`

**Change Password**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Response

Redirect or re-render with validation errors.

---

## 70. GET, POST `/forgotten-password`

**Forgotten Password**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Description

Initiates password reset flow via email.

---

## 71. GET, POST `/set-password`

**Set Password**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Description

Sets a new password using a reset token.

---

## 72. GET `/logout`

**User Logout**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | GET              |
| **Auth**   | ✓ login_required |

#### Response

Redirects to homepage.

---

## 73. POST `/fb-email-update`

**Facebook Email Update**

| Property   | Value            |
| ---------- | ---------------- |
| **Method** | POST             |
| **Auth**   | ✓ login_required |

#### Description

Updates user email address when logging in via Facebook.

---

## 74. GET, POST `/discourse/sso`

**Discourse SSO**

| Property    | Value        |
| ----------- | ------------ |
| **Methods** | GET, POST    |
| **Auth**    | None         |

#### Description

Handles Discourse single sign-on authentication.

---

## 75. GET `/cities-of-origin/`

**Cities of Origin**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |

#### Response

JSON or HTML list of cities.

---

## 76. GET `/galleries/<key>`

**Gallery View**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET          |
| **Auth**   | None         |

#### Response

HTML gallery page.

---

## 77. GET `/admin/gallery/import`

**Import Gallery Photos**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

#### Description

Imports images into galleries from configured source.

---

## 78. POST `/admin/copy-trips`

**Copy Trips (Admin)**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | POST          |
| **Auth**   | ✓ Admin       |

---

## 79. GET `/admin/copy-trips/success`

**Copy Trips Success Page**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

---

## 80. GET `/admin/missing-combo-trips/<year>`

**Find Missing Combo Trips**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

---

## 81. GET `/admin/validate-combo-trips/<year>`

**Validate Combo Trips**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

---

## 82. GET `/admin/build-combo-trips/<year>`

**Build Combo Trips**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

---

## 83. GET `/admin/travel/tripgroup/<group_id>/export/csv/`

**Export Trip Group CSV**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

#### Response

CSV file download.

---

## 84. GET `/enhanced-traveler-admin/`

**Enhanced Admin Interface**

| Property   | Value         |
| ---------- | ------------- |
| **Method** | GET           |
| **Auth**   | ✓ Admin       |

---

## 85. POST `/dismiss/gdpr`

**Dismiss GDPR Banner**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | POST         |
| **Auth**   | None         |

#### Response

200 OK and sets `gdpr` cookie.

---

## 86. POST `/api/send-password-email`

**Send Password / Account Setup Email**

| Property   | Value        |
| ---------- | ------------ |
| **Method** | GET, POST    |
| **Auth**   | None         |

#### Request

| Field         | Type  | Required |
| ------------- | ----- | -------- |
| `traveler_id` | int   | ✓*       |
| `email`       | email | ✓*       |

* At least one must be provided.

#### Response

```json
{
  "success": true,
  "message": "Password email sent",
  "traveler_id": 123,
  "email": "user@example.com",
  "user_id": 456
}
```

#### Side Effects

* Creates user account if missing
* Sends password reset email
* Logs account activity

#### Description

Sends a password setup or reset email to a traveler.

---

Notes:
- All HTML endpoints return templates rendered by `FreeEasyView` subclasses unless noted otherwise.
- Authentication/permission requirements are indicated where enforced in views (e.g. `login_required`, `permission_required`).
- For endpoints that accept forms, the exact fields are defined by the forms in `epictravels.travel.forms` (e.g., `RegistrationYourInfoForm`, `PlaidPaymentForm`, `StripePaymentForm`, etc.).
