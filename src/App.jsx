import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JobLists from './routes/JobLists'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <JobLists />
    </>
  )
}

export default App
