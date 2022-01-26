import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { backgroundRadial } from '../../../shared/common/gradients';

const StyledMainApp = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const MainApp: FunctionComponent = ({ children }) => {
  return <StyledMainApp>{children}</StyledMainApp>;
};

export default MainApp;
