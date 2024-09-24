import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BingoCard from "./Components/BingoCard";
import BingoGrid from "./Components/BingoGrid";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className="title">Bingo!</header>
            <BingoGrid />
        </>
    );
}

export default App;
