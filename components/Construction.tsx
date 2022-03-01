import styled from '@emotion/styled';

import { motion } from 'framer-motion';

export const Construction = () => {

    return (
        <Root>
            <h2>Error <span>404</span></h2>
            <h2>This page is under construction</h2>

            <div className="row">
                <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }} className="error-btn">Go Home</motion.div>
                <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }} className="error-btn">Contact Support</motion.div>
            </div>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    position: relative;
    top: -50px;
    & > h2 {
        font-family: Poppins, Roboto;
        font-weight: 400;
        font-size: 20px;
        margin: auto;
        color: white;
        opacity: 0.2;
        & > span {
            color: #A9FF53;
            margin-left: 20px;
        }
        &:nth-child(1) {
            display: flex;
            align-items: center;
            font-size: 100px;
            font-weight: 800; 
            opacity: 1;
            height: 78px;
            margin-bottom: 50px;
        }
    }
    & > .row {
        display: flex;
        margin: 50px auto 0;
        & > .error-btn {
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
        }
    }
`