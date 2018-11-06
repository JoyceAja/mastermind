import React from "react";
import styles from "./container.module.css";

let colors = ["red", "blue", "purple", "orange", "green", "yellow"];
//It is actually going to be displayed as a color image

export default () => (
  <div>
    <ul className="container">
      {colors.map((color, idx) => (
        <div
          key={idx}
          draggable
          className={styles.draggable}
          style={{
            backgroundColor: `${color}`,
            padding: `15px`,
            width: `200px`
          }}
        >
        </div>
      ))}
    </ul>
  </div>
);
