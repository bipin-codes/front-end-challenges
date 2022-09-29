import React, { useState } from "react";
import Header from "../../components/WindBnB/Header/Header";
import Modal from "../../components/WindBnB/Modal/Modal";
import Navbar from "../../components/WindBnB/Navbar/Navbar";
import SearchModal from "../../components/WindBnB/SearchModal/SearchModal";
import { Guests, Stay } from "../../components/WindBnB/type";
import data from "../../stays.json";
import "./WindbNb.css";

const cities = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
];

const WindBnb = () => {
  const [stays, setStays] = useState<Array<Stay>>(data as Array<Stay>);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [city, setCity] = useState(cities[0]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
  });

  const renderStay = (stay: Stay, index: number) => {
    return (
      <div key={index} className={"custom_card"}>
        <div className={"custom_card_image"}>
          <img src={stay.photo} alt="" />
        </div>
        <div className={"card_body"}>
          {stay.superHost ? (
            <span className={"card_tag"}>Super Host</span>
          ) : null}
          <span className={"card_detail"}>
            {stay.type}.{stay.beds}
          </span>
          <span className={"card_rating"}>
            <span className={`material-icons icon`}>{"star"}</span>
            {stay.rating}
          </span>
        </div>
        <div>
          <p className={"card_title"}>{stay.title}</p>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={"parent_container"}>
        {/* NAVBAR */}
        <div className={"navbar_container"}>
          <Navbar
            city={city}
            guests={guests.adults + guests.children}
            clickHandler={() => {
              setIsOpen(true);
            }}
          />
        </div>

        <Modal
          handleClose={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
        >
          <SearchModal
            cities={cities}
            city={city}
            guests={guests}
            onSetCity={(city: string) => setCity(city)}
            onSetGuests={(guests: Guests) => {
              setGuests(guests);
            }}
            onSearchClick={() => {
              setStays(
                (data as Array<Stay>).filter((stay) => {
                  return (
                    stay.maxGuests >= guests.adults + guests.children &&
                    stay.city === city.split(",")[0]
                  );
                })
              );
              setIsOpen(false);
            }}
          />
        </Modal>

        {/* HEADER FOR CONTENT */}
        <Header staysLength={data.length} />

        {/* PAGE CONTENT - LIST OF STAYS */}

        <div className={"custom_grid"}>
          {stays.map((stay, index) => renderStay(stay, index))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default WindBnb;
