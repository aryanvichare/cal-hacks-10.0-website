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
import SponsorsTitleSvg from '../public/sponsors2/title-react.svg'

const sponsors = [
    'ripple',
    'intel',
    'convex',
    'zepp',
    'aleo',
    'milvus',
    'together.ai',
    'intersystems',
    'hume',
    'hrt',
    'cockroachdb',
    'cohere',
    'singlestore',
    'reflex',
    'alexar',
    'warp',
    'eluv.io',
    'vectara',
    'citadel',
    'wispr',
]

export default function Home() {
    let jsConfettiRef = useRef<JSConfetti | null>(null)
    let [ddoski, setDdoski] = useState<string | null>(null)

    useEffect(() => {
        jsConfettiRef.current = new JSConfetti()
        setDdoski(getRandomImage())
    }, [])

    return (
        <div>
            <a
                id="mlh-trust-badge"
                style={{
                    display: 'block',
                    maxWidth: '100px',
                    minWidth: '60px',
                    position: 'absolute',
                    right: '50px',
                    top: '0',
                    width: '10%',
                    zIndex: '10000',
                }}
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=black"
                target="_blank"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-black.svg"
                    alt="Major League Hacking 2024 Hackathon Season"
                    style={{ width: '100%' }}
                />
            </a>
            <div className="overflow-hidden min-h-screen text-center font-sans text-white bg-cover bg-[url(/bg.webp)]">
                <nav className="text-xl md:text-3xl w-full drop-shadow-lg flex justify-center md:justify-between items-center mb-8 font-header text-left px-4 py-3 font-semibold">
                    {ddoski ? (
                        <img src={ddoski} className="drop-shadow-lg h-[48px]" alt="" height="48px" />
                    ) : (
                        <div className="h-[48px]" />
                    )}
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
                        Apply by 10/9!
                    </a>
                    <span className="text-xl mt-2 md:mt-0 md:ml-1 drop-shadow-md">
                        &nbsp;or be a{' '}
                        <a href="https://x.calhacks.io/mentor-interest" target="_blank" className="underline">
                            mentor
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
                    <div className="flex flex-wrap mx-auto pb-16">
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
                {/* <div className="w-full mb-20">
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
                        <Sponsor imagePath={'https://www.datanami.com/wp-content/uploads/2023/02/Mindsdb.png'} />
                        <Sponsor
                            imagePath={
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/2560px-Intel_logo_2023.svg.png'
                            }
                        />
                        <Sponsor imagePath={'/sponsors/citadel.png'} />
                        <Sponsor imagePath={'/sponsors/cohere.png'} />
                        <Sponsor imagePath={'/sponsors/alexar.png'} />
                        <Sponsor imagePath={'/sponsors/convex-logo (1).svg'} />
                        <Sponsor imagePath={'/sponsors/Copy of EduDAO-logo-black.png'} />
                        <Sponsor imagePath={'/sponsors/CreativeDataTechnology_Logo_CMYK.png'} />
                        <Sponsor imagePath={'/sponsors/eluv.io.png'} />
                        <Sponsor imagePath={'/sponsors/hrt.png'} />
                        <Sponsor imagePath={'/sponsors/hume.90f145a9_Z2fda2K.avif'} />
                        <Sponsor imagePath={'/sponsors/Milvus Logo_Official.png'} />
                        <Sponsor imagePath={'/sponsors/reflex.png'} />
                        <Sponsor imagePath={'/sponsors/Ripple Logo.svg'} />
                        <Sponsor imagePath={'/sponsors/singlestore-db.webp'} />
                        <Sponsor imagePath={'/sponsors/thf_logo_color.509b7912.png'} />
                        <Sponsor imagePath={'/sponsors/thumbnail.jpg'} />
                        <Sponsor imagePath={'/sponsors/Together AI Logo_Black (1).png'} />
                        <Sponsor imagePath={'/sponsors/Vectara-Logo-Vertical.png'} />
                        <Sponsor imagePath={'/sponsors/warp logo horz gradient dark text.svg'} />
                        <Sponsor imagePath={'/sponsors/Wispr_LogoDark.svg'} />
                        <Sponsor imagePath={'/sponsors/Zepp_health_dark (1).png'} />
                        <Sponsor imagePath={'/sponsors/CockroachLabs.png'} />
                        <Sponsor imagePath={'/sponsors/theHouseFund.png'} />
                        <Sponsor imagePath={'/sponsors/convex.svg'} />
                        <Sponsor imagePath={'/sponsors/skydeck.png'} />
                        <Sponsor imagePath={'/sponsors/aleo.png'} />
                        <Sponsor imagePath={'/sponsors/zilliz.png'} />
                        <a href="https://mule.to/p4ve" target="_blank" rel="noopener noreferrer">
                            <Sponsor
                                imagePath={
                                    'https://dg6qn11ynnp6a.cloudfront.net/companies/429377907.stickermule-logo-vertical.brown-vert.png'
                                }
                            />
                        </a>
                    </div>
                </div> */}
            </div>

            <div className="bg-[#C0D9FF] p-12 lg:p-24 pt-0 lg:pt-0">
                <div className="max-w-4xl m-auto">
                    <div className="relative top-[10vw]">
                        <div className="m-auto max-w-[600px]">
                            <SponsorsTitleSvg />
                        </div>
                        <img src="/sponsors2/bears-and-cake.svg" alt="" />
                    </div>

                    <div className="bg-white p-[8px] rounded-t-[48px] lg:rounded-t-[96px]">
                        <div className="bg-[#F4A22B] rounded-t-[44px] lg:rounded-t-[92px] pt-16 sm:pt-24 pb-8 px-12 lg:pt-48 lg:pb-16 lg:px-24">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-16 gap-y-4 items-center justify-center">
                                <div className="col-span-full">
                                    <div className="max-w-md m-auto py-4">
                                        <img src={`/logos/mindsb.svg`} alt="mindsb logo" />
                                    </div>
                                </div>
                                {sponsors.map((name) => (
                                    <div key={name}>
                                        <img src={`/logos/${name}.svg`} alt={`${name} logo`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative bottom-[2vw] mx-[-1vw]">
                        <img src="/sponsors2/cake-frame.svg" alt="" />
                    </div>
                </div>
            </div>

            <div
                style={{ background: '#5481b2' }}
                className="font-header text-white py-7 px-2 md:px-6 text-center cursor-pointer"
                onClick={() => {
                    jsConfettiRef?.current?.addConfetti()
                }}
            >
                <h5 className="text-xl md:text-3xl mb-1">
                    See you at <span className="font-semibold">Cal Hacks 10.0</span>!
                </h5>
                October 27th to 29th, 2023 in San Francisco ∙{' '}
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="text-underline">
                    MLH&#39;s Code of Conduct
                </a>
            </div>
        </div>
    )
}
