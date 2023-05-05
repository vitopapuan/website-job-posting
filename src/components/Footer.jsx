import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='absolute end-0 w-full bg-blue-600'>
      <div className='px-6 py-6 w-full flex justify-between text-white'>
        <div>&copy;2023 von/vitopapuan</div>
        <div className='flex gap-4'>
          <a
            href='https://github.com/vitopapuan'
            target='_blank'
            className='flex items-center gap-2'>
            <FaGithub />
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/vito-papuan/'
            target='_blank'
            className='flex items-center gap-2'>
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href='https://twitter.com/von_px'
            target='_blank'
            className='flex items-center gap-2'>
            <FaTwitter />
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
