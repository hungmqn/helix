import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import ErrorPage from './ErrorPage';

const StyledAppBody = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
`;

const AppBody: FunctionComponent = () => {
  return (
    <StyledAppBody>
      <Routes>
        {ROUTES.map((route) => {
          const Component = route.component;
          return Component ? (
            <Route key={route.name} path={route.path} element={<Component />} />
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
    </StyledAppBody>
  );
};

export default AppBody;
