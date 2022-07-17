import React, { useEffect, useRef, useState } from "react";
import Styles from "./SearchModal.module.css";
const SearchModal = () => {
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
            <label className={Styles.nav_item_value}>Helsinki, Finland</label>
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
            <label className={Styles.nav_item_value}>Add Guests</label>
          </button>
          <div className={Styles.v}></div>

          <div className={Styles.nav_search}>
            <div>
              <span
                className="material-icons icon"
                onClick={() => {
                  console.log("Search Clicked!");
                }}
              >
                {"search"}
              </span>
              <label>Search</label>
            </div>
          </div>
        </div>

        <div className={Styles.content}>
          <div>
            {currentFilter === "Location" && (
              <div className={Styles.locationFilter}>
                <ul>
                  <li>
                    <span className="material-icons">{"pin_drop"}</span>
                    <label>Helsinki, Finland</label>
                  </li>
                  <li>
                    <span className="material-icons">{"pin_drop"}</span>
                    <label>Turku, Finland</label>
                  </li>
                  <li>
                    <span className="material-icons">{"pin_drop"}</span>
                    <label>Oulu, Finland</label>
                  </li>
                  <li>
                    <span className="material-icons">{"pin_drop"}</span>
                    <label>Vaasa, Finland</label>
                  </li>
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
                    <button> - </button>
                    <label> 0 </label>
                    <button> + </button>
                  </div>
                </div>
                <div className={Styles.guestFilterGroup}>
                  <h6>Children</h6>
                  <label>Ages 2 - 12</label>
                  <div className={Styles.guestFilterControl}>
                    <button>-</button>
                    <label>0</label>
                    <button>+</button>
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
