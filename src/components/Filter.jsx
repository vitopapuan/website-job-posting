import React from 'react'

const Filter = ({ text, searchParam, setFilterParam }) => {
  return (
    <select
      name='filterParam'
      defaultValue='none'
      onChange={(e) => setFilterParam(e.target.value)}
      className='block px-3 py-2 text-gray-700 bg-white border border-slate-400 rounded-lg shadow-sm'>
      <option value='none'>{text}</option>
      {searchParam.map((param, id) => (
        <option key={id} value={param}>{param}</option>
      ))}
    </select>
  )
}

export default Filter
