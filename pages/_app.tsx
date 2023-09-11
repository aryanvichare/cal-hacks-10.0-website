import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export const metadata: Metadata = {
  title: 'CalHacks 10.0',
  description: `We're back.`,
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />
        <title>Cal Hacks 10.0</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
