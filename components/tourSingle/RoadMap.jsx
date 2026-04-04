import { roadmapData } from "@/data/tourSingleContent";
import React from "react";

export default function RoadMap() {
  return (
    <div className="roadmap">
      {roadmapData.map((elm, i) => (
        <div key={i} className="roadmap__item">
          {elm.icon ? (
            <div className="roadmap__iconBig">
              <i className={elm.icon}></i>
            </div>
          ) : (
            <div className="roadmap__icon"></div>
          )}

          <div className="roadmap__wrap">
            <h5>{elm.title}</h5>

            {elm.content && (
              <div className="roadmap__content">
                {Array.isArray(elm.content) ? (
                  elm.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index !== elm.content.length - 1 ? "mb-15" : ""
                      }
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{elm.content}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
