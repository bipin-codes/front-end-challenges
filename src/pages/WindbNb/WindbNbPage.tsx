import React, { useState } from "react";
import Header from "../../components/WindBnB/Header/Header";
import Modal from "../../components/WindBnB/Modal/Modal";
import Navbar from "../../components/WindBnB/Navbar/Navbar";
import SearchModal from "../../components/WindBnB/SearchModal/SearchModal";
import Stay from "../../components/WindBnB/type";
import data from "../../stays.json";
import styles from "./WindbNb.module.css";
const WindBnb = () => {
  const [stays] = useState<[Stay]>(data as [Stay]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderStay = (stay: Stay, index: number) => {
    return (
      <div key={index} className={styles.card}>
        <div className={styles.card_image}>
          <img src={stay.photo} alt="" />
        </div>
        <div className={styles.card_body}>
          {stay.superHost ? (
            <span className={styles.card_tag}>Super Host</span>
          ) : null}
          <span className={styles.card_detail}>
            {stay.type}.{stay.beds}
          </span>
          <span className={styles.card_rating}>
            <span className={"material-icons " + styles.icon}>{"star"}</span>
            {stay.rating}
          </span>
        </div>
        <div>
          <p className={styles.card_title}>{stay.title}</p>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={styles.parent_container}>
        {/* NAVBAR */}
        <div
          style={{
            position: "sticky",
            width: "100%",
            top: 0,
            background: "#fff",
            padding: "2rem",
          }}
        >
          <Navbar
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
          <SearchModal />
        </Modal>

        {/* HEADER FOR CONTENT */}
        <Header staysLength={data.length} />

        {/* PAGE CONTENT - LIST OF STAYS */}

        <div className={styles.grid}>
          {stays.map((stay, index) => renderStay(stay, index))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default WindBnb;
