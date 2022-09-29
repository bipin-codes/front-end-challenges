import React, { useState } from "react";
import { Guests } from "../type";
import "./SearchModal.css";

interface SearchModalProps {
  onSearchClick: () => void;

  onSetCity: (city: string) => void;

  onSetGuests: (guests: Guests) => void;

  city: string;
  guests: Guests;
  cities: Array<string>;
}

const SearchModal: React.FC<SearchModalProps> = ({
  onSearchClick,
  city,
  guests,
  onSetCity,
  onSetGuests,
  cities,
}) => {
  const [currentFilter, setCurrentFilter] = useState<string>("Location");
  return (
    <div className={"modal_bg"}>
      <div className={"modal_container"}>
        <div className={"nav"}>
          <button
            autoFocus
            type="button"
            className={"nav_filter"}
            onClick={() => {
              setCurrentFilter("Location");
            }}
          >
            <label className={"nav_item_title"}>Location</label>
            <label className={"nav_item_value"}>{city}</label>
          </button>
          <div className={"v"}></div>

          <button
            type="button"
            className={"nav_filter"}
            onClick={() => {
              setCurrentFilter("Guests");
            }}
          >
            <label className={"nav_item_title"}>Guests</label>
            <label className={"nav_item_value"}>
              {guests.adults + guests.children === 0
                ? "Add guests"
                : guests.adults + guests.children}
            </label>
          </button>
          <div className={"v"}></div>

          <div className={"nav_search"}>
            <div
              onClick={() => {
                onSearchClick();
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="material-icons icon">{"search"}</span>
              <label>Search</label>
            </div>
          </div>
        </div>

        <div className={"modal_content"}>
          <div>
            {currentFilter === "Location" && (
              <div className={"locationFilter"}>
                <ul style={{ color: "black" }}>
                  {cities.map((city) => {
                    return (
                      <li
                        key={city}
                        onClick={() => {
                          onSetCity(city);
                        }}
                      >
                        <span className="material-icons">{"pin_drop"}</span>
                        <label>{city}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div>
            {currentFilter !== "Location" && (
              <div className={"guestFilter"}>
                <div className={"guestFilterGroup"}>
                  <h6>Adults</h6>
                  <label>Ages 13 or above</label>
                  <div className={"guestFilterControl"}>
                    <button
                      onClick={() => {
                        onSetGuests({
                          ...guests,
                          adults: guests.adults - 1 < 0 ? 0 : guests.adults - 1,
                        });
                      }}
                    >
                      -
                    </button>
                    <label> {guests.adults} </label>
                    <button
                      onClick={() => {
                        onSetGuests({ ...guests, adults: guests.adults + 1 });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={"guestFilterGroup"}>
                  <h6>Children</h6>
                  <label>Ages 2 - 12</label>
                  <div className={"guestFilterControl"}>
                    <button
                      onClick={() => {
                        onSetGuests({
                          ...guests,
                          children:
                            guests.children - 1 < 0 ? 0 : guests.children - 1,
                        });
                      }}
                    >
                      -
                    </button>
                    <label>{guests.children}</label>
                    <button
                      onClick={() => {
                        onSetGuests({
                          ...guests,
                          children: guests.children + 1,
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
