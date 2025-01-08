import React from "react";
import "./../../../src/style/base.css";
import "./style.css";

const DashboardCard = ({ number, text, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-upper flex space-between">
        <h1 className="card-number">{number}</h1>
        <div className="card-icon">
          <img
            style={{ width: '55px', height: '55px' }}
            src={icon}
            alt="Icon"
          />
        </div>
      </div>

      <div className="card-bottom">
        <h2 className="card-label">{text}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
