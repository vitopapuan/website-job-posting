import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import JobLists from './JobLists'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <div>
      <Hero isLoading={isLoading} />
      <JobLists />
    </div>
  )
}

export default HomePage
