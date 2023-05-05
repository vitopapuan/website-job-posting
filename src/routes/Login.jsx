import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { FaBriefcase } from 'react-icons/fa'
import { auth } from '../config/firebaseConfig'
import Loading from '../components/Loading'

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
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
              Log in to your account
            </h2>
            <div className='my-10 p-4 border border-blue-600 rounded bg-blue-50 shadow-sm'>
              <p className='text-justify text-sm font-medium tracking-tight text-slate-800'>
                You can also login with this credential for testing:
              </p>
              <p className='mt-2 text-justify text-sm font-medium tracking-tight text-slate-800'>
                Email : <span className='font-semibold'>text.email@email.com</span>
              </p>
              <p className='text-justify text-sm font-medium tracking-tight text-slate-800'>
                Password : <span className='font-semibold'>test123</span>
              </p>
            </div>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <div className='space-y-6'>
              <div>
                <label
                  htmlFor='login-email'
                  className='block text-sm font-medium leading-6 text-slate-800'>
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='login-email'
                    name='login-email'
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <div className='flex justify-between'>
                  <label
                    htmlFor='login-password'
                    className='block text-sm font-medium leading-6 text-slate-800'>
                    Password
                  </label>
                  <Link to='/website-job-posting/reset-password'>
                    <p className='block text-sm font-semibold leading-6 text-blue-600'>
                      Forgot password?
                    </p>
                  </Link>
                </div>
                <div className='mt-2'>
                  <input
                    id='login-password'
                    name='login-password'
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={login}
                  className='flex w-full justify-center rounded-md bg-blue-600 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Log in
                </button>
              </div>
            </div>

            <p className='mt-10 text-center text-sm text-slate-500'>
              Not a member?{' '}
              <Link
                to='/website-job-posting/signup'
                className='font-semibold leading-6 text-blue-600 hover:text-blue-500'>
                Sign up today!
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LogIn
