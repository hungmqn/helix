import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { backgroundRadial } from '../../../shared/common/gradients';

const StyledAppContainer = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const AppContainer: FunctionComponent = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default AppContainer;
