import React from 'react'

const HangmanWord = () => {
  const word = "test"
  const guessedLetters = ["t", "e", "g"]
  return (
    <div className='flex gap-1 text-lg uppercase font-bold font-mono'>
      {word.split("").map((letter,index) => (
        <span className='border-b-2 border-b-solid border-b-black'>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}} key={index}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord