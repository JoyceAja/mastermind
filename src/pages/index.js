import React, { Component } from "react";
import Display from "./ColorDisplay";
import Guess from "./Guessers";
import styles from "./index.module.css";

export default class MainPage extends Component {
  constructor(){
    super()

    this.state = {
      correctGuess: {0:red, 1:blue, 2:purple, 3:red}
    }
  }
  onDragOver = e => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  render() {
    const {  onDragOver, onDragStart } = this;
    const { correctGuess } = this.state;
    return (
      <div className={styles.main_container}>
        <div className={styles.left}>
          <Display onDragOver={onDragOver} onDragStart={onDragStart}/>
        </div>
        <div>
          <Guess onDragOver={onDragOver} onDragStart={onDragStart} correctGuess={correctGuess}/>
        </div>
      </div>
    );
  }
}
