import React from 'react'

const Work = () => {
  return (
    <>
        <div className='py-2 md:px-8'>
            <div className='flex items-center justify-between'>
                <h2 className='flex items-center'>
                    <span className='text-orange-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </span>
                    <h2 className='font-bold ml-2 text-sm md:text-lg'>Visionary Technology Company</h2>
                </h2>
                <span className='text-orange-700 text-sm md:text-lg'>2022-Present</span>
            </div>
            <div className='ml-6 '>
                <h5 className='py-2 font-semibold text-orange-700 text-sm md:text-lg'>FULL STACK DEVELOPER</h5>
                <p className='mb-2 text-sm md:text-lg'>Currently working as a MERN stack web and mobile developer and also a freelancer on Upwork</p>
                <ul>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Developed an online registration system with an Admin dashboard to manage registration process. 
                        
                                <a href='/' className='text-orange-700 text-xs md:text-sm '> VIEW WEBSITE </a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div className='py-2 md:px-8'>
            <div className='flex items-center justify-between'>
                <h2 className='flex items-center'>
                    <span className='text-orange-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </span>
                    <h2 className='font-bold ml-2 text-sm md:text-lg'>Capital Insider</h2>
                </h2>
                <span className='text-orange-700 text-sm md:text-lg'>2020-2021</span>
            </div>
            <div className='ml-6 '>
                <h5 className='py-2 font-semibold text-orange-700 text-sm md:text-lg'>FULL STACK DEVELOPER</h5>
                <p className='mb-2 text-sm md:text-lg'>Worked as a Web developer</p>
                <ul>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Rebuilt their website from a static to a dynamic and responsive website. 
                                {/* <a href='/' className='text-orange-700 text-sm '> VIEW WEBSITE </a> */}
                        </p>
                    </li>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Website hosting using Namecheap.
                        </p>
                    </li>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Created a referral system to help marketing department.
                        </p>
                    </li>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Enhanced financial features of the system such as loans, savings, accounts, and investments using Nodejs and firebase cloud functions.
                        </p>
                    </li>
                    <li className='flex items-start'>
                        <span>- </span>
                        <p className='pl-2 text-sm md:text-lg'>
                            Enhance the application features to effectively fix bugs and optimize the overall performance, reliability, and efficiency of the system.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Work