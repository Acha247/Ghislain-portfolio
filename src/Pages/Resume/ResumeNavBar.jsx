import React from 'react'

const ResumeNavBar = ({icon, text, onClick, style}) => {
  return (
    <li onClick={onClick} className={`relative  rounded-tr-full rounded-br-full resume-item overflow-hidden cursor-pointer ${style? style: null}`}>
        <div className="resume-bg w-0 bg-[#03002e] h-full p-5 transition-all duration-700 rounded-tr-full rounded-br-full"> </div>
        <div className='absolute top-0 flex items-center'>
            <span className='bg-[#03002e] text-white p-3'>
                {icon}
            </span>
            <p className='text-[#03002e] pl-3 transition-all duration-700 resume-text'>{text}</p>
        </div>
    </li>

  )
}

export const MobileResumeNavBar = ({onClick, icon, style}) => {
  return (
    <li onClick={onClick} className={`flex-1 bg-white text-[#03002e] overflow-hidden cursor-pointer `}>
        
        <div className='flex items-center w-full'>
            <span className={`p-3 w-full border-x flex items-center justify-center ${style? style: null}`}>
                {icon}
            </span>
        </div>
    </li>
  )
  
}


export default ResumeNavBar