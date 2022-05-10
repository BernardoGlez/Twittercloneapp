import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
      <GlobalStyles />
    </Container>
  );
};

export default Profile;
