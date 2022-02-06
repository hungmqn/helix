import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import ErrorPage from './ErrorPage';

const StyledAppBody = styled.div`
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

// $sm-width: 480px;
// $md-width: 768px;
// $lg-width: 1024px;
const StyledBody = styled.div`
  padding: 0 ${({ theme }) => theme.space.large}px;
  /** small device */
  @media (max-width: 479px) {
    width: 90%;
  }
  /** medium device */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }
  /** large device */
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;

const AppBody: FunctionComponent = () => {
  return (
    <StyledAppBody>
      <StyledBody>
        <Routes>
          {ROUTES.map((route) => {
            const Component = route.component;
            return Component ? (
              <Route
                key={route.name}
                path={route.path}
                element={<Component />}
              />
            ) : (
              <Route
                key={route.name}
                path={route.path}
                element={<ErrorPage code={404} />}
              />
            );
          })}
          <Route path="*" element={<ErrorPage code={404} />} />
        </Routes>
      </StyledBody>
    </StyledAppBody>
  );
};

export default AppBody;
