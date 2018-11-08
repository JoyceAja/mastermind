import React, { Component } from "react";
import styles from "./guessers.module.css";

export default class Guesser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: ["", "", "", ""]
    };
  }

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");

    let guess = this.states 
  }

  render() {
    const { guesses } = this.state 
    const { onDragOver, onDragStart } = this.props
    return (
      <div>
        <div className={styles.guess_container}>
          {guesses.map((el,idx) => (
            <div
              key={idx}
              draggable
              className={styles.guess}
              onDragOver={e => onDragOver(e,idx)}
              onDragStart={e => onDragStart(e, idx)}
              onDrop={e => this.onDrop(e, "selected")}
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
