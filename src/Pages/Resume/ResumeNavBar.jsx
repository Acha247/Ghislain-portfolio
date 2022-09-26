import React from 'react'

const ResumeNavBar = ({icon, text}) => {
  return (
    <li className='relative  rounded-tr-full rounded-br-full resume-item overflow-hidden cursor-pointer'>
        <div className='resume-bg bg-[#03002e] h-full w-0 p-5 transition-all duration-700 rounded-tr-full rounded-br-full'> </div>
        <div className='absolute top-0 flex items-center'>
            <span className='bg-[#03002e] text-white p-3'>
                {icon}
            </span>
            <p className='text-[#03002e] pl-3 transition-all duration-700'>{text}</p>
        </div>
    </li>

  )
}

export default ResumeNavBar