import { ReactElement } from 'react';
import styled, { css, keyframes } from 'styled-components';
import IconList from './IconList';

import './style.css';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type IconName = typeof IconList[number];

interface IconProps {
  size?:
    | 'inherit'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  icon: IconName;
  spin?: boolean;
  style?: any;
}

const IconWrapper = styled.div`
  display: inline-flex;
  margin: 0;
  padding: 0;
  height: inherit;
`;

const StyledIcon = styled.i<{
  size:
    | 'inherit'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';
  spin?: boolean;
}>`
  display: inline-block;
  margin: 0;
  padding: 0;
  ${({ size, theme }) => {
    switch (size) {
      case 'inherit':
        return css`
          font-size: inherit;
        `;
      case 'small':
        return css`
          font-size: ${theme.fontSizes.small}px;
        `;
      case 'medium':
        return css`
          font-size: ${theme.fontSizes.medium}px;
        `;
      case 'large':
        return css`
          font-size: ${theme.fontSizes.large}px;
        `;
      case 'xlarge':
        return css`
          font-size: ${theme.fontSizes.xlarge}px;
        `;
      case 'xxlarge':
        return css`
          font-size: ${theme.fontSizes.xxlarge}px;
        `;
      case 'xxxlarge':
        return css`
          font-size: ${theme.fontSizes.xxxlarge}px;
        `;
      default:
        return css`
          font-size: inherit;
        `;
    }
  }}

  ${({ spin }) => {
    if (spin) {
      return css`
        animation: ${spinning} 1s infinite linear;
      `;
    }
  }}
`;

const Icon = ({
  size = 'inherit',
  icon,
  spin = false,
  style,
}: IconProps): ReactElement => {
  const className = `helix-icon-${icon}`;
  return (
    <IconWrapper style={style}>
      <StyledIcon className={className} size={size} spin={spin} />
    </IconWrapper>
  );
};

export default Icon;
export type { IconName };
