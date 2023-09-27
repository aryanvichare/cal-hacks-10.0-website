/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef, useEffect, use, useState } from 'react'
import JSConfetti from 'js-confetti'

import Sponsor from '../components/Sponsor'
import Letter from '../components/Letter'
import FAQ from '../components/FAQ'
import Bearbook from '../components/Bearbook'
import AdditionalCards from '../components/AdditionalCards'
import { getRandomImage } from '../components/DdoskiAvatar'

import Cakes from '../public/cake.svg'
import TrioCards from '../public/triocards.svg'

export default function Home() {
    let jsConfettiRef = useRef<JSConfetti | null>(null)
    let [ddoski, setDdoski] = useState<string | null>(null)

    useEffect(() => {
        jsConfettiRef.current = new JSConfetti()
        setDdoski(getRandomImage())
    }, [])

    return (
        <div>
            <div className="overflow-hidden min-h-screen text-center font-sans text-white bg-cover bg-[url(/bg.webp)]">
                <nav className="text-xl md:text-3xl w-full drop-shadow-lg flex justify-center md:justify-between items-center mb-8 font-header text-left px-4 py-3 font-semibold">
                    {ddoski ? (
                        <img src={ddoski} className="drop-shadow-lg h-[48px]" alt="" height="48px" />
                    ) : (
                        <div className="h-[48px]" />
                    )}
                    <a className="hover:underline md:text-xl mr2 drop-shadow-md hidden md:block" href="#faq">
                        <span className="hidden md:inline">questions?</span>
                    </a>
                </nav>

                <p className="mt-20 text-2xl drop-shadow-lg mb-1">you&apos;re invited to</p>
                <h1 className="drop-shadow-xl md:text-8xl sm:text-7xl text-5xl font-bold font-header">
                    Cal Hacks 10.0
                </h1>
                <h2 className="drop-shadow-lg text-xl md:text-2xl mb-3 px-6">
                    co-hosted by&nbsp;
                    <a className="hover:underline" href="https://mindsdb.com/" target="_blank">
                        MindsDB
                    </a>
                </h2>

                <h3 className="drop-shadow-lg text-xl md:text-2xl mt-3 px-6">
                    Oct 27 - 29, 2023 ~ The Metreon, San Francisco
                </h3>

                <div className="flex items-center justify-center mt-3 md:mt-8 font-header font-semibold flex-col md:flex-row">
                    <a
                        href="https://apply.calhacks.io/"
                        className="bg-soft text-brown rounded-full py-1 px-8 border-yellow border-4"
                        target="_blank"
                    >
                        Apply by 10/6!
                    </a>
                    <span className="text-xl mt-2 md:mt-0 md:ml-1 drop-shadow-md">
                        &nbsp;or be a{' '}
                        <a href="https://x.calhacks.io/mentor-interest" target="_blank" className="underline">
                            mentor
                        </a>
                        ,{' '}
                        <a target="_blank" href="https://x.calhacks.io/volunteers-signup-10-0" className="underline">
                            volunteer
                        </a>
                        ,{' '}
                        <a target="_blank" href="https://x.calhacks.io/judge-interest" className="underline">
                            judge
                        </a>
                        , or{' '}
                        <a target="_blank" href="mailto:sponsorship@calhacks.io" className="underline">
                            sponsor
                        </a>
                        !
                    </span>
                </div>

                <div className="flex mt-8 justify-center">
                    <Cakes style={{ width: '120vw' }} />
                </div>

                <div className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-header font-semibold px-4 py-12">
                    the world’s largest collegiate hackathon is back.
                </div>

                <div className="flex mt-8 justify-center">
                    <TrioCards style={{ width: '100vw' }} />
                </div>

                <div className="mb-16">
                    <Letter />
                    <AdditionalCards />
                </div>

                {/* <h1
                    className="drop-shadow-xl text-3xl py-20 italic font-header cursor-pointer"
                    onClick={() => {
                        jsConfettiRef?.current?.addConfetti()
                    }}
                >
                    more coming soon... confetti?!
                </h1> */}
            </div>

            <div className="relative pb-16 md:pt-20 bg-cover bg-[url(/bearbook/bg.png)]">
                {/* TODO: this wave doesn't really work on most screen sizes (i.e. mobile) */}
                <div className="relative">
                    <img
                        className="w-full absolute translate-y-[-50%] md:translate-y-[-100%]"
                        src="/youbelong/bg-wave.svg"
                        alt="background wave"
                    />
                </div>

                {/* You Belong */}
                <div className="max-w-3xl mx-auto px-8 md:pb-24 text-[#502201]">
                    <img src="/youbelong/bears.svg" className="mx-auto py-12" alt="5 cute bears" />

                    <h2 className="font-header leading-[1.5em] font-semibold md:text-6xl text-5xl pb-8">
                        <span className="underline underline-offset-8 decoration-4">You</span> belong at Cal Hacks!
                    </h2>

                    <p className="font-sans md:text-lg text-base">
                        Whether you’ve barely ever coded in your life or have participated in twenty hackathons, Cal
                        Hacks is here to give you a platform to build, to learn, and to create– the world is your
                        oyster!
                        <br />
                        <br />
                        As the world’s largest collegiate hackathon, we recognize that tech spaces need to do more to
                        welcome historically underrepresented minorities in STEM and create environments where hackers
                        of marginalized backgrounds can thrive. As long as you have a passion for technology and
                        motivation to change the world, you belong at Cal Hacks.
                    </p>
                </div>

                <Bearbook />
            </div>

            <div className="bg-beige xl:pt-16 lg:pt-12 md:pt-8 pt-4">
                {/* FAQs */}
                <div className="lg:px-12 md:px-8 px-4">
                    <div className="flex flex-wrap mx-auto mb-16">
                        <img className="w-full mb-8 md:mb-0" src="/confetti-top.svg" alt="confetti" />
                        <div className="w-[13%] mr-[2%] md:block hidden">
                            <img src="/confetti-left.svg" alt="confetti" />
                        </div>
                        <div className="flex-1 p-[2%]" id="faq">
                            <FAQ />
                        </div>
                        <div className="w-[15%] md:block hidden">
                            <img src="/confetti-right.svg" alt="confetti" />
                        </div>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="w-full">
                    <div className="md:w-9/12 w-100 md:py-10 flex mx-auto flex-col justify-center items-center">
                        <img className="text-center mx-auto" src="/sponsors/header-top.svg" alt="birthday decoration" />
                        <img className="text-center mx-auto" src="/sponsors/header-text.png" alt="our sponsors" />
                        <img
                            className="text-center mx-auto"
                            src="/sponsors/header-bottom.svg"
                            alt="birthday decoration"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] mx-[10vw] mt-10">
                        <Sponsor imagePath={'/sponsors/CockroachLabs.png'} />
                        <Sponsor imagePath={'/sponsors/theHouseFund.png'} />
                        <Sponsor imagePath={'/sponsors/convex.webp'} />
                        <Sponsor imagePath={'/sponsors/skydeck.png'} />
                        <Sponsor imagePath={'/sponsors/aleo.png'} />
                        <Sponsor imagePath={'/sponsors/zilliz.png'} />
                    </div>
                </div>
                <div
                    style={{ background: '#5481b2' }}
                    className="font-header text-white py-7 px-2 md:px-6 text-center mt-20 cursor-pointer"
                    onClick={() => {
                        jsConfettiRef?.current?.addConfetti()
                    }}
                >
                    <h5 className="text-xl md:text-3xl mb-1">
                        See you at <span className="font-semibold">Cal Hacks 10.0</span>!
                    </h5>
                    October 27th to 29th, 2023 in San Francisco
                </div>
            </div>
        </div>
    )
}
