import React from "react";
import { SpecialEventsSectionProps } from "../typescript/component";
import { Context } from "../typescript/pages";
import { getEventListRes, getPageRes } from "../helper";
import Link from "next/link";

export default function SpecialEventsSection({
  title,
  description,
  special_events: events,
}: SpecialEventsSectionProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {events?.map((event, index) => (
          <Link
            key={index}
            href={`/special-events${event.url}`}
            className="logo-tag"
            title="Contentstack"
          >
            <div
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                width: 300,
                cursor: "pointer",
              }}
            >
              <h3>{event.special_event_title}</h3>
              <img
                src={event.image.url}
                alt={event.special_event_title}
                style={{ width: "100%", height: 200 }}
              />
              <p>{event.description}</p>
              <p>Date: {event.date_of_event}</p>
              <p>Location: {event.location}</p>
              <p>Related Superheroes:</p>
              <p>
                {event.heroes.map((heroe) => {
                  return `${heroe.title} `;
                })}
              </p>
              <p>Related Blog Entries:</p>
              <p>
                {event.blogs.map((blog) => {
                  return `${blog.title} `;
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
