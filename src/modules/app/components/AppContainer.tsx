import { ElementType, FunctionComponent } from 'react';
import styled from 'styled-components';
import { useLocation, Route, Routes } from 'react-router-dom';

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

const getCurrentRouteConfig = (pathname: string) =>
  ROUTES.find((route) => pathname === route.path);

const AppContainer: FunctionComponent = () => {
  const currentRoute = useLocation();
  const currentRouteConfig = getCurrentRouteConfig(currentRoute.pathname);
  if (currentRouteConfig && currentRouteConfig.renderWithoutHeaderAndFooter) {
    const Component = currentRouteConfig.component as ElementType;
    return (
      <Routes>
        <Route path={currentRouteConfig.path} element={<Component />} />
      </Routes>
    );
  }

  return (
    <StyledAppContainer>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </StyledAppContainer>
  );
};

export default AppContainer;
