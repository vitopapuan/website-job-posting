import React from 'react'
import { HiSearch } from 'react-icons/hi'

const SearchFilter = () => {
  return (
    <form className='container relative w-full'>
      <div className='absolute flex inset-y-0 left-0 items-center p-4'>
        <HiSearch className='text-slate-400' size='1.25rem' />
      </div>
      <input
        type='text'
        placeholder='Search...'
        className='w-full border border-slate-400 rounded-full p-3 pl-12 focus:bg-blue-100 focus:outline-1 focus:outline-blue-600'
      />
      <select name='city' id='city'>
        <option value='Jakarta'>Jakarta</option>
        <option value='Bandung'>Bandung</option>
        <option value='Surabaya'>Surabaya</option>
      </select>
    </form>
  )
}

export default SearchFilter
