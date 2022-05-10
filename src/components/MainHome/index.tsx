import React from 'react';

import Feed from '../Feed';

import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

//import data from '../../data.json';

const MainHome: React.FC = () => {
  return (
    <Container>

      <Feed />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default MainHome;
