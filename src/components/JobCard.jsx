import React from 'react'
import Button from './Button'
import { FaMapMarkerAlt, FaDollarSign, FaHourglassHalf } from 'react-icons/fa'

const JobCard = ({ job }) => {
  return (
    <div className='p-6 border border-blue-200 shadow-sm rounded-lg'>
      <div className='flex items-center gap-4'>
        <img
          src={job.company_image_url}
          alt={job.company_name}
          className='h-12 w-12 object-cover rounded'
        />
        <div>
          <h1 className='font-medium text-xl text-slate-800'>{job.title}</h1>
          <p className='text-blue-600'>{job.company_name}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 text-slate-600 my-4'>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt />
          <p>{job.company_city}</p>
        </div>
        <div className='flex items-center gap-2'>
          <FaDollarSign />
          <p>IDR {job.salary_min} - {job.salary_max}</p>
        </div>
        <div className='flex items-center gap-2'>
          <FaHourglassHalf />
          <p>{job.job_tenure}</p>
        </div>
      </div>
    </div>
  )
}

export default JobCard
