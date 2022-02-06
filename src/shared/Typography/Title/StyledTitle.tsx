import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { CommonProps } from '../../common';

export const HEADINGS = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
};

const Heading = ({
  themeLevel,
  children,
  style,
}: {
  children: string | ReactElement;
  themeLevel: 1 | 2 | 3 | 4 | 5;
} & CommonProps): ReactElement => {
  return React.createElement(HEADINGS[themeLevel], { style }, children);
};

const StyledTitle = styled(Heading)<{
  themeFontWeight: 'light' | 'regular' | 'semi-bold' | 'bold';
  themeIntent: 'main' | 'subdued';
  themeLevel: 1 | 2 | 3 | 4 | 5;
}>`
  margin: 0;
  padding: 0;

  ${({ themeIntent, theme }) => {
    switch (themeIntent) {
      case 'main':
        return css`
          color: ${theme.colors.primaryText};
        `;
      case 'subdued':
        return css`
          color: ${theme.colors.secondaryText};
        `;
    }
  }};

  ${({ themeFontWeight, theme }) => {
    switch (themeFontWeight) {
      case 'light':
        return css`
          font-weight: ${theme.fontWeights.light};
        `;
      case 'regular':
        return css`
          font-weight: ${theme.fontWeights.regular};
        `;
      case 'semi-bold':
        return css`
          font-weight: ${theme.fontWeights.semiBold};
        `;
      case 'bold':
        return css`
          font-weight: ${theme.fontWeights.bold};
        `;
    }
  }};

  ${({ themeLevel, theme }) => {
    switch (themeLevel) {
      case 1:
        return css`
          font-size: ${theme.fontSizes.xxxxlarge}px;
          line-height: ${theme.lineHeights.xxxxlarge}px;
        `;
      case 2:
        return css`
          font-size: ${theme.fontSizes.xxxxlarge}px;
          line-height: ${theme.lineHeights.xxxxlarge}px;
        `;
      case 3:
        return css`
          font-size: ${theme.fontSizes.xxxlarge}px;
          line-height: ${theme.lineHeights.xxxlarge}px;
        `;
      case 4:
        return css`
          font-size: ${theme.fontSizes.xxlarge}px;
          line-height: ${theme.lineHeights.xxlarge}px;
        `;
      case 5:
        return css`
          font-size: ${theme.fontSizes.xlarge}px;
          line-height: ${theme.lineHeights.xlarge}px;
        `;
    }
  }};
`;

export default StyledTitle;
