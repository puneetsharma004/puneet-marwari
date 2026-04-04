import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <>
      <h4 className="">Tour Overview</h4>
      <p className="mt-20 mb-20">
        Experience Greece on a journey that moves from ancient history to island
        life, from cultural landmarks to long dinners by the sea. Beginning in
        Athens and continuing through Santorini, Naxos, Paros, and Mykonos, this
        trip is designed to show different sides of Greece, each with its own
        pace and personality. Along the way, explore historic sites, walk
        through whitewashed villages, sail across the Aegean, and enjoy the kind
        of meals and evenings that become some of the most memorable parts of
        travel.
        <br />
        <br />
        This itinerary is designed for travelers who want to experience Greece
        in a thoughtful and well-paced way, with beautiful hotels, meaningful
        experiences, and time to both explore and simply enjoy where you are.
      </p>
      <Image
        width={1150}
        height={750}
        alt="Map"
        src="/img/greece/greece-map.png"
      />
    </>
  );
}
