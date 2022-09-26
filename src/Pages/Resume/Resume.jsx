import React from 'react'
import Header from '../../components/Header'
import Education from './Education'
import Project from './Project'
import ResumeNavBar from './ResumeNavBar'
import Work from './Work'

const Resume = () => {
  return (
    <section className='py-8 px-4 sm:px-20 flex flex-col items-center h-screen justify-center'>
        <Header 
            titile="Resume"
            subtitle="My Formal Bio Details"
        />
        <div className='mt-12 w-full flex '>
            <section className='flex-none text-white w-[20rem] pr-14'>
                <ul className='flex flex-col'>    
                    <li className='flex items-center rounded-tr-full rounded-br-full'>
                        <span className='bg-[#03002e] text-white p-5'></span>
                    </li>

                    <ResumeNavBar 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                            </svg>
                        }
                        text="Education"
                    />
                    <ResumeNavBar 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                            </svg>
                        }
                        text="Work History"
                    />
                    <ResumeNavBar 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                            </svg>
                        }
                        text="Programming Skills"
                    />
                    <ResumeNavBar 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                            </svg>
                        }
                        text="Projects"
                    />
                    <ResumeNavBar 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                            </svg>
                        }
                        text="Interests"
                    />

                    <li className='flex items-center rounded-tr-full rounded-br-full'>
                        <span className='bg-[#03002e] text-white p-5'></span>
                    </li>
                </ul>
                
            </section>


            <section className='py-6 flex-auto border-l-2 border-[#03002e13] h-[20rem] overflow-auto'>
                {/* <div>
                    <Education
                        school="University of Buea, Cameroon"
                        year="2019 - 2022"
                        degree="Bachelor of Technology"
                    />
                    <Education
                        school="High School"
                        year="2010 - 2018"
                        degree="Government Hight School Nyalla, Douala, Cameroon"
                    />
                </div> */}
                
                {/* <div>
                    <Work />
                </div> */}

                <div>
                    <Project 
                        title="Personal Portfolio Website"
                        date="2022-2022"
                        subtitle="Technologies Used: Reactjs, TailwindCSS"
                        description="A personal portfolio website to showcase all my details and projects in one place."
                    />
                    <Project 
                        title="Vaccine Reminder"
                        date="2021-2021"
                        subtitle="Technologies Used: Reactjs, TailwindCSS, Redux, Nodejs, MongoDB"
                        description="A reminder app for nursing mother's about their baby's next vaccination date throught the use of email and SMS."
                    />
                    <Project 
                        title="Meal Planner App"
                        date="2021-2021"
                        subtitle="Technologies Used: Flutter, Nodejs, MongoDB"
                        description="Unlike other app this app suggest meals based on what you have available in your store."
                    />
                </div>
            </section>
        </div>
    </section>
  )
}

export default Resume