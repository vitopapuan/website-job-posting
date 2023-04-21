import React from 'react'
import SearchFilter from '../components/SearchFilter'

const JobLists = () => {
  return (
    <section className='container mx-auto my-12'>
      <h1 className='text-3xl text-blue-600 font-medium text-center my-4'>Current Job Lists</h1>
      <SearchFilter />
    </section>
  )
}

export default JobLists