import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../components/Header'
import TestimonialCard from './TestimonialCard'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Testimonial = () => {
  return (
    <section className='py-8  flex flex-col items-center min-h-screen justify-center'>
            <Header
                titile="Testimonials"
                subtitle="What my clients say about me"
            />
            <section className='mt-8 bg-[#03002e] w-full py-20 px-8 md:px-18 lg:px-20'> 
                    <Carousel responsive={responsive}>
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </Carousel>
            </section>

    </section>
  )
}

export default Testimonial