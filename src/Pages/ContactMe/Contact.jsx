import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header'
import SocialIcons from '../../components/SocialIcons'
import sendEmail from '../../assets/send-email.png'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""})

    

    const handleChange = (e) => {
        setForm( current => { return {...current, [e.target.name]: e.target.value}})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
            const SID = "service_ky1h1qh"
            const TID = "template_0letyie"
            const PID = "IWnyFo_Ly3Il7qYFh"
            console.log(form)
            emailjs.send(process.env.REACT_APP_SERVICE_ID || SID,process.env.REACT_APP_TEMPLATE_ID || TID, form, process.env.REACT_APP_PUBLIC_KEY || PID)
                .then((response) => {
                    toast.success('Message sent sucessfully!');
                    setForm( current => { return { name : "", email: "", message: ""}})
                }, (err) => {
                    toast.error('Please try again');
                    console.log('FAILED...', err);
            });
    }
  return (
    <section className='py-8 px-8 md:px-18 lg:px-20 flex flex-col items-center min-h-screen justify-center'>
            <ToastContainer
                position="top-right"
                autoClose={5000}    
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />

            <Header
                titile="Contact Me"
                subtitle="Lets keep in touch"
            />
            <section className='mt-10 bg-[#03002e] w-full py-8 px-4 md:py-12 md:px-8  flex flex-col md:flex-row rounded-2xl md:space-x-4'>
                <div className='flex-1 text-white flex flex-col justify-between pb-4 md:pb-0'>
                    <div>
                        <h4 className='text-2xl'>Get In Touch</h4>
                        <SocialIcons />
                    </div>

                    <div>
                        <h6>Send Your Email Here!</h6>
                        <div className='bg-gray-800 h-30 md:h-48'>

                            <img src={sendEmail} alt="send-email" className='w-full h-full object-contain' />
                        </div>
                    </div>
                </div>

                <div className='flex-1 bg-gray-100 rounded-lg py-4 px-4'>
                    <h2 className='text-orange-700 text-sm font-bold py-2'>Thank you for contacting Ghislain</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none" placeholder="example@gmail.com" required />
                        </div>
                        <div className=" mb-3">
                            <label htmlFor="message" className="ml-2 text-sm font-medium text-gray-900 ">Message</label>
                            <textarea name="message" value={form.message} onChange={handleChange} id="message" rows="2" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none' required></textarea>
                        </div>
                        <button type="submit" className="flex items-center bg-[#03002e] rounded-md text-white px-4 py-2">
                            <span className='mr-2'>Send</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                </svg>
                            </span>
                        </button>
                    </form>

                </div>
            </section>

    </section>
  )
}

export default Contact