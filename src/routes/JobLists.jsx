import React, { useContext, useEffect, useState } from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'
import JobCard from '../components/JobCard'
import { GlobalContext } from '../context/GlobalContext'

const JobLists = () => {
  const {jobs, fetchStatus} = useContext(GlobalContext)

  return (
    <section className='container mx-auto my-12 px-6 md:p-0'>
      <h1 className='text-3xl text-blue-600 font-bold text-center my-4'>
        Current Job Lists
      </h1>
      <Search />
      <div className='w-full grid grid-cols-3 gap-4 my-4 md:max-w-xl'>
        <Filter />
        <Filter />
        <Filter />
      </div>
      <div>
        {jobs.map((job, id) => (
          <JobCard key={id} job={job} />
          // <div key={id}>
          //   <h1>{job.title}</h1>
          //   <img src={job.company_image_url} alt="" width='32px' />
          // </div>
        ))}
      </div>
    </section>
  )
}

export default JobLists
