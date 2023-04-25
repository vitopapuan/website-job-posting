import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JobLists from './routes/JobLists'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Navbar />
      <Hero />
      <JobLists />
    </GlobalProvider>
  )
}

export default App
