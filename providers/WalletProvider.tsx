import * as React from "react";
import Web3 from "web3";

import { WalletData } from './types';

declare let window: any;

type WalletContextProps = {
    walletData: WalletData,
    connect: (event: React.MouseEvent<HTMLElement>) => void
}

const getAccount = async () => {
    const { ethereum } = window;
    try {
        window.web3 = new Web3(ethereum);
        if (ethereum) {
            await ethereum.enable();

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            return accounts[0];
        }
    } catch (error) {
        return false;
    }
}

export const WalletContext = React.createContext<WalletContextProps>({
    walletData: {
        wallet: ""
    },
    connect: getAccount
});

const WalletProvider: React.FC = ({ children }) => {
    const [walletData, setWalletData] = React.useState({ wallet: "" } as WalletData);

    async function connect() {
        const response = await getAccount();

        setWalletData({ wallet: response });
    }

    return (
        <WalletContext.Provider value={
            {
                walletData: walletData,
                connect: connect
            }
        }>
            {children}
        </WalletContext.Provider>
    )
}

const useWalletData = () => {
    const walletContext = React.useContext(WalletContext);

    if (!walletContext) throw Error("WalletContext used outside of provider");

    return walletContext;
}

export { WalletProvider, useWalletData };