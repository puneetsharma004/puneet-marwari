import Image from "next/image";
import React from "react";

export default function HeroBanner({ imageSrc, title, description }) {
    return (
        <section className="pageHeader -type-1">
            <div className="pageHeader__bg">
                <Image
                    width={1800}
                    height={500}
                    src={imageSrc || "/img/pageHeader/1.jpg"}
                    alt={title || "page header"}
                    priority
                    style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0, // Covers top, left, right, bottom 0
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity (0.4) for darkness
                        zIndex: 1
                    }}
                />
            </div>


            <div className="container">
                <div className="row justify-center">
                    <div className="col-12">
                        <div className="pageHeader__content">
                            <h1 className="text-white uppercase">
                                {title || "Default Title"}
                            </h1>

                            <p className="pageHeader__text">
                                {description || "Default description text goes here."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}