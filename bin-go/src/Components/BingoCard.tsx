import { useState } from "react";
import "./BingoCard.css";
import check from "../assets/Checkmark.webp";

export interface bingoProps {
    title?: string;
    complete?: boolean;
    children?: string;
}

const BingoCard = ({ title, children }: bingoProps) => {
    const [complete, setComplete] = useState(false);

    const handleClick = () => {
        if (complete) return;
        setComplete(true);
    };

    return (
        <section
            className={"bingo-card" + (complete ? "-complete" : "")}
            onClick={handleClick}
        >
            <p>{title}</p>
            {children}
            <img
                className={"check" + (complete ? "-complete" : "")}
                src={check}
            />
        </section>
    );
};

export default BingoCard;
