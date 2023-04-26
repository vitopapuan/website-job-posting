import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt, FaDollarSign, FaHourglassHalf, FaBuilding } from 'react-icons/fa'
import Button from '../components/Button'

const JobDetail = () => {
  const { jobs, fetchStatus } = useContext(GlobalContext)
  const { id } = useParams()

  return (
    <section className='container mx-auto mt-24 lg:max-w-screen-lg'>
      {jobs !== null &&
        fetchStatus !== true &&
        jobs
          .filter((job) => job.id === id)
          .map((job) => (
            <div key={job.id}>
              <div className='flex gap-4'>
                <div>
                  <img
                    src={job.company_image_url}
                    alt={job.company_name}
                    className='w-12 h-12'
                  />
                </div>
                <div className='grow'>
                  <div>
                    <h1 className='text-slate-800 text-2xl font-medium'>
                      {job.title}
                    </h1>
                    <p className='text-blue-600'>{job.company_name}</p>
                  </div>
                  <div className='flex flex-col my-6 gap-2'>
                    <div className='flex items-center gap-2 text-slate-800'>
                      <FaMapMarkerAlt />
                      <p>{job.company_city}</p>
                    </div>
                    <div className='flex items-center gap-2 text-slate-800'>
                      <FaDollarSign />
                      <p>
                        IDR {job.salary_min.toLocaleString('id-ID')} -{' '}
                        {job.salary_max.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className='flex items-center gap-2 text-slate-800'>
                      <FaHourglassHalf />
                      <p>{job.job_tenure}</p>
                    </div>
                    <div className='flex items-center gap-2 text-slate-800'>
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
          ))}
    </section>
  )
}

export default JobDetail
