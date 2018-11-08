import React, { Component } from "react";
import styles from "./container.module.css";

let colors = ["red", "blue", "purple", "orange", "green", "yellow"];
//It is actually going to be displayed as a color image

export default class Color extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
      const { onDragStart, onDragOver } = this.props
    return (
      <div>
        <ul className="container">
          {colors.map((color, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={e => onDragStart(e, idx)}
              onDragOver={e => onDragOver(e)}
              className={styles.draggable}
              style={{
                backgroundColor: `${color}`,
                padding: `25px`,
                width: `200px`
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}
