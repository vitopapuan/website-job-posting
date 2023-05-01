import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useParams } from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaHourglassHalf,
  FaBuilding,
  FaChevronLeft,
} from 'react-icons/fa'
import Button from '../components/Button'
import JobDetailSkeleton from '../skeleton/JobDetailSkeleton'

const JobDetail = () => {
  const { jobs, fetchStatus } = useContext(GlobalContext)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleDescription = (job) => {
    let job_desc
    if (job !== null) {
      job_desc = job.job_desc.replace(/\\n/g, '\n')
    }
    const desc_array = job_desc.split('\n')
    return desc_array
  }

  const handleRequirement = (job) => {
    let job_req
    if (job !== null) {
      job_req = job.job_req.replace(/\\n/g, '\n')
    }
    const req_array = job_req.split('\n')
    return req_array
  }

  return (
    <section className='container mx-auto mt-24 px-8 lg:max-w-screen-lg'>
      <div className='inline-block'>
        <Link to='/website-job-posting/' className='flex items-center gap-2 text-blue-600 mb-8'>
          <FaChevronLeft />
          <span className='text-xl'>Back</span>
        </Link>
      </div>
      {loading && fetchStatus !== true ? (
        <JobDetailSkeleton />
      ) : (
        jobs !== null &&
        fetchStatus !== true &&
        jobs
          .filter((job) => job.id === id)
          .map((job, id) => (
            <>
              <div key={id}>
                <hr />
                <div className='flex gap-4 mt-6'>
                  <div>
                    <img
                      src={job.company_image_url}
                      alt={job.company_name}
                      className='w-12 h-12 rounded'
                    />
                  </div>
                  <div className='grow'>
                    <div>
                      <h1 className='text-slate-800 text-2xl font-semibold'>
                        {job.title}
                      </h1>
                      <p className='text-blue-600'>{job.company_name}</p>
                    </div>
                    <div className='flex flex-col my-6 gap-2'>
                      <div className='flex items-center gap-2 text-slate-600'>
                        <FaMapMarkerAlt />
                        <p>{job.company_city}</p>
                      </div>
                      <div className='flex items-center gap-2 text-slate-600'>
                        <FaDollarSign />
                        <p>
                          IDR {job.salary_min.toLocaleString('id-ID')} -{' '}
                          {job.salary_max.toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div className='flex items-center gap-2 text-slate-600'>
                        <FaHourglassHalf />
                        <p>{job.job_tenure}</p>
                      </div>
                      <div className='flex items-center gap-2 text-slate-600'>
                        <FaBuilding />
                        <p>{job.job_type}</p>
                      </div>
                    </div>
                  </div>
                  <div className='py-3'>
                    <Button link={'#'} text={'Apply Now'} />
                  </div>
                </div>
              </div>
              <hr />
              <div className='my-6'>
                <h1 className='text-slate-800 text-xl font-medium'>
                  Job Description
                </h1>
                <ul className='list-disc'>
                  {handleDescription(job).map((res, id) => (
                    <li key={id} className='my-4 text-slate-600'>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='my-6'>
                <h1 className='text-slate-800 text-xl font-medium'>
                  Job Requirement
                </h1>
                <ul className='list-disc'>
                  {handleRequirement(job).map((res, id) => (
                    <li key={id} className='my-4 text-slate-600'>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))
      )}
    </section>
  )
}

export default JobDetail
