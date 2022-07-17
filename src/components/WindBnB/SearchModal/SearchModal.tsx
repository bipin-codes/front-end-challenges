import React, { useState } from "react";
import { Guests } from "../type";
import Styles from "./SearchModal.module.css";

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
    <div className={Styles.modal_bg}>
      <div className={Styles.container}>
        <div className={Styles.nav}>
          <button
            autoFocus
            type="button"
            className={Styles.nav_filter}
            onClick={() => {
              setCurrentFilter("Location");
            }}
          >
            <label className={Styles.nav_item_title}>Location</label>
            <label className={Styles.nav_item_value}>{city}</label>
          </button>
          <div className={Styles.v}></div>

          <button
            type="button"
            className={Styles.nav_filter}
            onClick={() => {
              setCurrentFilter("Guests");
            }}
          >
            <label className={Styles.nav_item_title}>Guests</label>
            <label className={Styles.nav_item_value}>
              {guests.adults + guests.children === 0
                ? "Add guests"
                : guests.adults + guests.children}
            </label>
          </button>
          <div className={Styles.v}></div>

          <div className={Styles.nav_search}>
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

        <div className={Styles.content}>
          <div>
            {currentFilter === "Location" && (
              <div className={Styles.locationFilter}>
                <ul>
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
              <div className={Styles.guestFilter}>
                <div className={Styles.guestFilterGroup}>
                  <h6>Adults</h6>
                  <label>Ages 13 or above</label>
                  <div className={Styles.guestFilterControl}>
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
                <div className={Styles.guestFilterGroup}>
                  <h6>Children</h6>
                  <label>Ages 2 - 12</label>
                  <div className={Styles.guestFilterControl}>
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
