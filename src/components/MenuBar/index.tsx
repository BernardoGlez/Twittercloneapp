import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
  
        <Link to={`/home`}>
          <MenuButton>
            <HomeIcon />
              <span>Home</span>
          </MenuButton>
        </Link>
        
        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Lists</span>
        </MenuButton>

        <Link to={`/profile`}>
          <MenuButton className="active">
            <ProfileIcon />
            <span>Profile</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <ListIcon />
          <span>Options</span>
        </MenuButton>

        <Button>
        Tweet
      </Button>
      </Topside>
     

      <Botside>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/1836679?s=400&u=5f4fb238798b27f86d0e16adc468b4e531e8fb84&v=4"
            alt="Mauricio Tamez"
          />
        </Avatar>

        <ProfileData>
          <strong>Mauricio Tamez</strong>
          <span>@Maurice</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
