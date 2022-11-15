import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)) 
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('')
  const resetBoard = () => (
    setReset(true)
  )
 
  const players = {
   Player1: {
    symbol: "⭕️",
    name: "Player 1"
},
   Player2: {
    symbol: "❌",
    name: "Player 2"
   }
  }





const handleGamePlay = (index) => {}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return (
            <Square 
            />
          )
        })}
        </div>
    </>
  )
}

export default App