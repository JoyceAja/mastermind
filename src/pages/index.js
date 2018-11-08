import React, { Component } from "react";
import Display from "./ColorDisplay";
import Guess from "./Guessers";
import styles from "./index.module.css";

export default class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      correctGuess: ["red", "blue", "purple", "red"],
      prevGuesses: [],
      guess: ["", "", "", ""]
    };
  }
  onDragOver = e => {
    e.preventDefault();
    console.log('drag that ass')
  };

  onDragStart = (e, color) => {
    console.log(color)
    e.dataTransfer.setData("color", color);
  };

  /**
 * Recieve the data 
 * OnDrop want to add or update the key/value pair
 * Also need the position where it is being droped
 * OnSubmit
 * Add the guess obj to the prevGuess array
 * throw out a message based on if the guess is correct/wrong
 */
  onDrop = (e, position) => {
    const { guess } = this.state;

    let color = e.dataTransfer.getData("color");

    console.log('firing off', color)
    // let guessArr = guess;
    // guessArr[position] = color;
    guess[position] = color

    this.setState({
      ...this.state
    });
  };

  render() {
    const { onDragOver, onDragStart, onDrop } = this;
    const { correctGuess, guess } = this.state;
    console.log('state of guesses', guess)
    return (
      <div className={styles.main_container}>
        <div className={styles.left}>
          <Display onDragStart={onDragStart} />
        </div>
        <div>
          <Guess
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            correctGuess={correctGuess}
            onDrop={onDrop}
            guess={guess}
          />
        </div>
      </div>
    );
  }
}
