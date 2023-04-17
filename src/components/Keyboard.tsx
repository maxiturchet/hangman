import React from 'react'

const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Keyboard = () => {
  return (
    <div className='grid'>
      {KEYS.map(key => {
        return <button className='uppercase border-2 border-solid border-black rounded-md' key={key}>{key}</button>
      })}
    </div>
  )
}

export default Keyboard