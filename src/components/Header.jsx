import React from 'react'

const Header = ({titile, subtitle}) => {
  return (
    <header className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-neutral-800 '>{titile}</h1>
        <p className='text-sm text-gray-700 py-1'>{subtitle}</p>
        <div className='flex justify-center items-center'>
            <span className='h-[2px] bg-gray-400 w-[6rem] lg:w-[8rem] '></span>
            <span className='h-[10px] w-[30px] bg-orange-700 rounded-full'></span>
            <span className='h-[2px] bg-gray-400 w-[6rem] lg:w-[8rem]'></span>
        </div>
    </header>
  )
}

export default Header