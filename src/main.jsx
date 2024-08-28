import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './nav.jsx'
import './main.css'

let currentYear = new Date().getFullYear();

function Main(){
  return(
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <footer>
            <h4 id='margin'>© {currentYear} GIGI's development. All rights reserved.</h4>
            </footer>
        </main>
  )
}

export default Main