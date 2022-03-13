import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { backgroundRadial } from '../../../shared/common/gradients';

import { ROUTES } from './constants';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const StyledAppContainer = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const isRenderedWithoutHeaderAndFooter = (pathname: string) =>
  ROUTES.find((route) => pathname === route.path)?.renderWithoutHeaderAndFooter;

const AppContainer: FunctionComponent = () => {
  const currentRoute = useLocation();

  return isRenderedWithoutHeaderAndFooter(currentRoute.pathname) ? (
    <AppBody />
  ) : (
    <StyledAppContainer>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </StyledAppContainer>
  );
};

export default AppContainer;
