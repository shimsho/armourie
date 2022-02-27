import '../styles/globals.css'
import { useState } from 'react'

import type { AppProps } from 'next/app'

import { WalletProvider } from "../providers/WalletProvider";
import { MiscProvider } from "../providers/MiscProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MiscProvider>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </MiscProvider>
  )
}

export default MyApp
