import React from 'react'

const Square = (props) => {
  return (
    <div 
    className="square">
      <button className="btn" onClick={() => props.onClick()}>{props.value}</button>
    </div>
  )
}
export default Square
