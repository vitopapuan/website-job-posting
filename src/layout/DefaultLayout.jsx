import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default DefaultLayout