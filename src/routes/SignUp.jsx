import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { FaBriefcase } from 'react-icons/fa'
import { auth } from '../config/firebaseConfig'
import Loading from '../components/Loading'

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)

  // const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/website-job-posting/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='flex h-screen max-w-lg flex-1 flex-col justify-center mx-auto px-6'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <FaBriefcase className='mx-auto h-10 w-auto text-blue-600' />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-800'>
              Create a new account
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <div className='space-y-6'>
              {/* <div>
                <label
                  htmlFor='register-name'
                  className='block text-sm font-medium leading-6 text-slate-800'>
                  Full Name
                </label>
                <div className='mt-2'>
                  <input
                    id='register-name'
                    name='register-name'
                    type='text'
                    required
                    onChange={(e) => setName(e.target.value)}
                    className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div> */}
              <div>
                <label
                  htmlFor='register-email'
                  className='block text-sm font-medium leading-6 text-slate-800'>
                  Email Address
                </label>
                <div className='mt-2'>
                  <input
                    id='register-email'
                    name='register-email'
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='register-password'
                  className='block text-sm font-medium leading-6 text-slate-800'>
                  Password
                </label>
                <div className='mt-2'>
                  <input
                    id='register-password'
                    name='register-password'
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={register}
                  className='flex w-full justify-center rounded-md bg-blue-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Sign up
                </button>
              </div>
            </div>

            <p className='mt-10 text-center text-sm text-slate-500'>
              Already have an account?{' '}
              <Link
                to='/website-job-posting/login'
                className='font-semibold leading-6 text-blue-600 hover:text-blue-500'>
                Log in
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUp
