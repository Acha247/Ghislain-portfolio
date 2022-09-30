import React from 'react'
import profile from "../../assets/profile.png"
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header'

const About = () => {
  return (
    <section id='about' className='py-8 px-4 sm:px-10 flex flex-col items-center min-h-screen justify-center'>
            <Header
                titile="About Me"
                subtitle="Why choose me?"
            />


            <article className='flex flex-col md:flex-row shadow-lg mt-6 w-full lg:w-[70%]'>
                {/* image section */}
                <section className='flex-1'>
                    <img src={profile} alt="profile" className='h-full w-full object-cover' />
                </section>

                {/* More about me */}
                <section className='flex-1 bg-neutral-200'>
                    <div className='py-6  px-4 md:px-6 flex flex-col  justify-between h-full' >
                        <p className='font-light text-gray-700 text-sm lg:text-lg'>
                            Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with
                            knack of bulding applications with almost efficiency. Strong professional with B-Tech willing to be an asset for 
                            an organisation.
                        </p>

                        {/* More about me */}
                        <div className='mt-4'>
                            <h2 className=' font-bold text-gray-700'>Here are a few highlights:</h2>
                            <ul className='pt-2 text-sm lg:text-lg'>
                                <li className='flex items-center space-x-2 text-gray-700 font-light'>
                                    <span className='h-[10px] w-[10px] rounded-full border-[3px] border-orange-700'></span>
                                    <p>Full stack web and mobile development</p>
                                </li>
                                <li className='flex items-center space-x-2 text-gray-700 font-light'>
                                    <span className='h-[10px] w-[10px] rounded-full border-[3px] border-orange-700'></span>
                                    <p>Interactive front end as per the design</p>
                                </li>
                                <li className='flex items-center space-x-2 text-gray-700 font-light'>
                                    <span className='h-[10px] w-[10px] rounded-full border-[3px] border-orange-700'></span>
                                    <p>React and Flutter</p>
                                </li>
                                <li className='flex items-center space-x-2 text-gray-700 font-light'>
                                    <span className='h-[10px] w-[10px] rounded-full border-[3px] border-orange-700'></span>
                                    <p>Building REST API</p>
                                </li>
                                <li className='flex items-center space-x-2 text-gray-700 font-light'>
                                    <span className='h-[10px] w-[10px] rounded-full border-[3px] border-orange-700'></span>
                                    <p>Managing databases</p>
                                </li>
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4  mt-4  w-full justify-center'>
                            <Button
                                styles="bg-[#03002e] border-[#03002e] text-white hover:bg-white hover:border-white hover:text-[#03002e]"
                                >Hire me</Button>
                            <a href="https://drive.google.com/file/d/1y_OsrFFjdhoZvJwnyLd_N4upk-oRNtWR/view?usp=sharing" download>
                                <Button>Get Resume</Button>
                            </a>
                        </div>

                    </div>
                </section>
            </article>
    </section>
  )
}

export default About