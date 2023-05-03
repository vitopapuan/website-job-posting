import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import {
  HiBriefcase,
  HiMenu,
  HiOutlineLogin,
  HiOutlineLogout,
} from 'react-icons/hi'
import { auth } from '../config/firebaseConfig'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const [user, setUser] = useState({})

  useState(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <header className='fixed top-0 z-50 w-full bg-blue-600 shadow-sm'>
      <nav className='container mx-auto flex flex-col px-4 py-2 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col md:w-52 md:items-center md:flex-row md:gap-4'>
          <div className='flex justify-between items-center'>
            <Link
              to='/website-job-posting/'
              className='flex items-center gap-2 p-2 text-white text-2xl font-semibold'>
              <HiBriefcase /> Job Portal
            </Link>
            <button
              className='text-white text-2xl p-2 rounded-lg hover:bg-blue-800 md:hidden'
              onClick={() => setShowMenu(!showMenu)}>
              <HiMenu />
            </button>
          </div>
        </div>
        <div
          className={`${
            showMenu ? 'flex flex-col' : 'hidden'
          } md:flex md:flex-row md:gap-4`}>
          <Link
            to='/website-job-posting/'
            className='px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
            Home
          </Link>
          <Link
            to='/website-job-posting/job-lists'
            className='px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
            Job Lists
          </Link>
          <Link
            to='#'
            className='px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
            About
          </Link>
        </div>
        <div
          className={`${
            showMenu ? 'flex flex-col' : 'hidden'
          } md:w-52 md:flex md:flex-row md:justify-end md:gap-4`}>
          {user === null ? (
            <>
              <Link
                to='/website-job-posting/signup'
                className='px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
                Sign Up
              </Link>
              <Link
                to='/website-job-posting/login'
                className='flex items-center gap-2 px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
                Login <HiOutlineLogin />
              </Link>
            </>
          ) : (
            <>
              {/* <div className='flex items-center gap-2 px-3 py-2 text-white text-lg rounded-lg'>
                {user?.email}
              </div> */}
              <button
                onClick={logout}
                className='flex items-center gap-2 px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
                Logout <HiOutlineLogout />
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
