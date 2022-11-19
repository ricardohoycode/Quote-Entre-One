import { useState } from 'react'
import './App.css'
import Quotebox from './assets/components/Quotebox'
import quotes from "./assets/json/quotes.json"
import colors from "./assets/json/colors.json"

function App() {

  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))

  const handleClick = () => {
    setQuoteRandom(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(colors))
  }

  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>
      <Quotebox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App