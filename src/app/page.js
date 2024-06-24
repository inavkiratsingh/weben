'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LocomotiveScroll from "locomotive-scroll";
import Start_pr from "@/components/Start_pr";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Home() {

  function cursoranimation() {
    document.addEventListener("mousemove", function (dets) {
      console.log(dets.x);
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
        stagger: 0.15,
        ease: "power1.out",
        duration: .7
      })

    })

    // document.querySelector('#child1').addEventListener("mouseenter",function(){
    //     gsap.to('.cursor',{
    //     transform: 'translate(-50%,-50%) scale(1)'
    //     })
    // })
    // document.querySelector('#child1').addEventListener("mouseleave",function(){
    //     gsap.to('.cursor',{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //     })
    // })
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
    cursoranimation()
  })

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main>
      <div className="rounded-full-3xl -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 cursor fixed">
        <svg width="20" height="25" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" stroke="#FF5E5E" strokeWidth="1.2" fill="none" />
        </svg>

      </div>
      <Start_pr />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}