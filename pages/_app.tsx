import '../styles/globals.css'
import { useState } from 'react'
import NextNProgress from "nextjs-progressbar";

import type { AppProps } from 'next/app'

import { Navigation } from '../components/Navigation/Index';
import { Gateway } from '../components/Modals/Gateway';

import { WalletProvider } from "../providers/WalletProvider";
import { MiscProvider } from "../providers/MiscProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MiscProvider>
      <WalletProvider>
        <NextNProgress color="#A9FF53" height={2} stopDelayMs={50} />
        <div className="container">
          <Navigation />
          <Component {...pageProps} />
        </div>

        <footer>
          <p>© 2022 Armourie. All rights reserved</p>
          <p>Built in Next.JS</p>
        </footer>

        <Gateway />
      </WalletProvider>
    </MiscProvider>
  )
}

export default MyApp
