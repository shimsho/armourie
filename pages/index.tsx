import type { NextPage } from 'next';
import Image from "next/image";

import { motion } from 'framer-motion';

import styled from '@emotion/styled';

import { Meta } from '../components/Meta';

import { useWalletData } from '../providers/WalletProvider';
import { Gateway } from '../components/Modals/Gateway';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { walletData } = useWalletData();

  return (
    <Root>
      <Meta title={'Home'} />
      <main className="landing-container">
        <div className="landing-vector">
          <img className="vector--image" src="/assets/glow.png" alt="glow" />

          <div className="vector--right">
            <div className="chip">Home of NFT Gaming Items</div>
            <h2>
              Metaverse & NFT <span>Gaming</span> Marketplace
            </h2>

            <p>armourie turns you digital artwork into gaming weaponry , clothing and accessories, with full access to models and assets for any game.</p>

            <div className="vector-btns">
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }} className="vector--btn">Submit artwork</motion.div>
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }} className="vector--btn">View marketplace</motion.div>
            </div>
          </div>
        </div>

        <div className="landing-directions">
          <div className="direction--block" />
          <div className="direction--block" />
          <div className="direction--block" />
          <div className="direction--block" />
        </div>
      </main>

      <footer>
        <p>© 2022 Armourie. All rights reserved</p>
        <p>Built in Next.JS</p>
      </footer>
      {walletData.processing ? <Gateway /> : ''}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  @media only screen and (max-width: 1550px) { max-width: calc(100% - 50px) }
  & > .landing-container {
    margin: 25px 0;
    & > .landing-vector {
      display: flex;
      position: relative;
      padding: 63px 0;
      @media only screen and (max-width: 800px) { padding: 0; }
      & > .vector--image {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        left: -50px;
        height: 500px;
        @media only screen and (max-width: 800px) { 
          width: 100%; 
          height: auto; 
          left: 0; right: 0;
          margin: auto;
        }
        @media only screen and (max-width: 600px) { display: none; }
      }
      & > .vector--right {
        display: flex;
        flex-direction: column;
        width: 700px;
        margin: auto 0;
        margin-left: auto;
        text-align: right;
        @media only screen and (max-width: 600px) { text-align: center; }
        & > .chip {
          font-family: Poppins, Roboto;
          font-weight: 600;
          color: #A9FF53;
          background: rgb(169 255 83 / 20%);
          width: max-content;
          margin-left: auto;
          padding: 10px 40px;
          border-radius: 10px;
          @media only screen and (max-width: 600px) { width: 100%; font-size: 12px; }
        }
        & > h2 {
          font-family: Poppins, Roboto;
          font-weight: 800;
          font-size: 60px;
          color: white;
          line-height: 1;
          margin: 35px 0;
          @media only screen and (max-width: 600px) { font-size: 40px; }
          & > span {
            color: #A9FF53;
          }
        }
        & > p {
          font-family: Poppins, Roboto;
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
          opacity: 0.2;
          margin-top: 0;
        }
        & > .vector-btns {
          display: flex;
          margin-left: auto;
          margin-top: 20px;
          @media only screen and (max-width: 600px) { 
            margin-left: 0; 
            justify-content: space-between;
          }
          & > .vector--btn {
            font-family: Poppins, Roboto;
            font-weight: 600;
            font-size: 14px;
            background: #A9FF53;
            color: #0B0A0D;
            padding: 15px 0;
            width: 200px;
            border-radius: 30px;
            margin-left: 15px;
            text-align: center;
            cursor: pointer;
            transition: background 333ms ease;
            box-shadow: inset 0px 1px 0px #c0ff00;
            @media only screen and (max-width: 600px) {
              width: calc(100% / 2 - 5px); 
              font-size: 12px; 
              margin-left: 0;
            }
          }
        }
      }
    }
    & > .landing-directions {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      @media only screen and (max-width: 1000px) { flex-wrap: wrap; }
      @media only screen and (max-width: 800px) { margin-top: 50px; }
      & > .direction--block {
        width: 100%;
        max-width: calc(100% / 4 - 5px);
        height: 200px;
        background: linear-gradient(180deg, #6561AB 0%, #3F3D62 100%);
        box-shadow: inset 0px 1px 0px #B1ABFD;
        border-radius: 10px;
        opacity: 0.25;
        transition: opacity 333ms ease;
        cursor: pointer;
        @media only screen and (max-width: 1000px) { 
          max-width: calc(100% / 2 - 5px);
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 600px) { max-width: 100%; }
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  & > footer {
    display: flex;
    justify-content: space-between;
    & > p {
      font-family: Poppins, Roboto;
      font-weight: 400;
      font-size: 14px;
      color: white;
      @media only screen and (max-width: 600px) { font-size: 12px; }
    }
  }
`

export default Home
