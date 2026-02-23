import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";


export default function Features6() {
    return (
        <section className="student-section">
            {/* Abstract Background Layer */}
            <div className="abstract-bg"></div>
            <div className="container student-content">

                {/* Heading */}
                <div className="student-heading">

                    <h2 className="text-white">
                        Why choose <span className="highlight">Tourz</span>
                    </h2>

                    <p className="text-white">
                        Most viewed and all-time top-selling services
                    </p>
                </div>

                {/* Cards */}
                <div className="student-grid">
                    {whyCards.map((elm, i) => (
                        <div key={i} className="student-card">
                            <Image
                                src={elm.image}
                                alt={elm.title}
                                fill
                                className="card-img"
                            />
                            <div className="card-overlay"></div>

                            <div className="card-title">
                                {elm.title}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}



const whyCards = [
    {
        id: 1,
        image: "/home/why1.png",
        title: "Ultimate flexibility",
        text: "You’re in control, with free cancellation and payment.",
    },
    {
        id: 2,
        image: "/home/why2.png",
        title: "Memorable experiences",
        text: "Browse and book tours and activities so incredible.",
    },
    {
        id: 3,
        image: "/home/why3.png",
        title: "Quality at our core",
        text: "High quality standards. Millions of reviews.",
    },
];