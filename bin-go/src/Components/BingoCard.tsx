import React from 'react'
import './BingoCard.css'

export interface bingoProps {
    title : string;
    complete? : boolean;
}

const BingoCard = ({title, complete = false} : bingoProps) => {
  return (
    <section className={'bingo-card' + (complete? ' complete' : '')}>
        <p>{title}</p>
    </section>
  )
}

export default BingoCard