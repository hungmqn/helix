import { ReactElement, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
}

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.sizes.medium}px;
  padding: ${({ theme }) => theme.space.xlarge}px;

  transition: ${({ theme }) => theme.transitions.boxShadowCubic};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`;

const Card = ({ children, style }: CardProps): ReactElement => {
  return <StyledCard style={style}>{children}</StyledCard>;
};

export default Card;
