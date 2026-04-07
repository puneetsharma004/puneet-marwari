import CommonHero from "@/components/common/CommonHero";
import HeroBanner from "@/components/common/HeroBanner";
import BookingConditionsBody from "@/components/pages/booking-conditions/BookingConditionsBody";

export default function page() {
  return (
    <>
      <HeroBanner
        title="Booking Conditions"
        description="Booking Conditions"
        imageSrc="/heroimg/booking-hero.webp"
      />

      <BookingConditionsBody />
    </>
  );
}
