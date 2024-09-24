import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BingoCard from './Components/BingoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BingoCard title='Ben says that he is Bisexual'/>
      
  )
}

export default App
