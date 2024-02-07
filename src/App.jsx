import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")


  return (
    <>
      <div className='quote-container'>
        <p className='quote'>
            Are you the strongest because you are Gladwyn?, <br />
            or are you Gladwyn because you are the strongest?
        </p>
      </div>
    </>
  )
}

export default App
