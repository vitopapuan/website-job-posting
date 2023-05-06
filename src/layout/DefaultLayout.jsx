import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>{props.children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
