import React from "react";

export default function Scorepage(props) {
    return (
        <div className="scorepage">
            <span>{props.score}</span>
            <h2>Total Score</h2>
        </div>
    );
}
