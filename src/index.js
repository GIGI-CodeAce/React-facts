import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main.jsx'
import NavBar from './nav.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar/>
    <Main/>
  </>
);