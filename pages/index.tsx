import type { NextPage } from 'next';

import styled from '@emotion/styled';

import { Meta } from '../components/Meta';
import { Navigation } from '../components/Navigation/Index';

import { useWalletData } from '../providers/WalletProvider';
import { Gateway } from '../components/Modals/Gateway';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { walletData } = useWalletData();

  return (
    <Root>
      <Meta />
      <Navigation />

      {walletData.processing ? <Gateway /> : ''}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  & > .test {
    color: white;
    border: 1px solid white;
  }
`

export default Home
