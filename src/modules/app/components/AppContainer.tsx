import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { backgroundRadial } from '../../../shared/common/gradients';

const StyledMainApp = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const MainApp: FunctionComponent = ({ children }) => {
  return <StyledMainApp>{children}</StyledMainApp>;
};

export default MainApp;
