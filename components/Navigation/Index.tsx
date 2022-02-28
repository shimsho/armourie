import styled from '@emotion/styled'

import React from "react";
import Image from "next/image";

import { Connect } from './Connect'

import { useMiscData } from '../../providers/MiscProvider';
import { parsePrice } from '../../helpers/index';

export const Navigation = () => {
    const { miscData } = useMiscData();

    return (
        <Root>
            <div className="navigation-top">
                <div className="navigation-top--btn">AUD</div>
                <div className="navigation-top--btn">LIGHT MODE</div>

                <div className="spacer" />

                <div className="navigation-top--btn">BTC <span className="price">${parsePrice(miscData.bitcoin)}</span></div>
                <div className="navigation-top--btn">ETH <span className="price">${parsePrice(miscData.ethereum)}</span></div>
                <div className="navigation-top--btn">SOL <span className="price">${parsePrice(miscData.solana)}</span></div>
            </div>
            <header>
                <Image className="icon" src="/assets/icon.svg" alt="icon" width={46} height={46} />
                <p>armourie</p>

                <div className="navigation-right">
                    <div className="navigation-right--btn">explore</div>
                    <div className="navigation-right--btn">gallery</div>
                    <div className="navigation-right--btn">marketplace</div>
                    <div className="navigation-right--btn">workshop</div>
                    <div className="navigation-right--btn">about</div>

                    <Connect />
                </div>
            </header>
        </Root>
    );
};

const Root = styled.div`
    & > .navigation-top {
        display: flex;
        margin: 10px 0;
        @media only screen and (max-width: 800px) { display: none; }
        & > .navigation-top--btn {
            font-family: Poppins, Roboto;
            font-weight: 400;
            font-size: 12px;
            color: #FFFFFF;
            background: rgba(255,255,255,0.05);
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 8px;
            white-space: nowrap;
            &:last-child { margin-right: 0 }
            & > .price {
                font-weight: 600;
                color: #A9FF53;
            }
        }
    }   
    & > header {
        display: flex;
        margin: 20px 0;
        & > p {
            font-family: Poppins, Roboto;
            font-weight: 600;
            font-size: 26px;
            margin: auto 0 auto 20px;
            color: white;
            @media only screen and (max-width: 600px) { display: none }
        }
        & > .navigation-right {
            display: flex;
            margin: auto 0 auto auto;
            & > .navigation-right--btn {
                font-family: Poppins, Roboto;
                font-weight: 600;
                font-size: 14px;
                color: #FFFFFF;
                opacity: 0.4;
                margin: auto 50px auto 0;
                cursor: pointer;
                transition: color 333ms ease, opacity 333ms ease;
                @media only screen and (max-width: 1000px) { margin: auto 20px auto 0 }
                @media only screen and (max-width: 800px) { display: none }
                &:hover {
                    color: #A9FF53;
                    opacity: 1;
                }
            }
        }
    }
`