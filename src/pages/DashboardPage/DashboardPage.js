import React from "react";
import land from "../../assets/land.png";
import "./style.scss";

const DashboardPage = () => {
  return (
    <main className="dashbard-main">
      <div className="dashboard-title-container">
        <h1 className="dashboard-title__t1">Imagine if</h1>
        <h1 className="dashboard-title__t2">Snapchat</h1>
        <h1 className="dashboard-title__t1">had events.</h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <img src={land} className="dashboard-land" alt="" />
      <button type="button" className="dashboard-create__button">
        🎉 Create my event
      </button>
    </main>
  );
};

export default DashboardPage;
