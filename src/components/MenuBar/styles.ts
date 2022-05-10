import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  BookmarkBorder,
  Hashtag,
  ListAlt,
  Person,
  KeyboardArrowDown,
  Twitter,
} from '../../styles/Icons';

export const Container = styled.div`

`;

export const Topside = styled.div`

`;

export const Logo = styled(Twitter)`

`;

export const MenuButton = styled.button`

`;

const iconCSS = css`

`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const ExploreIcon = styled(Hashtag)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(BookmarkBorder)`
  ${iconCSS}
`;

export const ListIcon = styled(ListAlt)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const Botside = styled.div`

`;

export const Avatar = styled.div`

`;

export const ProfileData = styled.div`

`;

export const ExitIcon = styled(KeyboardArrowDown)`

`;
