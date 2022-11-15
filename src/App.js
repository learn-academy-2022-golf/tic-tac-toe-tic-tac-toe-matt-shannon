import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))


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



  const renderSquare = (i) => {
    return (
        <Square value={squares[i]} onClick={() => handleClick(i)} />
    )
}

const handleClick = (i) => {
    const square = squares.slice();
    symbol: "X",
    square[i] = "",
    setSquares(square)

}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      
      <div className="gameboard">
      <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

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