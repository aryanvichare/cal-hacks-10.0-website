import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CalHacks 10.0",
  description: `We're back.`,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-HPQX4S24CW'
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HPQX4S24CW');
        `}
      </Script>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Alata&display=swap'
          rel='stylesheet'
        />
        <title>Cal Hacks 10.0</title>
        <meta
          name='description'
          content="Cal Hacks is the world's largest collegiate hackathon hosted at UC Berkeley. Together we'll assemble in SF for a weekend of hacking, friendship, and crazy ideas."
        />

        <meta key='og_locale' property='og:locale' content='en_US' />
        <meta key='og_type' property='og:type' content='website' />
        <meta property='og:title' content='Cal Hacks' />
        <meta
          property='og:description'
          content="Cal Hacks is the world's largest collegiate hackathon hosted at UC Berkeley. Together we'll assemble in SF for a weekend of hacking, friendship, and crazy ideas."
        />
        <meta
          property='og:image'
          content='https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/og-image.jpg'
        />
        <meta property='og:url' content='https://calhacks.io' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Cal Hacks' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@calhacks' />
        <meta name='twitter:creator' content='@calhacks' />
        <meta name='twitter:title' content='Cal Hacks' />
        <meta
          name='twitter:description'
          content="Cal Hacks is the world's largest collegiate hackathon hosted at UC Berkeley. Together we'll assemble in SF for a weekend of hacking, friendship, and crazy ideas."
        />
        <meta
          name='twitter:image'
          content='https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/og-image.jpg'
        />
        <meta property='twitter:image:alt' content='Cal Hacks' />

        <link
          rel='shortcut icon'
          href='https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/favicon.ico'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
