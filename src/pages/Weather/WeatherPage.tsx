import React from "react";
import "./Weather.css";
const WeatherPage = () => {
  return (
    <div className="weather-root">
      <div className="cloud">
        <img
          src={require("../../assets/images/cloud-collection.png")}
          alt="clouds"
        />
      </div>
      <div className="left-panel">
        <div className="left-panel-header">
          <input type="text" placeholder="Search for places" />
          <button type="button">
            <span className="material-icons">{"my_location"}</span>
          </button>
        </div>
        <div className="left-panel-body">
          <div className="left-panel-body-image">
            <img src={require("../../assets/images/Shower.png")} alt="shower" />
          </div>
          <div>
            <span className="temp-value">15</span>
            <span className="temp-sym">&#8451;</span>
          </div>
          <div>
            <span className="weather-words">Shower</span>
          </div>
        </div>
        <div className="left-panel-footer">
          <div className="left-panel-footer-date">
            <span>Today</span>
            <span>.</span>
            <span>Fri, 5 Jun</span>
          </div>
          <div className="left-panel-footer-date">
            <span className="material-icons">{"location_on"}</span>
            <span>Helsinki</span>
          </div>
        </div>
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default WeatherPage;
