import React from 'react'
import Header from '../../components/Header'
import DesktopResume from './DesktopResume'
import MobileResume from './MobileResume'

const Resume = () => {
    
  return (
    <section id='resume' className=' pb-0 md:pb-8 py-8 px-8 md:px-18 lg:px-20 flex flex-col items-center min-h-screen justify-center'>
        <Header 
            titile="Resume"
            subtitle="My Formal Bio Details"
        />
        <DesktopResume />
        <div className='md:hidden w-full'>
             <MobileResume />
        </div>
    </section>
  )
}

export default Resume
