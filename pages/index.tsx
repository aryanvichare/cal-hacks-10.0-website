/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import JSConfetti from "js-confetti";
import { useRef, useEffect, use, useState } from "react";

let images = [
  "/ddoski/bWnxfTPiIKJ1GLfB3noatym3pFioyPFSD4-czrB17_b0SfLkiamsYygMYfTtZdwM-3toISeH6RfOYg0MPgkasVwFF0aa_g1ouXyiQGuCnKIylgA6HbTlRdHwGJC65ZuM7myAt_SdcUWH5E_Xje74BDIDbw=s2048.png", "/ddoski/ao8EAq-GRjZ7zslqGmz9rDWM2vgHPx7z_JZsO9nfQccL3ktE_MzXuQ2PjTI65v1SYw4fNf2tqXZ0e4mVW9rp_XpydiUIZNNLhJCkGk-4AJK3elXZG18cZ_0n9PnEbi71RIuKKkfmrec1_ld4fFob8mSsxA=s2048.png", "/ddoski/wYdZ6RXwHXSDoJABH2c_Z04adL4Sfp1i0M8fgxafk9oZ22TOKQjeWekdichmImI2kwMWAvcTUBqux33MUv6ASuKS4stPWuGh1VBJz1OIViKTmAt4P4DEFqiEwBjLva0KoAx9GTpH9Y8T20UUv9R0JfytWA=s2048.png", "/ddoski/fq1BHEwnNRGngcH-k2z6E1HhbVcrWEq2LGqgBhYxrAWKazneNXACyjqWg15qDQ6dv8dM2s4bPjERT_FpfRTTifUw-Dwa3CNUP3VdGGmkTO3O69JMkk79GFdnZCji4HYZV_qwiijppN8n2e0j1DDAqnX5Bg=s2048.png", "/ddoski/3Rw3Uq_oxDVdJvZoqSWvAtKYYd_Uijdh2XRVIgV3ST6_fA2yFcmTzroO_n2NfuSO7Y_F49Sl3zgmoxLsUic1HGLty7ah8pFTI6OQUXG2jDIALqMW9lLwgoOit8FrpJmw-xJUHFe9jZQ894PQHZK9ckOsag=s2048.png", "/ddoski/9yxqC2lIzWsi-wAdI5XareRALhZf9JbiZmcVigbiuqPTVWNGSBw-zznpYV4agtRe8H6b9JRY98QMo1haGaMliwSTa5vLNjrYye3q8EFWU_oI2vay7ozrrDl5cr7O-Nfbpvz0ozOyOeCeVo1UrduT1nvpIw=s2048.png", "/ddoski/eJ-Tz8tOLuDjWnAO2ibEMfbWd5OOKMRK4q2nELFCSeI14pgXMT5y06PwQbnT566bPrGlBOiUYSmstywxQSzDVyKwVnnuDc_TjBgdwf_lz_67cp8_3yVPpt_Kr4WyJEYIjqaep2htfEhwUbTdPdLYqqDsJg=s2048.png", "/ddoski/Z0LflfFBAgc8M-Rem9POoFcjLUv8094S42eNM1lEFRpo0mly1xFxCHzSB98xegrf86w1-H-xm3cm27fGlknT36cBADcsxA4KammOptY2sfKC-ALKzp5QIJORIvu9BytQ8xa68LYkmZvm8gvkFJOxmaOaIg=s2048.png", "/ddoski/IPsttbw5JGmmOfPyi2EN8ogcRzE4GuZt6QT_EuP3NQg-PfKzkRlvtJ6YC0Wwh_zlQVOQisblcWFJyIHaw4ViPb8RNwd9jBV9YHcfagYZxWbydrOSbq6yj0TJxH_lgOr2ZF9MHWFlOehv_vtxHnIOdAzHfw=s2048.png", "/ddoski/vslNA99Ek8W7x6aWZuaTcyVXHJHmaOLC_9gM9gEvO1ynwQ9qecRS8DCsBesM6FOk6H96XI_WeB35qR9zC3PsfdbuKfJQnQxYiIPlYrOme-l29J4tUcoFSnaOTBmGnD3OkuQvLi_mA2G-9NapjlKPrWKNug=s2048.png", "/ddoski/q8aMMPBR0gvzPUROWNPk6Obey9qHaBYS9DFJ9Fqd-mqQn_7Wiv9zVIQOYTeEq8OSXC5LiSGGYN4-TuCsZlMZOuCtMDyHfgbdaX7QQOAx7nEereFPt9mywdYOoUD7CWXb7jiKfJ_IropoB_87EzicIvZd8A=s2048.png", "/ddoski/PVnZKvJzj_zROKrXwWzIp6yIvo6pdnyszsc5DICBva39pfmmvF4PWzbjGiEdVuTaQjf9Nx5DJ8v7dvS-kf0yZy45MBTwylrkPkc0vInOMZdj0Ol0YCAR1taZSgBfqzFYzOpCWSIKYGETpCXd80XBI9XebQ=s2048.png", "/ddoski/ocmMzcVhOYynGF8i3539YWUwTF4kr-bXaDGGjq_PD1wzeEuA02EbXIJusGU3a5aDeQAtfQxrfhEKFhDvOa3M0LcF1u_IMj0Q4ZxX7vpnjO1e9CW3SKzd2LIlsErnCVkiTPZkFLqCtogHM4INGDN4TVppCw=s2048.png", "/ddoski/7BRh5W5-XpsMN2eGxyShi10Akz6bspJR-wMtRhNfY67g-AceyeA52xX8wOU6A4x5eb_Umas-1V8pai5B5VmvfFx6dKxnPqEBA5ArJ6o3WpwhTwxi80Wie_EtTowQTn775XH2jsNEiAVxsf36MmLwEf9gBQ=s2048.png", "/ddoski/x7hO0tRvZqlz5fT2uTXR0Qfnn6Fq2Toule52pLAhU9gHPCx_4B6OJjxRosShxmTGzU903_rruilxMMpyjaw2zkGYuHZ2y_lO8wlGmBZdQ0aQVs_z7at6q8k4UL8SZJkBygbFZO0m3a4QsmIQXRRRjf2q3g=s2048.png", "/ddoski/psR4difZjeZ7u6hCVA77MlvjRC0_FTzgdReetHoqaS--krnbV7wxPwzdk4J3CtfPYwwVdPlCVNhGTSh0Y0CkWoCTQKTq8wRMWe9CzJFzreCultRjSuYOZvmZNQTlVSpiE86iupmVHhrd3xyqVEBzoJ0DQw=s2048.png", "/ddoski/l2DjGIyFnz7qB1H_sRd9I14jT1yKhqIY7abNFL13ejh99ryxgUTqDkGrxD6o0Z7WBc429lQCvFZ6ZgAjCKRHtZzIPeHZVgf_U7e0j_g4Ip2-r8Y1PGNt91389hbZegMdUHZIX4VVVpTYZCy0_Z_-Wg4FGQ=s2048.png", "/ddoski/WdlnVEBmHlFZBw1No_HEVkKfuAD0pBLnNEzeINx3TOGgCS0dwPysU4t4QpB4fgakq4K9xjsQ16u7fZvhPRyF850pu8GsqidKQP7HywONiwgSgVU7SEst4Coit04nUSluIFDidzoFIP9FoaTqF5xwcHO6fA=s2048.png", "/ddoski/Nv8PMJS_XrEklMXFL1aIjONAsCx6H6SoBpdMvaSkVVibVL9IW_f3wjuqEOP7KLGy9EIK45Im_VSvr3tePxAWFiVja-qGmo5iv2d5EaCxkjVetiRgB4bkuU8JssroZx7EsqpgQsPCft6HLkzsnflwYikCVQ=s2048.png", "/ddoski/TDXpfs2Bc6OWM6sGFPbOGuvnk4XbiQey1Gmo67NxL8w2V412g0vYaFCU8lFw6wAYp6mntBNIGtRTbRr8VFqp4HCa-wNrp7ejgYSRBmLoX1wVwHFHYWtGPpAPTOMfGFwA34DBEkMODEppXRUa9zrrpPih4A=s2048.png", "/ddoski/wdMuP3G1Mh1XaSJR_A_h7cKqM8qyWf5VzaqOuz0F-FxJ8IgP0xj4Q8KGY3tlyr6RFeLXYBAqqkTn9n8Dviwmr1y__GDuyRhHOfjhvy1nH65d7YeofFeH6MVTUsBQIHoXxrpv6HNg9fWD4XYibeqaO7MMEg=s2048.png", "/ddoski/dBtzavq1X4_XVPu6sRWeOUK7CZENpojde3F34C_YreZfJwUYtctwp9PsMo5bEKjdqH_3IUlnVpvEx-5dgyYNULIfbmEK9QXv3XSoWvx8TCOOAFVsxId1xZHuChsEKcLFI0uymeBtZofDgXOgcZQKsrw4Ig=s2048.png"
]

export default function Home() {
  let jsConfettiRef = useRef<JSConfetti | null>(null);
  let [ddoski, setDdoski] = useState<string | undefined>(undefined);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
    setDdoski(images[Math.floor(Math.random()*images.length)])
  }, []);

  return (
    <div
      className='overflow-hidden min-h-screen text-center font-sans text-white bg-cover'
      style={{ backgroundImage: "url(/bg.webp)" }}>
      <nav className='text-xl md:text-3xl w-full drop-shadow-lg flex justify-center md:justify-between items-center mb-8 font-header text-left px-4 py-3 font-semibold'>
        {ddoski && <img src={ddoski} className="drop-shadow-lg" alt="" style={{height: '48px'}} />}
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
          Apply by 09/22 for priority!
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
          ,{" "}
          <a
            target='_blank'
            href='mailto:sponsorship@calhacks.io'
            className='underline'>
            judge
          </a>
          , or a{" "}
          <a
            target='_blank'
            href='https://x.calhacks.io/judge-interest'
            className='underline'>
            sponsor
          </a>
          !
        </span>
      </div>
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
        className='drop-shadow-xl text-3xl py-20 italic font-header cursor-pointer'
        onClick={() => {
          jsConfettiRef?.current?.addConfetti();
        }}>
        more coming soon... confetti?!
      </h1>
    </div>
  );
}
