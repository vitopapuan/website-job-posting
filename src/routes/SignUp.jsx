import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FaBriefcase } from 'react-icons/fa'
import Loading from '../components/Loading'

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
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
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Create a new account
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Confirm Password
                </label>
                <div className='mt-2'>
                  <input
                    id='confirm-password'
                    name='confirm-password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div> */}

              <div>
                <button
                  type='submit'
                  onClick={signUp}
                  className='flex w-full justify-center rounded-md bg-blue-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Sign up
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
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
