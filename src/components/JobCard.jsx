import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaDollarSign, FaHourglassHalf } from 'react-icons/fa'

const JobCard = ({ job }) => {
  return (
    <Link to={`/website-job-posting/job-lists/${job.id}`}>
      <div className='p-6 border border-blue-400 shadow-sm rounded-lg'>
        <div className='flex items-center gap-4'>
          <img
            src={job.company_image_url}
            alt={job.company_name}
            className='w-12 h-12 object-cover rounded'
          />
          <div className='overflow-hidden'>
            <h1 className='font-medium text-xl text-slate-800 truncate'>
              {job.title}
            </h1>
            <p className='text-blue-600 truncate'>{job.company_name}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-slate-600 my-4'>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt />
            <p>{job.company_city}</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaDollarSign />
            <p>
              IDR {job.salary_min.toLocaleString('id-ID')} -{' '}
              {job.salary_max.toLocaleString('id-ID')}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <FaHourglassHalf />
            <p>{job.job_tenure}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
