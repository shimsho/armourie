import React from "react";
import Head from 'next/head';

interface Props {
    title?: String
}

export const Meta: React.FC<Props> = ({ title }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="Armourie"
            />
            <meta name="theme-color" content="#0D0C11" />
            <title>{title ? `${title} | Armourie` : 'Armourie'}</title>
        </Head>
    );
};
