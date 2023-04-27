import React from 'react'
import { HiSearch } from 'react-icons/hi'

const Search = ({ q, setQ }) => {
  return (
    <form className='container relative w-full shadow-sm'>
      <div className='absolute flex inset-y-0 left-0 items-center p-4'>
        <HiSearch className='text-slate-400' size='1.25rem' />
      </div>
      <input
        type='text'
        placeholder='Search...'
        className='w-full border border-slate-400 rounded-lg p-3 pl-12 focus:bg-blue-100'
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
    </form>
  )
}

export default Search
