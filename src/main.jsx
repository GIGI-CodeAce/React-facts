import React from 'react'
import NavBar from './nav.jsx'
import './main.css'
import Footer from './footer.jsx'

function Main(){
  return(
    <>
            <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </main>
            <div className='gifContainer'>
            <img id='reactCat' src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" alt="Cat on Computer"/>
            <img id='reactCat' src="https://raw.githubusercontent.com/GIGIsOtherStuff/reactFacts/main/Media/reactGif.gif" alt="Cat on Computer"/>
            </div>
            <div className='sourceContainer'>
            <a id="sources" href="https://react.dev/learn/installation" target="_blank">Installation</a>
            <a id="sources" href="https://react.dev" target="_blank">More Info</a>
            </div>
            <Footer/>
    </>
  )
}

export default Main