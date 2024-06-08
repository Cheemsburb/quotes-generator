import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState({content: " QUOTES GENERATOR ", author: "Cheemsburbger"})

  async function fetchQuotes(){
    const response = await fetch("https://api.quotable.io/quotes/random")
    const quote = await response.json()

    return quote
  }
  
  function handleClick(){
    fetchQuotes().then((value)=>{
      setQuote(()=> value[0])
    })
  }
  return (
    <>
      <div className='quote-container'>
        <div className='quote-display'>
          <p className='quote'>
              {quote.content}
          </p>
        </div>
        <div className='hr'></div>
        <div className='footer'>
          <p className='author'>
            -{quote.author}
          </p>
          <button className='reset' onClick={handleClick}>
            <img src="../public/refresh.png" alt="refresh-icon" className='refresh-icon'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
