import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { Meta } from '../components/Meta';

import Skeleton from '@mui/material/Skeleton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Marketplace: NextPage = () => {
    return (
        <Root>
            <Meta title={'Marketplace'} />

            <div className="marketplace-container">
                <div className="marketplace-content">
                    <div className="marketplace-actions">
                        <div className="web-location">
                            <p>armourie</p>
                            <ChevronRightIcon />
                            <p>marketplace</p>
                        </div>
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="marketplace-grid">
                        {Array(20).fill('t').map((data, i) => (
                            <Skeleton variant="rectangular" animation="wave" key={i} className="item" />
                        ))}
                    </div>
                </div>
                <div className="marketplace-filters">

                </div>
            </div>
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1480px;
    margin: 0 auto 50px;
    @media only screen and (max-width: 1550px) { max-width: calc(100% - 50px) }
    & > .marketplace-container {
        display: flex;
        width: 100%;
        & > .marketplace-content {
            width: 100%;
            max-width: calc(100% - 400px);
            & > .marketplace-actions {
                display: flex;
                justify-content: space-between;
                & > .web-location {
                    display: flex;
                    & > .MuiSvgIcon-root {
                        color: white;
                        opacity: 0.4;
                        font-size: 16px;
                        margin: auto 5px;
                    }
                    & > p {
                        font-family: Poppins, Roboto;
                        font-weight: 400;
                        font-size: 14px;
                        color: #fff;
                        &:nth-child(1) { opacity: 0.4 }
                    }
                }
                & > input {
                    font-family: Poppins, Roboto;
                    font-weight: 400;
                    font-size: 12px;
                    padding: 5px 15px;
                    background: #212030;
                    border: none;
                    border-radius: 5px;
                    width: 400px;
                    color: white;
                    height: 35px;
                    margin: auto 0;
                    &:focus { outline: none }
                }
            }
            & > .marketplace-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill,minmax(215px,1fr));
                grid-column-gap: 0.425rem;
                grid-row-gap: 0.425rem;
                width: 100%;
                height: max-content;
                margin-top: 20px;
                & > .item {
                    width: 100%;
                    height: 300px;
                    background: #1C1A2C;
                    border-radius: 5px;
                    &::after {
                        background: linear-gradient(90deg, transparent, rgb(141 141 141 / 4%), transparent);
                    }
                }
            }
        }
        & > .marketplace-filters {
            width: 375px;
            height: 800px;
            background: #1C1A2C;
            margin-left: auto;
            border-radius: 5px;
        }
    }
`

export default Marketplace