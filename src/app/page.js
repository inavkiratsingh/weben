'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import React, { useEffect } from "react";
import gsap from "gsap";
import Projects from "@/components/Projects";

export default function Home() {

  function cursoranimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
        stagger: 0.15,
        ease: "power1.out",
        duration: .7
      })

    })

    document.querySelectorAll('main').forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to('.cursor', {
          transform: 'translate(-50%,-50%) scale(1)',
          opacity: .5
        })
      })
    })
    document.querySelectorAll('main').forEach(function (elem) {
      elem.addEventListener("mouseleave", function () {
        gsap.to('.cursor', {
          transform: 'translate(-50%,-50%) scale(0)',
          opacity: 0
        })
      })
    })


  }
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      // Dynamically import Locomotive Scroll
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      // Initialize Locomotive Scroll instance
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true, // Set Locomotive Scroll options as needed
      });

      // Update Locomotive Scroll on component mount
      // locomotiveScroll.update();

      // Optional: Handle window resize
      // window.addEventListener('resize', () => {
      //   locomotiveScroll.update();
      // });
    };

    // Call initialization function
    initLocomotiveScroll();
    cursoranimation()
  })

  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="w-full overflow-hidden">
      <div className="rounded-full-3xl -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 cursor fixed lg:block sm:hidden z-[999]">
        <svg width="20" height="25" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" stroke="#FF5E5E" strokeWidth="1.2" fill="none" />
        </svg>

      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}