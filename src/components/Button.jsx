import React from 'react'

const Button = ({ text, link }) => {
  return (
    <a href={link} className='px-5 py-3 rounded-lg bg-blue-600 text-white shadow-sm'>
      {text}
    </a>
  )
}

export default Button
