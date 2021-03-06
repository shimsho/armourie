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
        processing: false,
        wallet: ""
    },
    connect: getAccount
});

const WalletProvider: React.FC = ({ children }) => {
    const [walletData, setWalletData] = React.useState({ processing: false, wallet: "" } as WalletData);

    async function connect() {
        if (walletData.wallet.length !== 42) {
            setWalletData({ processing: true, wallet: "" });
            const response = await getAccount();

            if (response.length === 42) setWalletData({ processing: false, wallet: response });
            else setWalletData({ processing: false, wallet: "" });
        } else return;
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