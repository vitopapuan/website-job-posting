import React from 'react'

const Button = ({ text, link }) => {
  return (
    <a href={link} className='max-w-fit px-5 py-3 rounded-lg bg-blue-600 shadow-sm'>
      <p className='text-white font-medium'>{text}</p>
    </a>
  )
}

export default Button
