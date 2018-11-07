import React from "react";
import styles from "./container.module.css";

let colors = ["red", "blue", "purple", "orange", "green", "yellow"];
//It is actually going to be displayed as a color image

export default class Color extends Component {
    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id)
    }
  render() {
    return (
      <div>
        <ul className="container">
          {colors.map((color, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => this.onDragStart(e, idx)}
              className={styles.draggable}
              style={{
                backgroundColor: `${color}`,
                padding: `15px`,
                width: `200px`
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}
