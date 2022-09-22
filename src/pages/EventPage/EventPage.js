import React from "react";
import { useEvent } from "../../context";
import cake from "../../assets/cake.png";
import { BsCalendar4Week, BsGeoAlt, BsChevronRight } from "react-icons/bs";
import "./style.scss";

const EventPage = () => {
  const { event } = useEvent();
  return (
    <main className="event-main">
      <img src={cake} className="event-land" alt="" />
      <div className="event-title-container">
        <h1 className="event-title__t1">{event?.name || ''}</h1>
        <p>{`Hosted by ${event?.host || ''}`}</p>
      </div>

      <div className="event-container">
        <div className="event-icon-container">
          <BsCalendar4Week />
        </div>
        <div className="event-item-container">
          <h2>{event?.start || ''}</h2>
          <label>{`to ${event?.end || ''}`}</label>
        </div>
        <BsChevronRight />
      </div>
      <div className="event-container">
        <div className="event-icon-container">
          <BsGeoAlt />
        </div>
        <div className="event-item-container">
          <h2>{"Street name"}</h2>
          <label>{event?.location || ''}</label>
        </div>
        <BsChevronRight />
      </div>
    </main>
  );
};

export default EventPage;
