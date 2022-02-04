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
      </div>
      <Typography.Title level={5}>© Hung Nguyen</Typography.Title>
    </div>
  );
};

export default AppFooter;
