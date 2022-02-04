import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Icon, { IconName } from '../../../shared/Icon';
import Typography from '../../../shared/Typography';

import { ROUTES } from './constants';

const StyledNavigation = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  > li {
    display: inline-block;
    min-width: ${({ theme }) => theme.sizes.xxlarge}px;
    margin: ${({ theme }) => theme.space.medium}px
      ${({ theme }) => theme.space.small}px;
  }
`;

const StyledTopic = styled.li<{ match: boolean }>`
  padding: ${({ theme }) => theme.space.small}px;
  border-radius: ${({ theme }) => theme.space.medium}px;
  transition: ${({ theme }) => theme.transitions.allCubic};

  ${({ match, theme }) =>
    match
      ? css`
          background: ${theme.colors.white};
          > a {
            text-decoration: none;
            > div {
              cursor: auto;
              color: ${theme.colors.backgroundHard};
            }
          }
        `
      : css`
          > a {
            text-decoration: none;
            > div {
              cursor: pointer;
              color: ${theme.colors.primaryText};
            }
          }
        `}
`;

interface TopicProps {
  to: string;
  title: string;
  icon: IconName;
}

const Topic = ({ to, title, icon }: TopicProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledTopic match={!!match}>
      <Link to={to}>
        <Typography.Text tagName="div">
          <Icon icon={icon} size="xxlarge" />
          <Typography.Text
            tagName="p"
            style={{ color: 'inherit', textTransform: 'uppercase' }}
            fontWeight="semi-bold"
          >
            {title}
          </Typography.Text>
        </Typography.Text>
      </Link>
    </StyledTopic>
  );
};

const AppNavigator = () => {
  return (
    <StyledNavigation>
      {ROUTES.map(
        (route) =>
          route.showInNavigator && (
            <Topic
              key={route.name}
              icon={route.icon}
              to={route.path}
              title={route.title}
            />
          )
      )}
    </StyledNavigation>
  );
};

export default AppNavigator;
