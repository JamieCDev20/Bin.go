import React from 'react'
import BingoCard, { bingoProps } from './BingoCard'
import "./BingoGrid.css"

const bingoData : bingoProps[] = [
    {
        title : "Bingo Prompt 1"
    },
    {
        title : "Bingo Prompt 2"
    },
    {
        title : "Bingo Prompt 3"
    },
    {
        title : "Bingo Prompt 4"
    },
    {
        title : "Bingo Prompt 5"
    },
    {
        title : "Bingo Prompt 6"
    },
    {
        title : "Bingo Prompt 7"
    },
    {
        title : "Bingo Prompt 8"
    },
    {
        title : "Bingo Prompt 9"
    },
]

const BingoGrid = () => {
  return (
    <div className='bingo-grid'>
        {bingoData.map((bd) => {
            return <BingoCard title={bd.title} complete = {bd.complete}/>
        })}
    </div>
  )
}

export default BingoGrid