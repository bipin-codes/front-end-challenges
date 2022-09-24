import React, { useEffect, useState } from "react";
import useUserLocation from "../../hooks/useUserLocation";
import useWeatherAPI from "../../hooks/useWeatherAPI";
import { IWeather } from "../../types/Weather";
import "./Weather.css";
const WeatherPage = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeather | null>(null);
  const [unit, setUnit] = useState<"c" | "f">("c");
  const {
    getLocation,
    data: locationData,
    // error: locationError,
  } = useUserLocation();

  const {
    toFetch: fetchWeatherData,
    data: weatherData,
    // loading: weatherDataLoading,
  } = useWeatherAPI();

  //fetches user location
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (!locationData) {
      console.log("no data return");
      return;
    }
    fetchWeatherData(
      locationData.coords.latitude.toString(),
      locationData.coords.longitude.toString()
    );
  }, [locationData, fetchWeatherData]);

  useEffect(() => {
    setWeatherInfo(weatherData);
  }, [weatherData]);

  const getDate = (value: string | undefined) => {
    if (!value) return "";
    const date = new Date(value);
    const data = date.toDateString().split(" ");
    return `${data[0]}, ${data[2]} ${data[1]}`;
  };

  const temp = (value: number | undefined) => {
    if (!value) return 0;
    if (unit === "f") return (value * 1.8 + 32).toPrecision(2);

    return value.toPrecision(2);
  };

  return (
    <>
      <div className="weather-root">
        <div className="left-panel">
          <div className="cloud">
            <img
              className="resp"
              src={require("../../assets/images/cloud-collection.png")}
              alt="clouds"
            />
          </div>
          <div className="left-panel-header">
            <input type="text" placeholder="Search for places" />
            <button type="button">
              <span className="material-icons">{"my_location"}</span>
            </button>
          </div>
          <div className="left-panel-body">
            <div className="left-panel-body-image">
              <img
                src={require("../../assets/images/Shower.png")}
                alt="shower"
              />
            </div>
            <div>
              <span className="temp-value">
                {temp(weatherInfo?.list[0]?.main.temp)}
              </span>
              {unit === "c" && <span className="temp-sym">&#8451; </span>}
              {unit === "f" && <span className="temp-sym">&#x2109; </span>}
            </div>
            <div>
              <span className="weather-words">
                {weatherInfo?.list[0]?.weather[0].description}
              </span>
            </div>
          </div>
          <div className="left-panel-footer">
            <div className="left-panel-footer-date">
              <span>Today</span>
              <span>.</span>
              <span>{getDate(weatherInfo?.list[0].dt_txt)}</span>
            </div>
            <div className="left-panel-footer-date">
              <span className="material-icons">{"location_on"}</span>
              <span>{weatherInfo?.city.name}</span>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="right-panel-header">
            <button
              className="circle-button"
              type="button"
              onClick={() => {
                setUnit("c");
              }}
            >
              <span>&#8451;</span>
            </button>
            <button
              type="button"
              className="circle-button"
              onClick={() => setUnit("f")}
            >
              <span>&#x2109;</span>
            </button>
          </div>
          <div className="right-panel-body">
            <div className="rp-body-top">
              {weatherInfo?.list
                .slice(3)

                .map((data, index) => {
                  return index === 0 || index % 8 === 0 ? (
                    <div className="weather-card">
                      <h5>{getDate(data.dt_txt)}</h5>
                      <img
                        src={require("../../assets/images/Shower.png")}
                        alt=""
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        {unit === "c" && (
                          <h6>{temp(data.main.temp_max)}&#8451;</h6>
                        )}
                        {unit === "f" && (
                          <h6>{temp(data.main.temp_max)}&#x2109;</h6>
                        )}

                        {unit === "c" && (
                          <h6>{temp(data.main.temp_min)}&#8451;</h6>
                        )}
                        {unit === "f" && (
                          <h6>{temp(data.main.temp_min)}&#x2109;</h6>
                        )}
                      </div>
                    </div>
                  ) : null;
                })}
            </div>
            <h4>Today's Highlight</h4>
            <div className="weather-grid">
              <div className="weather-grid-item">
                <h6>Wind status</h6>
                <div className="wind">
                  <span className="percentage-value">
                    {weatherInfo?.list[0]?.wind.speed}
                  </span>
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
                  <span className="percentage-value">
                    {weatherData?.list[0]?.main.humidity}
                  </span>
                  <span className="percentage-symbol">%</span>
                </div>
                <div className="humidity">
                  <div>
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                  <div
                    className="bar"
                    style={{ width: `${weatherInfo?.list[0]?.main.humidity}%` }}
                  ></div>
                  <div>
                    <span style={{ marginLeft: "auto" }}>%</span>
                  </div>
                </div>
              </div>

              <div className="weather-grid-item">
                <h6>Visibility</h6>
                <div>
                  <span className="percentage-value">
                    {weatherInfo?.list[0]?.visibility}
                  </span>
                  <span className="percentage-symbol">miles</span>
                </div>
              </div>

              <div className="weather-grid-item">
                <h6>AirPressure</h6>
                <div>
                  <span className="percentage-value last-up">
                    {weatherInfo?.list[0]?.main.pressure}
                  </span>
                  <span className="percentage-symbol ">mb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
