import React, { Component } from "react";
import colorGame from "../../../../components/img/projects/colorGame.png";
import { Link } from "react-router-dom";

class ColorGame extends Component {
  render() {
    return (
      <div className="color_game">
        <div className="color_game_description">
          <div className="color_game_description_line" />
          <h6>Simple Javascript game</h6>
          <h3>Pig Game</h3>
        </div>
        <img src={colorGame} alt="color game" />
        <div className="color_game_description">
          <p>
            This is small javascript game This is small javascript game This is
            small javascript game. This is small javascript game This is small
            javascript game This is small javascript game
          </p>
          <Link to="/">Try it live</Link>
          <Link to="/">Description</Link>
          <Link to="/">Github</Link>
        </div>
      </div>
    );
  }
}

export default ColorGame;
