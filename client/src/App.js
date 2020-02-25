import React from 'react'
// import { connect } from 'react-redux'
// import logo from './logo.svg'
// import socketioClient from 'socket.io-client'
import './styles/App.css'
import Pages from './components/Pages'

export default _ => (
  <div className="App">
    <h1>Typewriters</h1>
    <div className="stick-to-bottom">
      <Pages />
    </div>
  </div>
)
