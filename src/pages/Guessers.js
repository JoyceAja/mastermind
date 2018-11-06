import React, { Component } from "react";
import styles from "./guessers.module.css";

export default class Guesser extends Component {
  constructor() {
    super();

    this.state = {
      guesses: []
    };
  }

  render() {
    return (
      <div>
        <div className={styles.guess_container}>
          <div className={styles.guess} />
          <div className={styles.guess} />
          <div className={styles.guess} />
          <div className={styles.guess} />
        </div>

        <button className={styles.button}>Submit</button>
      </div>
    );
  }
}
