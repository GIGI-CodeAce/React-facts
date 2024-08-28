import React from 'react'
import './nav.css'

export default function NavBar() {
    return (
            <header>
          <img id='react' src='./Media/reactLogo.png' alt="alt" />
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