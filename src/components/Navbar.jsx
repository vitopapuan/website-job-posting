import React, { useState } from 'react'
import { HiBriefcase, HiMenu, HiOutlineLogin } from 'react-icons/hi'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='fixed top-0 z-50 w-full bg-blue-600 shadow-sm'>
      <nav className='container mx-auto flex flex-col px-4 py-2 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col md:items-center md:flex-row md:gap-4'>
          <div className='flex justify-between items-center'>
            <a
              href='#'
              className='flex items-center gap-2 p-2 text-white text-2xl font-semibold'>
              <HiBriefcase /> Job Portal
            </a>
            <button
              className='text-white text-2xl p-2 rounded-lg hover:bg-blue-800 md:hidden'
              onClick={() => setShowMenu(!showMenu)}>
              <HiMenu />
            </button>
          </div>
        </div>
        <div className={`${showMenu ? 'flex flex-col' : 'hidden'} md:flex md:flex-row md:gap-4`}>
          <a
            href='#'
            className='px-3 py-2 text-white rounded-lg hover:bg-blue-800'>
            Home
          </a>
          <a
            href='#'
            className='px-3 py-2 text-white rounded-lg hover:bg-blue-800'>
            Job Lists
          </a>
          <a
            href='#'
            className='px-3 py-2 text-white rounded-lg hover:bg-blue-800'>
            About
          </a>
        </div>
        <div className={`${showMenu ? 'flex flex-col' : 'hidden'} md:flex md:flex-row md:gap-4`}>
          <a
            href='#'
            className='px-3 py-2 text-white rounded-lg hover:bg-blue-800'>
            Sign Up
          </a>
          <a
            href='#'
            className='flex items-center gap-2 px-3 py-2 text-white rounded-lg hover:bg-blue-800'>
            Log In <HiOutlineLogin />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
