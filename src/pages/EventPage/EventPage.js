import React from "react";
import cake from "../../assets/cake.png";
import "./style.scss";
import { BsCalendar4Week, BsGeoAlt, BsChevronRight } from "react-icons/bs";

const EventPage = () => {
  return (
    <main className="event-main">
      <img src={cake} className="event-land" alt="" />
      <div className="event-title-container">
        <h1 className="event-title__t1">{"Birthday Bash"}</h1>
        <p>{"Hosted by Elysia"}</p>
      </div>

      <div className="event-container">
        <div className="event-icon-container">
          <BsCalendar4Week />
        </div>
        <div className="event-item-container">
          <h2>{"18 August 6:00PM"}</h2>
          <label>{"to 19 August 1:00PM UTC +10"}</label>
        </div>
        <BsChevronRight />
      </div>
      <div className="event-container">
        <div className="event-icon-container">
          <BsGeoAlt />
        </div>
        <div className="event-item-container">
          <h2>{"Street name"}</h2>
          <label>{"Suburb, State, Postcode"}</label>
        </div>
        <BsChevronRight />
      </div>
    </main>
  );
};

export default EventPage;
