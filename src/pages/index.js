import React, { Component } from "react";
import Display from "./ColorDisplay";
import Guess from "./Guessers";
import styles from "./index.module.css";

export default class MainPage extends Component {
  onDragOver = e => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  render() {
    const {  onDragOver, onDragStart } = this;
    return (
      <div className={styles.main_container}>
        <div className={styles.left}>
          <Display onDragOver={onDragOver} onDragStart={onDragStart}/>
        </div>
        <div>
          <Guess onDragOver={onDragOver} onDragStart={onDragStart}/>
        </div>
      </div>
    );
  }
}
