import React from "react";
import DiceWallpaper from "../assets/DiceWallpaper.png";

export default function Homepage(props) {
    return (
        <div className="Homepage">
            <img src={DiceWallpaper} />
            <div className="content">
                <h1>Luck or Skill, Roll On</h1>
                <button onClick={props.toggle}>Start Game</button>
            </div>
        </div>
    );
}
