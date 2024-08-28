import React from 'react'
import './nav.css'

export default function NavBar() {
  return (
      <header>
      <img id='react' src='https://raw.githubusercontent.com/GIGIsOtherStuff/reactFacts/main/Media/reactLogo.png' alt="React Logo" />
        <h3>React facts</h3>
        <nav>
            <li><a href="#" target="_blank"></a>Home</li>
            <li><a href="#" target="_blank"></a>Contact</li>
            <li><a href="#" target="_blank"></a>Info</li>
            <li><a href="#" target="_blank"></a>About us</li>
        </nav>
      </header>
  )
}