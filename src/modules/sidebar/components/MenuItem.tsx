import { ReactElement } from 'react';
import styled, { css, useTheme } from 'styled-components';

import Icon, { IconName } from '../../../shared/Icon';

const StyledMenuItem = styled.div<{
  active: boolean;
}>`
  margin-bottom: ${({ theme }) => theme.space.medium}px;
  padding: ${({ theme }) => theme.space.large}px
    ${({ theme }) => theme.space.xlarge}px;
  border-radius: ${({ theme }) => theme.sizes.xxxlarge}px;
  min-width: ${({ theme }) => theme.sizes.xxxxlarge}px;
  background: ${({ theme }) => theme.colors.backgroundShade};

  display: flex;
  align-items: center;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.boxShadowCubic};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: ${({ theme }) => theme.shadows.medium};
    `}
`;

const MenuItem = ({
  icon = 'minus',
  text = '',
  active = false,
  onClick,
}: {
  icon: IconName;
  text: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}): ReactElement => {
  const theme = useTheme();

  return (
    <StyledMenuItem active={active} onClick={onClick}>
      <Icon
        size="xxlarge"
        icon={icon}
        style={{
          marginRight: theme.space.medium,
          color: theme.colors.primaryText,
        }}
      />
      <div>{text}</div>
    </StyledMenuItem>
  );
};

export default MenuItem;
