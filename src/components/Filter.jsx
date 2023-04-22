import React from 'react'

const Filter = () => {
  return (
    <select name='filterCity' defaultValue='none' className='block px-3 py-2 text-gray-700 bg-white border border-slate-400 rounded-lg shadow-sm'>
      <option value='none'>Select City</option>
      <option value='Jakarta'>Jakarta</option>
      <option value='Surabaya'>Surabaya</option>
      <option value='Makassar'>Makassar</option>
    </select>
  )
}

export default Filter
