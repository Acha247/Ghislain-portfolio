import React from 'react'
import profile from "../../assets/profile.png"
import Button from '../../components/Buttons/Button'
import OutlineButton from '../../components/Buttons/OutlineButton'
import NavBar from '../../components/NavBar'
import hello from '../../assets/hello.png'
import SocialIcons from '../../components/SocialIcons'

const Profile = () => {
  return (
    // 	#03002e
    // #003247
    // #003366
    // #060d47
    <header className='bg-[#03002e] w-full'>
        <NavBar />
        
        {/*  Banner section */}
        <div className='flex flex-col md:flex-row items-center justify-center py-18 sm:py-20  sm:px-10'>
          <section className='flex flex-col items-center p-4'>
            {/* Icons */}
            <SocialIcons />

            <h2 className='text-2xl text-white font-bold flex items-center'>Hello, <span className=''><img src={hello} className="h-[40px] w-[40px] mx-2" alt="hello" /></span>  I'm <span className='text-orange-700 ml-2'> Ghislain</span></h2>
            <p className='py-4 font-thin text-2xl sm:text-3xl text-white'>Full stack developer</p>
            <h4 className=' font-light text-neutral-200 text-center '>Knack of building applications with front and back end operations.</h4>
            {/* Buttons  */}
            <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 p-4 w-full justify-center'>
              <OutlineButton>Hire me</OutlineButton>
              <a href="https://drive.google.com/file/d/1y_OsrFFjdhoZvJwnyLd_N4upk-oRNtWR/view?usp=sharing" download>
                <Button>Get Resume</Button>
              </a>
            </div>
          </section>
          
          <section className='p-4'>
                <div className='h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full relative shadow-lg shadow-gray-500'>
                  <div className='h-full w-full rounded-full absolute bg-gray-200 -bottom-2 z-0'></div>
                  <div className='h-full w-full rounded-full absolute bg-[#03002e] -bottom-1 z-0'></div>
                  <img src={profile} alt="profile" className='h-full w-full object-cover rounded-full bg-blue-500 absolute' />
                </div>
          </section>
        </div>
    </header>
  )
}

export default Profile
