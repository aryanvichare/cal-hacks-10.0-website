'use client';

import Image from 'next/image'
import JSConfetti from 'js-confetti'
import { useEffect } from 'react'

export default function Home() {
  let jsConfetti
  useEffect(() => {
    jsConfetti = new JSConfetti()
  });
  return (
    <div className="text-center font-sans text-white bg-repeat" style={{ backgroundImage: 'url(/bg.png)'}}>
      <nav className="mb-8 font-header text-left px-4 py-3">
        CalHacks
      </nav> 
      <p className="text-2xl drop-shadow-lg mb-1">you're invited to</p>
      <h1 className="drop-shadow-xl md:text-8xl sm:text-7xl text-5xl font-header">Cal Hacks 10.0</h1>
      <h3 className="drop-shadow-lg text-xl md:text-2xl mt-3 px-6">Oct 27 - 29, 2023  ~ The Metreon, San Francisco</h3>
      <div className="flex items-center justify-center mt-3 md:mt-8 font-header flex-col md:flex-row px=3">
        <a 
          href="https://apply.calhacks.io/" 
          className="bg-white text-black rounded-full py-1 px-7 border-yellow border-4"
          target="_blank"
        >
          Apply!
        </a>
        <span className="text-xl mt-2 md:mt-0 md:ml-1 drop-shadow-md">&nbsp;or be a <a href="#" className="underline">mentor</a>, <a href="#" className="underline">volunteer</a>, or a <a href="#" className="underline">judge</a>!</span>
      </div>
      <p className="text-xl drop-shadow-md mt-3 text-yellow">deadline: 25/12/2023</p>
      <div className="flex" style={{justifyContent: 'center'}}>
        <img 
          src="/cake.svg" 
          style={{width: '115vw', maxWidth: '115vw'}} 
        />
      </div>
      <h1 className="drop-shadow-xl text-3xl py-20 italic font-header cursor-pointer" onClick={() => {
        jsConfetti.addConfetti()
      }}>more coming soon... confetti?!</h1>
    </div>
  )
}