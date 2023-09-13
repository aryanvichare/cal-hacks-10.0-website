/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import JSConfetti from "js-confetti";
import { useRef, useEffect, use } from "react";

let bearbook = {
  "1.0": "beep boop",
  "2.0": "boop beep",
  "3.0": "brightest smile",
  "4.0": "coolest hair",
  "5.0": "biggest heart",
  "6.0": "nicest eyes",
  "7.0": "class clown",
  "hello:world": "most out of this world",
  "8.0": "most likely to succeed",
  "9.0": "teacher’s pet",
  "AI LLM": "biggest flirt"
  
}

export default function Home() {
  let jsConfettiRef = useRef<JSConfetti | null>(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  return (
    <>
      <div
        className='overflow-hidden min-h-screen text-center font-sans text-white bg-cover'
        style={{ backgroundImage: "url(/bg.webp)" }}>
        <nav className='text-xl md:text-3xl w-full drop-shadow-lg flex justify-center md:justify-between items-center mb-8 font-header text-left px-4 py-3 font-semibold'>
          <span>Cal Hacks x MindsDB</span>
          <a
            className='hover:underline md:text-xl mr2 drop-shadow-md hidden md:block'
            href='#faq'>
            <span className='hidden md:inline'>questions?</span>
          </a>
        </nav>
        <p className='mt-20 text-2xl drop-shadow-lg mb-1'>
          you&apos;re invited to
        </p>
        <h1 className='drop-shadow-xl md:text-8xl sm:text-7xl text-5xl font-bold font-header'>
          Cal Hacks 10.0
        </h1>
        <h2 className='drop-shadow-lg text-xl md:text-2xl mb-3 px-6'>
          co-hosted by&nbsp;
          <a
            className='hover:underline'
            href='https://mindsdb.com/'
            target='_blank'>
            MindsDB
          </a>
        </h2>
        <h3 className='drop-shadow-lg text-xl md:text-2xl mt-3 px-6'>
          Oct 27 - 29, 2023 ~ The Metreon, San Francisco
        </h3>
        <div className='flex items-center justify-center mt-3 md:mt-8 font-header font-semibold flex-col md:flex-row'>
          <a
            href='https://apply.calhacks.io/'
            className='bg-soft text-brown rounded-full py-1 px-8 border-yellow border-4'
            target='_blank'>
            Apply!
          </a>
          <span className='text-xl mt-2 md:mt-0 md:ml-1 drop-shadow-md'>
            &nbsp;or be a{" "}
            <a
              href='https://x.calhacks.io/mentor-interest
  '
              target='_blank'
              className='underline'>
              mentor
            </a>
            ,{" "}
            <a
              target='_blank'
              href='https://x.calhacks.io/volunteers-signup-10-0'
              className='underline'>
              volunteer
            </a>
            , or a{" "}
            <a
              target='_blank'
              href='https://x.calhacks.io/judge-interest'
              className='underline'>
              judge
            </a>
            !
          </span>
        </div>
        <p className='text-md md:text-xl drop-shadow-md bg-white px-2 md:px-3 bg-opacity-50 bg-blue-500 py-1 md:py-2 rounded-md inline-block mt-3 text-brown'>
          priority deadline: 09/22/23
        </p>
        <div className='flex' style={{ justifyContent: "center" }}>
          <img
            src='/cake.svg'
            style={{ width: "115vw", maxWidth: "115vw" }}
            alt='A picture of cake'
          />
        </div>
        <div
          className='bg-white max-w-2xl w-2xl text-black mx-2 md:mx-auto p-6 text-left mt-20'
          id='faq'>
          <h1 className='mb-4 text-2xl'>Frequently Asked Questions</h1>
          <ul>
            <li>
              <u>How many people can be on a single team?</u>
              <p className='text-gray-700 mt-1'>
                Up to 4 people can be part of a single team.
              </p>
            </li>
            <li className='mt-4'>
              <u>Do I have to have a team to participate?</u>
              <p className='text-gray-700 mt-1'>
                No. We will have team matching during the event itself, or you can
                come with a team or solo. Whatever works for you!
              </p>
            </li>
            <li className='mt-4'>
              <u>What experience level is needed to attend?</u>
              <p className='text-gray-700 mt-1'>
                All experience levels are welcome!
              </p>
            </li>
            <li className='mt-4'>
              <u>Do I have to be in-person?</u>
              <p className='text-gray-700 mt-1'>
                Yes, you and your team will all have to be in-person to
                participate in the hackathon.
              </p>
            </li>
            <li className='mt-4'>
              <u>Will you be compensating travel?</u>
              <p className='text-gray-700 mt-1'>
                Unfortunately, we cannot offer financial travel assistance like
                flight reimbursement at this time.
              </p>
            </li>
            <li className='mt-4'>
              <u>Is there a finalized schedule of events?</u>
              <p className='text-gray-700 mt-1'>
                We&apos;ll have a schedule out soon! Stay posted for more.
              </p>
            </li>
            <li className='mt-4'>
              <u>I would like to sponsor Cal Hacks 10.0!</u>
              <p className='text-gray-700 mt-1'>
                Please contact&nbsp;
                <a
                  className='hover:underline drop-shadow-md'
                  href='mailto:sponsorship@calhacks.io'>
                  sponsorship@calhacks.io
                </a>
                !
              </p>
            </li>
            <li className='mt-4'>
              <u>My question isn&apos;t answered!</u>
              <p className='text-gray-700 mt-1'>
                Unanswered questions still?&nbsp;
                <a
                  className='hover:underline drop-shadow-md'
                  href='mailto:team@calhacks.io'>
                  Click here to contact us!
                </a>
              </p>
            </li>
          </ul>
        </div>
        <h1
          className='drop-shadow-xl text-3xl py-20 italic font-header cursor-pointer relative'
          onClick={() => {
            jsConfettiRef?.current?.addConfetti();
          }}>
          more coming soon... confetti?!
        </h1>
      </div>
      <div style={{backgroundImage: 'url(/bearbook/bg.png)', backgroundSize: 'cover'}} className="relative">
        <img src="/bearbook/header.svg" className="mx-auto w-9/12 py-10 pt-24" />
        <div className="grid grid-cols-3 w-9/12 mx-auto mt-24">
          {Object.keys(bearbook).slice(0,9).map(key => (
            <div className="flex flex-col text-brown justify-center items-center mb-16">
              <img src={`/bearbook/${key.replace(":", ";")}.png`} style={{height: '300px'}} />
              <p className="text-lg font-header font-bold mt-4">{key}</p>
              <p>{bearbook[key]}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 w-6/12 mx-auto pb-16">
          {Object.keys(bearbook).slice(9,11).map(key => (
            <div className="flex flex-col text-brown justify-center items-center">
              <img src={`/bearbook/${key.replace(":", ";")}.png`} style={{height: '300px'}} />
              <p className="text-lg font-header font-bold mt-4">{key}</p>
              <p>{bearbook[key]}</p>
            </div>
          ))}
        </div>
        <img src="/bearbook/bear.png" style={{ height: '150px', position: 'absolute', bottom: "-5px", right: "24px" }}/>
      </div>
    </>
  );
}
