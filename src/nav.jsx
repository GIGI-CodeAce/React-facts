import React from 'react'
import './nav.css'

export default function NavBar() {
  return (
      <header>
      <img id='react' src='https://raw.githubusercontent.com/GIGIsOtherStuff/reactFacts/main/Media/reactLogo.png' alt="React Logo" />
        <h3>React facts</h3>
        <nav>
        <li><a href="https://react.dev" target="_blank">Home</a></li>
        <li><a href="https://react.dev" target="_blank">Contact</a></li>
        <li><a href="https://legacy.reactjs.org" target="_blank">Info</a></li>
        <li><a href="https://react.dev" target="_blank">About us</a></li>
        </nav>
      </header>
  )
}