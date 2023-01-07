import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '../../../shared/Typography';

import AppNavigator from './AppNavigator';

const StyledTitle = styled.div`
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

const AppHeader = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <StyledTitle>
        <Link to="/">
          <Typography.Title
            style={{
              marginTop: theme.space.xlarge,
              marginBottom: theme.space.xlarge,
            }}
          >
            Hung Nguyen
          </Typography.Title>
        </Link>
      </StyledTitle>
      <AppNavigator />
    </div>
  );
};

export default AppHeader;
