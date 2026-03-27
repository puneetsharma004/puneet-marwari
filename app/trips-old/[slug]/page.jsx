// app/trips/[slug]/page.jsx
import TripDetail from "@/components/common/TripDetail";
import { getTripBySlug, tripsData } from "@/data/trips";

import { notFound } from "next/navigation";

// tells Next.js which slugs to pre-build at build time
export async function generateStaticParams() {
    return tripsData.map((trip) => ({ slug: trip.slug }));
}

// generates the <title> and meta per trip
export async function generateMetadata({ params }) {
    const trip = getTripBySlug(params.slug);
    if (!trip) return {};
    return {
        title: `${trip.title} | Detours Travel`,
        description: trip.description[0],
    };
}

export default function TripPage({ params }) {
    const trip = getTripBySlug(params.slug);
    if (!trip) notFound(); // shows 404 if slug doesn't exist
    return <TripDetail trip={trip} />;
}