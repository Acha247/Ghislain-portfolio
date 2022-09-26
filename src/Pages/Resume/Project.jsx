import React from 'react'

const Project = ({title, date, subtitle, description}) => {
  return (
    <div className='py-2 px-8'>
        <div className='flex items-center justify-between'>
            <h2 className='flex items-center'>
                <span className='text-orange-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </span>
                <span className='font-bold ml-2 text-orange-700'>{title}</span>
            </h2>
            <span className='text-orange-700'>{date}</span>
        </div>
        <div className='ml-6'>
            <h5 className='py-2 font-semibold '>{subtitle}</h5>
            <p className='mb-2'>{description}</p>
        </div>
    </div>
  )
}

export default Project