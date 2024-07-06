"use client"
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function About() {
    
    function animate()  {
        var tl = gsap.timeline();
        tl.from(".left-about img", {
            y: 170,
            opacity: 0
        })
        tl.to(".left-about img", {
            y: 0,
            duration: .8,
            ease: "slow(0.7,0.7,false)",
            delay: 0.6,
            stagger: .12,
            opacity: 1
        })
        
    }

    useEffect(() => {
      animate()
    })
    


    return (
        <div className='w-[100%] flex sm:flex-col lg:flex-row justify-center lg:p-20 sm:mt-32 relative' >
            <div className="left-about lg:min-w-[50%] sm:h-[30rem] sm:w-[100%]">
                <div className="img sm:h-full lg:w-[35rem] lg:h-[40rem] lg:ml-[130px] mb-44">
                <Image
                    className='object-cover w-full h-full' 
                    src="/images/about/about-l.webp" 
                    alt="image"
                    width= {500}
                    height={500}/>
                </div>
                <p className='w-64 lg:block sm:hidden grotesk text-[1.23rem] lg:ml-[400px] leading-8'>
                    At <strong>Weben</strong>, we&apos;re all about <strong>action</strong>. What are the specific <strong>actions</strong> that fuel your company&apos;s growth? Do you need more consumers to <strong>buy</strong> your product? Want more people to <strong>subscribe</strong> to your list, <strong>download</strong> your app, or <strong>learn</strong> about your brand? Or perhaps your goal is simply to <strong>generate</strong> more leads for your products and services? Whatever <strong>actions</strong> you&apos;re targeting, <strong>Vrrb</strong> can help.
                </p>
            </div>
            <div className="right-about sm:-mt-14 lg:min-w-[50%] lg:pt-60 relative" data-scroll-container>
                <div className="img lg:w-[25rem] lg:h-[26rem] lg:ml-28 sm:mr-6 sm:ml-32 lg:mt-60 lg:mb-28 " data-scroll data-scroll-speed=".15">
                    <Image
                    className='object-cover w-full h-full' 
                    src="/images/about/about-r.webp" 
                    alt="image"
                    width= {500}
                    height={500} />
                </div>
                <div className="absolute circle bg-[#FF5E5E] lg:w-72 lg:h-72 sm:w-32 sm:h-32 rounded-full z-20 lg:top-72 sm:-top-10 sm:left-10" data-scroll data-scroll-speed="-.05"></div>
                <p 
                className='lg:w-[500px] lg:mt-0 sm:mt-20 lgtext-7xl grotesk leading-["5.3rem"] sm:text-3xl lg:text-7xl sm:px-5 sm:pr-20' 
                >
                    Weben has the people, the ideas, and the know-how to get your business where<br /> you want it to go.
                </p>

                <p className='lg:w-64 sm:p-5 sm:block sm:mt-10 grotesk text-[1.23rem] lg:hidden leading-8'>
                    At <strong>Weben</strong>, we&apos;re all about <strong>action</strong>. What are the specific <strong>actions</strong> that fuel your company&apos;s growth? Do you need more consumers to <strong>buy</strong> your product? Want more people to <strong>subscribe</strong> to your list, <strong>download</strong> your app, or <strong>learn</strong> about your brand? Or perhaps your goal is simply to <strong>generate</strong> more leads for your products and services? Whatever <strong>actions</strong> you&apos;re targeting, <strong>Vrrb</strong> can help.
                </p>
                <a href="#" className='flex sm:px-5 items-center  gap-2 mt-8 text-lg grotesk'><HiArrowLongRight />Learn more about us</a>
            </div>
        </div>
    )
}

export default About