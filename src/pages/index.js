import React, { Component } from "react";
import Display from "./ColorDisplay";
import Guess from "./Guessers";
import styles from "./index.module.css";

export default class MainPage extends Component {
  onDragOver = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div
        onDragOver={e => this.onDragOver(e)}
        className={styles.main_container}
      >
        <div className={styles.left}>
          <Display />
        </div>
        <div>
          <Guess />
        </div>
      </div>
    );
  }
}
