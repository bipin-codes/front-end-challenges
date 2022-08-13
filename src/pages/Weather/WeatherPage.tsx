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
      <div className="right-panel">
        <div className="right-panel-header">
          <button className="circle-button" type="button">
            <span>&#8451;</span>
          </button>
          <button type="button" className="circle-button">
            <span>&#x2109;</span>
          </button>
        </div>
        <div className="right-panel-body">
          <div className="rp-body-top">
            <div className="weather-card">
              <h5>Tomorrow</h5>
              <img src={require("../../assets/images/Shower.png")} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6>16&#8451;</h6>
                <h6>11&#x2109;</h6>
              </div>
            </div>

            <div className="weather-card">
              <h5>Tomorrow</h5>
              <img src={require("../../assets/images/Shower.png")} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6>16&#8451;</h6>
                <h6>11&#x2109;</h6>
              </div>
            </div>

            <div className="weather-card">
              <h5>Tomorrow</h5>
              <img src={require("../../assets/images/Shower.png")} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6>16&#8451;</h6>
                <h6>11&#x2109;</h6>
              </div>
            </div>

            <div className="weather-card">
              <h5>Tomorrow</h5>
              <img src={require("../../assets/images/Shower.png")} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6>16&#8451;</h6>
                <h6>11&#x2109;</h6>
              </div>
            </div>

            <div className="weather-card">
              <h5>Tomorrow</h5>
              <img src={require("../../assets/images/Shower.png")} alt="" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h6>16&#8451;</h6>
                <h6>11&#x2109;</h6>
              </div>
            </div>
          </div>
          <h4>Today's Highlight</h4>
          <div className="weather-grid">
            <div className="weather-grid-item">
              <h6>Wind status</h6>
              <div className="wind">
                <span className="percentage-value">7</span>
                <span className="percentage-symbol">mph</span>
              </div>
              <div>
                <span
                  style={{
                    rotate: "-150deg",
                    backgroundColor: "#FFFFFF4D",
                    borderRadius: 200,
                    padding: ".5rem",
                    color: "#fff",
                  }}
                  className="material-icons"
                >
                  {"navigation"}
                </span>
              </div>
            </div>

            <div className="weather-grid-item">
              <h6>Humidity</h6>
              <div className="percentage">
                <span className="percentage-value">84</span>
                <span className="percentage-symbol">%</span>
              </div>
              <div className="humidity">
                <div>
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </div>
                <div className="bar"></div>
                <div>
                  <span style={{ marginLeft: "auto" }}>%</span>
                </div>
              </div>
            </div>

            <div className="weather-grid-item">
              <h6>Visibility</h6>
              <div>
                <span className="percentage-value">6,4</span>
                <span className="percentage-symbol">miles</span>
              </div>
            </div>

            <div className="weather-grid-item">
              <h6>AirPressure</h6>
              <div>
                <span className="percentage-value last-up">998</span>
                <span className="percentage-symbol ">mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
