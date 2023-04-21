import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

const JobLists = () => {
  return (
    <section className='container mx-auto my-12 px-6 md:p-0'>
      <h1 className='text-3xl text-blue-600 font-medium text-center my-4'>
        Current Job Lists
      </h1>
      <Search />
      <div className='w-full grid grid-cols-3 gap-4 my-4 md:max-w-xl'>
        <Filter />
        <Filter />
        <Filter />
      </div>
    </section>
  )
}

export default JobLists
