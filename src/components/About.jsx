import Image from 'next/image';
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

function About() {
    


    return (
        <div className='w-full flex justify-center p-20'>
            <div className="left-about min-w-[50%]">
                <div className="img w-[35rem] h-[40rem] ml-[130px] mb-44">
                <Image
                    className='object-cover w-full h-full' 
                    src="/images/about/about-l.webp" 
                    alt="image"
                    width= {500}
                    height={500}/>
                </div>
                <p className='w-64 grotesk text-[1.23rem] ml-[400px] leading-8'>
                    At <strong>Weben</strong>, we’re all about <strong>action</strong>. What are the specific <strong>actions</strong> that fuel your company's growth? Do you need more consumers to <strong>buy</strong> your product? Want more people to <strong>subscribe</strong> to your list, <strong>download</strong> your app, or <strong>learn</strong> about your brand? Or perhaps your goal is simply to <strong>generate</strong> more leads for your products and services? Whatever <strong>actions</strong> you're targeting, <strong>Vrrb</strong> can help.
                </p>
            </div>
            <div className="right-about min-w-[50%] pt-60 relative" data-scroll-container>
                <div className="img w-[25rem] h-[26rem] ml-28 mt-60 mb-28 z-10" data-scroll data-scroll-speed=".15">
                    <Image
                    className='object-cover w-full h-full' 
                    src="/images/about/about-r.webp" 
                    alt="image"
                    width= {500}
                    height={500} />
                </div>
                <div className="absolute circle bg-[#FF5E5E] w-72 h-72 rounded-full z-20 top-72" data-scroll data-scroll-speed="-.05"></div>
                <p className='w-[500px] text-7xl grotesk leading-[5.3rem]'>
                    Weben has the people, the ideas, and the know-how to get your business where you want it to go.
                </p>
                <a href="#" className='flex items-center  gap-2 mt-8 text-lg grotesk'><HiArrowLongRight />Learn more about us</a>
            </div>
        </div>
    )
}

export default About