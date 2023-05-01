import React from 'react'
import { HiBriefcase } from 'react-icons/hi'
import Button from './Button'

const Hero = ({ isLoading }) => {
  return (
    <section className='container flex mb-12 mt-28 mx-auto gap-10'>
      {isLoading ? (
        <div className='w-full h-[592px] bg-slate-200 rounded-lg animate-pulse'></div>
      ) : (
        <>
          <div className='w-full flex flex-col justify-center items-center gap-8 p-8 xl:items-start xl:w-1/2'>
            <h2 className='flex items-center gap-2 text-2xl font-bold text-blue-600 sm:text-4xl xl:justify-start'>
              <HiBriefcase /> Job Portal
            </h2>
            <h1 className='text-6xl font-bold text-center text-slate-800 sm:text-8xl xl:text-start'>
              Go chase your <span className='text-blue-600'>dream job</span>
            </h1>
            <p className='max-w-2xl text-lg font-medium text-center text-slate-800 xl:text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga
              quos quod deserunt assumenda sunt itaque esse veniam impedit
              facilis!
            </p>
            <Button link={'/website-job-posting/job-lists'} text={'Get Started'} />
          </div>
          <div
            className='hidden w-1/2 bg-cover bg-center rounded-xl mr-8 xl:block'
            style={{ backgroundImage: 'url(./images/hero.jpg )' }}></div>
        </>
      )}
    </section>
  )
}

export default Hero
