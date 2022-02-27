import * as React from "react";

import { MiscData } from './types';

type MiscContextProps = {
    miscData: MiscData,
}

export const MiscContext = React.createContext<MiscContextProps>({
    miscData: {
        bitcoin: 0,
        ethereum: 0,
        solana: 0,
        light: false,
        currency: "USD"
    }
});

const MiscProvider: React.FC = ({ children }) => {
    const [miscData, setMiscData] = React.useState({
        bitcoin: 0,
        ethereum: 0,
        solana: 0,
        light: false,
        currency: "USD"
    } as MiscData);

    React.useEffect(() => {
        const getPrices = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=USD');
                const prices = await res.json();

                setMiscData({
                    ...miscData,
                    bitcoin: prices.bitcoin.usd,
                    ethereum: prices.ethereum.usd,
                    solana: prices.solana.usd
                });
            } catch (error) {
                return;
            }
        }

        getPrices();
    }, []);

    return (
        <MiscContext.Provider value={{ miscData: miscData }}>
            {children}
        </MiscContext.Provider>
    )
}

const useMiscData = () => {
    const miscContext = React.useContext(MiscContext);

    if (!miscContext) throw Error("PriceContext used outside of provider");

    return miscContext;
}

export { MiscProvider, useMiscData };