import CommonHero from "@/components/common/CommonHero";
import BookingConditionsBody from "@/components/pages/booking-conditions/BookingConditionsBody";


export default function page() {
  return (
    <>
      <CommonHero
        title="Booking Conditions"
        subtitle="Booking Conditions"
        image="/heroimg/registration.jpg"
        breadcrumb="Booking Conditions"
      />  

      <BookingConditionsBody />
    </>
  );
}
