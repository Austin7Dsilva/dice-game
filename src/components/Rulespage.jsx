import React from "react";

export default function Rulespage(props) {
    return (
        <div className={`RulesPage ${props.showRules ? "visible" : "hide"}`}>
            <h2>How to play dice game</h2>
            <ul>
                <li>Select any number</li>
                <li>Click on roll button</li>
                <li>
                    if selected number is equal to dice number you will get 2
                    points
                </li>
                <li>if you get wrong guess then 1 point will be dedcuted</li>
            </ul>
        </div>
    );
}
