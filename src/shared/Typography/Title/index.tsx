import React, { ReactElement } from 'react';

import StyledTitle from './StyledTitle';

import { CommonProps } from '../../common';

export interface TitleProps extends CommonProps {
  children: string | ReactElement;
  fontWeight?: 'light' | 'regular' | 'semi-bold' | 'bold';
  intent?: 'main' | 'subdued';
  level?: 1 | 2 | 3 | 4 | 5;
}

const Title = ({
  level = 1,
  children,
  intent = 'main',
  fontWeight = 'semi-bold',
  id,
  className,
  style,
}: TitleProps): ReactElement => (
  <StyledTitle
    id={id}
    className={className}
    style={style}
    themeLevel={level}
    themeIntent={intent}
    themeFontWeight={fontWeight}
  >
    {children}
  </StyledTitle>
);

export default Title;
