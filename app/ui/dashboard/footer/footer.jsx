import React from "react";
import styles from "./footer.module.css";

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bleak dev</div>
      <div className={styles.text}>All right are reserved.</div>
    </div>
  );
};

export default footer;
