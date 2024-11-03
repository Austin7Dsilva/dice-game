import React from "react";

export default function Selectionpage(props) {
    const diceNumber = [1, 2, 3, 4, 5, 6];
    return (
        <div className="selectionpage">
            <div className="diceNumber">
                {diceNumber.map((item, index) => {
                    return (
                        <div
                            key={index}
                            id={item}
                            className={`dice ${
                                item == props.selectednumber
                                    ? "selectedDice"
                                    : ""
                            }`}
                            onClick={props.numberSelection}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
            <span>Select a number</span>
        </div>
    );
}
