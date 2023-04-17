import { useState } from "react"
import words from '../utils/wordList.json' 
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
   <div className="max-w-[800px] flex flex-col gap-2 my-0 mx-auto items-center">
    <div className="text-xl text-center">Lose Win</div>
    <HangmanDrawing />
    <HangmanWord />
    <div className="self-stretch">
      <Keyboard />
    </div>
   </div>
  )
}

export default App
