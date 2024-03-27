import React, { useState } from 'react'
import './Quotes.css'
import reload_img from '../Assets/reloading.png'
import linkedin_img from '../Assets/linkedin.png'

const Quotes = () => {

    let quotes = [] 

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json( ) 
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal",
        author: "Johann Wolfgang von Goethe", 
    }) 

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)  
    }

    const linkedin = () => {
        window.open("") 
    }

    loadQuotes() 

  return (
    <div className='container'>
        <div className='quote'>
            {quote ? quote.text : 'Loading...'}
        </div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">
                - {quote.author.split(',')[0]} 
            </div> 
            <div className="icons">
                <img src={reload_img} onClick={() => {random()}} alt='a reload icon, when clicked a new quote reloads'/>
                <img src={linkedin_img} alt='a linkedin icon, when clicked the quote is posted to your linkedin'/>
            </div>
        </div>
    </div> 
  )
}

export default Quotes 