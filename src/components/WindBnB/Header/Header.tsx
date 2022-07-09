import React, { FC } from "react";
import styles from "./Header.module.css";
const Header: FC<{ staysLength: number }> = ({ staysLength }) => {
  return (
    <div className={styles.content_body}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>Stays in Finland</div>
        <div className={styles.header_right}>{staysLength}+Stays</div>
      </div>
      {/* LOAD rooms in grid */}
    </div>
  );
};
export default Header;
