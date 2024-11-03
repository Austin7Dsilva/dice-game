import React from "react";
import { useState } from "react";
import Scorepage from "./Scorepage";
import Selectionpage from "./Selectionpage";
import Rulespage from "./Rulespage";
import dice_1 from "../assets/dice_1.svg";
import dice_2 from "../assets/dice_2.svg";
import dice_3 from "../assets/dice_3.svg";
import dice_4 from "../assets/dice_4.svg";
import dice_5 from "../assets/dice_5.svg";
import dice_6 from "../assets/dice_6.svg";

export default function Gamepage() {
    const [score, setScore] = useState(0);
    const [color, setColor] = useState("");
    const [showRules, setShowRules] = useState(false);
    const [diceNumber, setDiceNumber] = useState(dice_1);
    const [selectedOption, setSelectedOption] = useState();
    const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
    const numberSelection = (event) => {
        setSelectedOption(event.target.id);
    };
    const rollDice = () => {
        if (selectedOption) {
            const randomIndex = Math.floor(Math.random() * 6);
            setDiceNumber(diceImages[randomIndex]);
            if (selectedOption == randomIndex + 1) {
                setColor("green");
                setScore((prev) => prev + 2);
            } else {
                setColor("red");
                setScore((prev) => prev - 1);
            }
        }
    };
    const resetScore = () => {
        setScore(0);
        setColor("");
    };
    const toggleShowResult = () => {
        setShowRules((prev) => !prev);
    };
    return (
        <div className="gamepage">
            <div className="header">
                <Scorepage score={score} />
                <Selectionpage
                    selectednumber={selectedOption}
                    numberSelection={numberSelection}
                />
            </div>
            <div className="body">
                <img
                    className={color}
                    width={250}
                    height={250}
                    src={diceNumber}
                />
                <div className="body-content">
                    <button
                        className={`${selectedOption ? "" : "error"}`}
                        type="button"
                        onClick={rollDice}
                    >
                        Roll
                    </button>
                    {!selectedOption && (
                        <span className="error-text">
                            ! Please select an option
                        </span>
                    )}
                    <button className="reset-score" onClick={resetScore}>
                        Reset score
                    </button>
                    <button className="show-rules" onClick={toggleShowResult}>
                        Show rules
                    </button>
                </div>
            </div>
            <div className="rules">
                <Rulespage showRules={showRules} />
            </div>
        </div>
    );
}
