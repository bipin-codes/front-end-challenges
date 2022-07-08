import React from "react";
import Navbar from "../../components/WindBnB/Navbar/Navbar";
import data from "../../stays.json";
import styles from "./WindbNb.module.css";
const WindBnb = () => {
  return (
    <React.Fragment>
      <div className={styles.parent_container}>
        <Navbar />
      </div>
    </React.Fragment>
  );
};
export default WindBnb;
