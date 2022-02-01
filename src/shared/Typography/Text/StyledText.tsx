import { LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface StyledProps {
  themeFontSize: 10 | 12 | 14 | 16;
  themeFontWeight: 'light' | 'regular' | 'semi-bold' | 'bold';
  themeIntent:
    | 'main'
    | 'body'
    | 'subdued'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'error'
    | 'white';
}

const textCss = css<StyledProps>`
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
      case 'error':
        return css`
          color: ${theme.colors.dangerText};
        `;
    }
  }}

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
  }}

  ${({ themeFontSize, theme }) => {
    switch (themeFontSize) {
      case 10:
        return css`
          font-size: ${theme.fontSizes.xsmall}px;
          line-height: ${theme.lineHeights.xsmall}px;
        `;
      case 12:
        return css`
          font-size: ${theme.fontSizes.small}px;
          line-height: ${theme.lineHeights.small}px;
        `;
      case 14:
        return css`
          font-size: ${theme.fontSizes.medium}px;
          line-height: ${theme.lineHeights.medium}px;
        `;
      case 16:
        return css`
          font-size: ${theme.fontSizes.large}px;
          line-height: ${theme.lineHeights.large}px;
        `;
    }
  }}
`;

/**
 * Support inline elements:
 * <strong>
 * <b>
 * <label>
 * <a>
 * <span>
 * <br>
 * <em>
 * <i>
 */
const nestedInlineStyle = css`
  > strong,
  > b,
  > label {
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }

  > em,
  > i,
  > span,
  > br {
    margin: 0;
    padding: 0;
  }

  > a {
    margin: 0;
    padding: 0;

    text-decoration: none;

    color: ${({ theme }) => theme.colors.linkText};
    transition: ${({ theme }) => theme.transitions.colorCubic};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.linkText};
    }
  }
`;

const StyledParagraphBlock = styled.p<StyledProps>`
  ${textCss};
  ${nestedInlineStyle};
`;

const StyledDivBlock = styled.div<StyledProps>`
  ${textCss};
  ${nestedInlineStyle};
  > p {
    ${textCss};
    ${nestedInlineStyle};
  }

  > ul {
    margin: 0;
    padding: 0;
    padding-inline-start: ${({ theme }) => theme.space.xlarge}px;

    > li {
      margin: 0;
      padding: 0;
    }
  }
`;

const StyledSpanInline = styled.span<StyledProps>`
  ${textCss};
  ${nestedInlineStyle};
`;

const StyledLabelInline = styled.label<
  StyledProps & LabelHTMLAttributes<HTMLLabelElement>
>`
  ${textCss};
  ${nestedInlineStyle};
`;

export {
  StyledParagraphBlock,
  StyledDivBlock,
  StyledSpanInline,
  StyledLabelInline,
};
