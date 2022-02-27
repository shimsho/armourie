import styled from '@emotion/styled'

import React, { useEffect } from "react";
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
                <Image src="/assets/logo.svg" width={174} height={40} />

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
                transition: 333ms ease;
                &:hover {
                    color: #A9FF53;
                    opacity: 1;
                }
            }
        }
    }
`