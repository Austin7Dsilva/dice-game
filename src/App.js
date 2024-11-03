import "./App.css";
import { useState } from "react";
import HomePage from "./components/Homepage";
import GamePage from "./components/Gamepage";

function App() {
    const [startGame, setStartGame] = useState(false);
    const toggleSwitch = () => {
        setStartGame((prevState) => !prevState);
    };
    return (
        <div>
            {startGame ? <GamePage /> : <HomePage toggle={toggleSwitch} />}
        </div>
    );
}

export default App;
