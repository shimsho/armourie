import '../styles/globals.css'
import { useState } from 'react'
import NextNProgress from "nextjs-progressbar";

import type { AppProps } from 'next/app'

import { Navigation } from '../components/Navigation/Index';

import { WalletProvider } from "../providers/WalletProvider";
import { MiscProvider } from "../providers/MiscProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MiscProvider>
      <WalletProvider>
        <NextNProgress color="#A9FF53" height={2} stopDelayMs={50} />
        <Navigation />

        <Component {...pageProps} />
      </WalletProvider>
    </MiscProvider>
  )
}

export default MyApp
