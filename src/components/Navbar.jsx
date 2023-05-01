import React, { useState } from 'react'
import { HiBriefcase, HiMenu, HiOutlineLogin } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='fixed top-0 z-50 w-full bg-blue-600 shadow-sm'>
      <nav className='container mx-auto flex flex-col px-4 py-2 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col md:items-center md:flex-row md:gap-4'>
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
        <div className={`${showMenu ? 'flex flex-col' : 'hidden'} md:flex md:flex-row md:gap-4`}>
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
        <div className={`${showMenu ? 'flex flex-col' : 'hidden'} md:flex md:flex-row md:gap-4`}>
          <Link
            to='/website-job-posting/signup'
            className='px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
            Sign Up
          </Link>
          <Link
            to='/website-job-posting/login'
            className='flex items-center gap-2 px-3 py-2 text-white text-lg rounded-lg hover:bg-blue-800'>
            Log In <HiOutlineLogin />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
