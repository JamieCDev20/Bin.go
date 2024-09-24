import React from 'react'
import './BingoCard.css'

interface bingoProps {
    title : string;
    complete? : boolean;
}

const BingoCard = ({title, complete = false} : bingoProps) => {
  return (
    <section className={'bingo-card' + (complete? ' complete' : '')}>
        <header>{title}</header>
    </section>
  )
}

export default BingoCard