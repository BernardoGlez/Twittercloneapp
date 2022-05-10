import React from 'react';

import MenuBar from '../MenuBar';
import MainHome from '../MainHome';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainHome />
        <SideBar />
      </Wrapper>
      <GlobalStyles />
    </Container>
  );
};

export default Home;
