import React from 'react'

const JobDetailSkeleton = () => {
  return (
    <div>
      <hr />
      <div className='flex gap-4 mt-6'>
        <div>
          <div className='w-12 h-12 rounded bg-slate-200 animate-pulse'></div>
        </div>
        <div className='grow'>
          <div className='flex flex-col w-1/3 mb-6 gap-2'>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
          </div>
          <div className='flex flex-col w-1/3 my-8 gap-3'>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
            <div className='h-5 bg-slate-200 animate-pulse'></div>
          </div>
        </div>
        <div>
          <div className='w-32 h-12 rounded bg-slate-200 animate-pulse'></div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col my-6 gap-3'>
        <div className='h-7 w-1/3 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
      </div>
      <div className='flex flex-col my-6 gap-3'>
        <div className='h-7 w-1/3 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
        <div className='h-5 w-3/4 bg-slate-200 animate-pulse'></div>
      </div>
    </div>
  )
}

export default JobDetailSkeleton
