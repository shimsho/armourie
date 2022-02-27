import type { NextPage } from 'next';

import styled from '@emotion/styled';

import { Meta } from '../components/Meta';
import { Navigation } from '../components/Navigation/Index';

const Home: NextPage = () => {
  return (
    <Root>
      <Meta />
      <Navigation />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
`

export default Home
