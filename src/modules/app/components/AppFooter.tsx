import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import Icon from '../../../shared/Icon';
import Typography from '../../../shared/Typography';

const StyledIconLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-left: ${({ theme }) => theme.space.small}px;
  margin-right: ${({ theme }) => theme.space.small}px;
`;

const AppFooter = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginBottom: theme.space.large,
        marginTop: theme.space.large,
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: theme.space.medium }}>
        <StyledIconLink
          href="https://github.com/hungmqn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="github" size="xxxlarge" />
        </StyledIconLink>
        <StyledIconLink
          href="https://www.linkedin.com/in/hungmqn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="linkedin" size="xxxlarge" />
        </StyledIconLink>
        <StyledIconLink href="mailto:me@hungmqn.com?subject=Hello%20there&body=Body-goes-here">
          <Icon icon="mail" size="xxxlarge" />
        </StyledIconLink>
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <Typography.Title level={5}>© Hung Nguyen</Typography.Title>
      </div>
    </div>
  );
};

export default AppFooter;
