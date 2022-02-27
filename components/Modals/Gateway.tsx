import React from "react";
import styled from "@emotion/styled";

import CircularProgress from '@mui/material/CircularProgress';

export const Gateway = () => {
    return (
        <Root>
            <div className="wrapper-modal">
                <div className="corner" />
                <div className="corner" />
                <div className="corner" />
                <div className="corner" />

                <div className="modal">
                    <CircularProgress />
                    <p>Connecting...</p>
                </div>
            </div>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.25);
    & > .wrapper-modal {
        border: 1px solid rgba(255,255,255,0.025);
        padding: 10px;
        margin: auto;
        position: relative;
        & > .corner {
            position: absolute;
            border-top: 1px solid #a9ff53;
            border-left: 1px solid #a9ff53;
            top: 0;
            left: 0;
            width: 10px;
            height: 10px;
            &:nth-child(2) {
                top: unset;
                bottom: 0;
                transform: rotate(-90deg);
            }
            &:nth-child(3) {
                left: unset;
                right: 0;
                transform: rotate(90deg);
            }
            &:nth-child(4) {
                top: unset;
                left: unset;
                bottom: 0;
                right: 0;
                transform: rotate(180deg);
            }
        }
        & > .modal {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 300px;
            height: 400px;
            background: #100f15;
            & > .MuiCircularProgress-root {
                color: #a9ff53;
            }
            & > p {
                font-family: Poppins, Roboto;
                color: white;
            }
        }
    }
`