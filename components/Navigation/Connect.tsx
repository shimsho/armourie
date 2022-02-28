import { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import InputIcon from '@mui/icons-material/Input'
import { useWalletData } from '../../providers/WalletProvider';

export const Connect = () => {
    const { connect, walletData } = useWalletData();

    return (
        <Root onClick={connect} whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}>
            <p>
                {walletData.wallet
                    ? "connected"
                    : "connect"
                }
            </p>
            <div className="connect-icon">
                <InputIcon />
            </div>
        </Root>
    );
};

const Root = styled(motion.div)`
    display: flex;
    font-family: Poppins, Roboto;
    font-weight: 600;
    font-size: 14px;
    background: #A9FF53;
    box-shadow: inset 0px 1px 0px #c0ff00;
    padding: 7px;
    border-radius: 5px;
    cursor: pointer;
    & > p { margin: auto 20px auto }
    & > .connect-icon {
        display: flex;
        background: rgba(0,0,0,0.2);
        padding: 6px;
        border-radius: 4px;
        & > .MuiSvgIcon-root {
            margin: auto;
            font-size: 20px;
        }
    }
`