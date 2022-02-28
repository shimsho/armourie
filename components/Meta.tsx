import React from "react";
import Head from 'next/head';

interface Props {
    title?: String
}

export const Meta: React.FC<Props> = ({ title }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="armourie turns you digital artwork into gaming weaponry, clothing and accessories, with full access to models and assets for any game."
            />
            <meta name="theme-color" content="#A9FF53" />

            <meta property="og:title" content="Armourie" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://armourie.vercel.app/" />
            <meta property="og:image" content="/banner.png" />
            <meta property="og:description" content="Armourie turns you digital artwork into gaming weaponry, clothing and accessories, with full access to models and assets for any game." />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://armourie.vercel.app/" />
            <meta property="twitter:title" content="Armourie" />
            <meta property="twitter:description" content="Armourie turns you digital artwork into gaming weaponry, clothing and accessories, with full access to models and assets for any game." />
            <meta property="twitter:image" content="/banner.png" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />

            <title>{title ? `${title} | Armourie` : 'Armourie'}</title>
        </Head>
    );
};
