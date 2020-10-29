import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default function Layout(props) {
  return (
    <div className="Layout">
      <NavBar/>
      {props.children}
      <Footer/>
    </div>
  )
}
