import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Search from '../components/Search'
import Filter from '../components/Filter'
import JobCard from '../components/JobCard'
import JobCardSkeleton from '../skeleton/JobCardSkeleton'

const JobLists = () => {
  const { jobs, fetchStatus } = useContext(GlobalContext)

  const jobCardSkeleton = []
  for (let i = 0; i < 3; i++) {
    jobCardSkeleton.push(<JobCardSkeleton key={i} />)
  }

  return (
    <section className='container mx-auto my-12 px-6 md:p-0 first-of-type:mt-24'>
      <h1 className='text-3xl text-blue-600 font-bold text-center my-4'>
        Current Job Lists
      </h1>
      <Search />
      <div className='w-full grid grid-cols-3 gap-4 my-4 xl:w-1/2'>
        <Filter />
        <Filter />
        <Filter />
      </div>
      {jobs !== null && fetchStatus !== true ? (
        <h2 className='text-xl my-4'>{jobs.length} Available Job Results</h2>
      ) : (
        <div className='h-7 w-64 my-4 rounded bg-gray-200 animate-pulse'></div>
      )}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {jobs !== null && fetchStatus !== true
          ? jobs.map((job, id) => <JobCard key={id} job={job} />)
          : jobCardSkeleton}
      </div>
    </section>
  )
}

export default JobLists
