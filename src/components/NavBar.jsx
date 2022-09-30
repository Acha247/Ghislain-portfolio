import React, { useState } from 'react'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle( current=> !current )
    }
  return (
    <>
        {/* Desktop nav */}
        <nav className='hidden md:flex items-center justify-around px-4 py-4 text-white border-b border-[#003247]'>
          <div>
            <span className='text-5xl font-bold text-orange-700'>M</span>
          </div>
          <ul className='flex space-x-4 font-normal'>
                <li className='py-2 flex flex-col nav-item'>
                    <a href="/" className='h-full text-white transition-all duration-300 w-full '>Home</a>
                    <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                </li>

                <li className='py-2 flex flex-col nav-item'>
                    <a href="/" className='h-full text-white transition-all duration-300 w-full '>About</a>
                    <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                </li>

                <li className='py-2 flex flex-col nav-item'>
                    <a href="https://drive.google.com/file/d/1y_OsrFFjdhoZvJwnyLd_N4upk-oRNtWR/view?usp=sharing" download className='h-full text-white transition-all duration-300 w-full '>Resume</a>
                    <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                </li>

                <li className='py-2 flex flex-col nav-item'>
                    <a href="/" className='h-full text-white transition-all duration-300 w-full '>Testimonial</a>
                    <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                </li>

                <li className='py-2 flex flex-col nav-item'>
                    <a href="/" className='h-full text-white transition-all duration-300 w-full '>Contact</a>
                    <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                </li>
                
          </ul>
        </nav>
        
      {/* Mobile Nav */}
        <nav className='relative md:hidden px-4 sm:px-10 py-4 text-white border-b border-[#003247]'>
            <div className='flex items-center justify-between z-10'>
                <div>
                    <span className='text-3xl font-bold text-orange-700'>M</span>
                </div>
                <span onClick={handleToggle} className='cursor-pointer'>
                    {!toggle && 
                    <p className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </p>}
                    {toggle && 
                        <p className='text-white font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </p>}
                </span>
            </div>
            {
                <ul 
                    className={`absolute top-14 left-0 w-full flex flex-col font-normal border-t z-0
                    border-[#003247] py-2 px-10 bg-[#003366] transition-all duration-300 ${toggle? "-translate-y-0 opacity-100" : "-translate-y-[50rem] opacity-0"}`}
                >
                    <li className='py-2 flex flex-col nav-item'>
                        <a href="/" className='h-full text-white transition-all duration-300 w-full '>Home</a>
                        <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                    </li>
                    <li className='py-2 flex flex-col nav-item'>
                        <a href="/" className='h-full text-white transition-all duration-300 w-full '>About</a>
                        <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                    </li>
                    <li className='py-2 flex flex-col nav-item'>
                        <a href="https://drive.google.com/file/d/1y_OsrFFjdhoZvJwnyLd_N4upk-oRNtWR/view?usp=sharing" download className='h-full text-white transition-all duration-300 w-full '>Resume</a>
                        <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                    </li>
                    <li className='py-2 flex flex-col nav-item'>
                        <a href="/" className='h-full text-white transition-all duration-300 w-full '>Testimonial</a>
                        <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                    </li>
                    <li className='py-2 flex flex-col nav-item'>
                        <a href="/" className='h-full text-white transition-all duration-300 w-full '>Contact</a>
                        <div className='w-0 h-[1px] bg-orange-700 transition-all duration-500'></div>
                    </li>
                </ul>
            }
        </nav>
    </>
  )
}

export default NavBar