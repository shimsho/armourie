import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { Meta } from '@/components/Meta';
import { Construction } from '@/components/Construction';

const About: NextPage = () => {
    return (
        <Root>
            <Meta title={'About'} />
            <Construction />
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1480px;
    min-height: calc(100vh - 134px);
    margin: 0 auto;
    @media only screen and (max-width: 1550px) { max-width: calc(100% - 50px) }
`

export default About