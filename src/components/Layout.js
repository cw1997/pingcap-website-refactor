import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import './Layout.sass'


export default function Layout(props) {
  return (
    <div className="Layout">
      <NavBar/>
      <main className="main">
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}
