import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Bernardo" nickname="@bernardo" />,
              <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,
              <FollowSuggestion name="SpaceX" nickname="@SpaceX" />,
            ]}
          />

          <List
            title="What’s happening"
            elements={[
              <News
                header="News · Trading"
                topic="Latest Coronavirus Tweets from Canadian authorities"
                link="https://www.orionsarm.com/im_store/baselines.jpg"
              />,
              <News
                header="Entertainment · Trading"
                topic="Vancouver's iconic Gastown Steam Clock has glass smashed up"
                link="https://www.orionsarm.com/im_store/baselines.jpg"
              />,
              <News header="Canada · 3 hours ago" topic="Now more than ever, owning a house is not a retirement plan" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
