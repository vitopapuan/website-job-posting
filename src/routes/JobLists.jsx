import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Search from '../components/Search'
import Filter from '../components/Filter'
import JobCard from '../components/JobCard'
import JobCardSkeleton from '../skeleton/JobCardSkeleton'

const JobLists = () => {
  const { jobs, fetchStatus } = useContext(GlobalContext)

  const [q, setQ] = useState('')
  const [filterParam, setFilterParam] = useState('none')
  const [searchParam] = useState([
    'title',
    'company_city',
    'company_name',
    'job_tenure',
  ])

  // SKELETON LOADING
  const jobCardSkeleton = []
  for (let i = 0; i < 3; i++) {
    jobCardSkeleton.push(<JobCardSkeleton key={i} />)
  }

  // JOB CITY ARRAY
  const jobCity = []
  if (jobs !== null && !fetchStatus) {
    for (let i = 0; i < jobs.length; i++) {
      jobCity.push(jobs[i].company_city)
    }
  }
  const uniqueCity = [...new Set(jobCity.sort())]

  // JOB COMPANY ARRAY
  const jobCompany = []
  if (jobs !== null && !fetchStatus) {
    for (let i = 0; i < jobs.length; i++) {
      jobCompany.push(jobs[i].company_name)
    }
  }
  const uniqueCompany = [...new Set(jobCompany.sort())]

  // JOB TYPE ARRAY
  const jobType = []
  if (jobs !== null && !fetchStatus) {
    for (let i = 0; i < jobs.length; i++) {
      jobType.push(jobs[i].job_tenure)
    }
  }
  const uniqueType = [...new Set(jobType.sort())]

  // FILTER HANDLER
  const handleFilter = (jobs) => {
    return jobs.filter((job) => {
      if (job.company_city == filterParam) {
        return searchParam.some((filterJob) => {
          return (
            job[filterJob].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (job.company_name == filterParam) {
        return searchParam.some((filterJob) => {
          return (
            job[filterJob].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (job.job_tenure == filterParam) {
        return searchParam.some((filterJob) => {
          return (
            job[filterJob].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      } else if (filterParam == 'none') {
        return searchParam.some((filterJob) => {
          return (
            job[filterJob].toString().toLowerCase().indexOf(q.toLowerCase()) >
            -1
          )
        })
      }
    })
  }

  return (
    <section className='container mx-auto my-12 px-6 md:p-0 first-of-type:mt-24'>
      <h1 className='text-3xl text-blue-600 font-bold text-center my-4'>
        Current Job Lists
      </h1>
      <Search q={q} setQ={setQ} />
      <div className='w-full grid grid-cols-3 gap-4 my-4 xl:w-1/2'>
        <Filter
          text='Select City'
          searchParam={uniqueCity}
          setFilterParam={setFilterParam}
        />
        <Filter
          text='Select Company'
          searchParam={uniqueCompany}
          setFilterParam={setFilterParam}
        />
        <Filter
          text='Select Job Type'
          searchParam={uniqueType}
          setFilterParam={setFilterParam}
        />
      </div>
      {jobs !== null && fetchStatus !== true ? (
        <h2 className='text-xl my-4'>
          {handleFilter(jobs).length} Available Job Results
        </h2>
      ) : (
        <div className='h-7 w-64 my-4 rounded bg-gray-200 animate-pulse'></div>
      )}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {jobs !== null && fetchStatus !== true
          ? handleFilter(jobs).map((job, id) => <JobCard key={id} job={job} />)
          : jobCardSkeleton}
      </div>
    </section>
  )
}

export default JobLists
