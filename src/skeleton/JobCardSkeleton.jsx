import React from 'react'

const JobCardSkeleton = () => {
  return (
    <div className='p-6 border border-blue-400 shadow-sm rounded-lg'>
      <div className='flex items-center'>
        <div className='w-12 h-12 rounded bg-slate-200 animate-pulse'></div>
        <div className='mx-4 w-3/4'>
          <div className='h-5 rounded bg-slate-200 animate-pulse my-2'></div>
          <div className='h-5 rounded bg-slate-200 animate-pulse my-2'></div>
        </div>
      </div>
      <div className='my-4'>
        <div className='h-5 w-1/2 rounded bg-slate-200 animate-pulse my-2'></div>
        <div className='h-5 w-1/2 rounded bg-slate-200 animate-pulse my-2'></div>
        <div className='h-5 w-1/2 rounded bg-slate-200 animate-pulse my-2'></div>
      </div>
    </div>
  )
}

export default JobCardSkeleton
