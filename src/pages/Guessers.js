import React, { Component } from "react";
import styles from "./guessers.module.css";

export default class Guesser extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   guesses: ["", "", "", ""]
  //   // };
  // }

  onDragEnter = (e) => {
    e.target.style = {backgroundColor: "red"}
  }

  render() {
    // const { guesses } = this.state 
    const { onDragOver, onDrop, guess } = this.props
    return (
      <div>
        <div className={styles.guess_container}>
          {guess.map((el,idx) => (
            <div
              key={idx}
              className={styles.guess}
              onDragOver={e => onDragOver(e)}
              onDragEnter={e => this.onDragEnter(e)}
              onDrop={e => onDrop(e, idx)}
            >
              {el}
            </div>
          ))}
        </div>
        <button className={styles.button}>Submit</button>
      </div>
    );
  }
}
