import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/1836679?s=400&u=5f4fb238798b27f86d0e16adc468b4e531e8fb84&v=4"
            alt="Mauricio Tamez"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton>Set up profile</EditButton>

        <h1>Mauricio Tamez</h1>
        <h2>@Maurice</h2>

        <p>
          Developer and designer based in CA.
        </p>

        <ul>
          <li>
            <LocationIcon />
            Vancouver BC, Canada.
          </li>
        </ul>

        <Followage>
          <span>
            <strong>1 </strong>
            Following
          </span>
          <span>
            <strong>1M </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
