import { ReactElement, ReactNode } from 'react';

import {
  StyledParagraphBlock,
  StyledDivBlock,
  StyledSpanInline,
  StyledLabelInline,
} from './StyledText';
import { CommonProps } from '../../common';

export interface TextProps extends CommonProps {
  children: ReactNode;
  fontSize?: 10 | 12 | 14 | 16;
  fontWeight?: 'light' | 'regular' | 'semi-bold' | 'bold';
  htmlFor?: string;
  intent?:
    | 'main'
    | 'body'
    | 'subdued'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'error'
    | 'white';
  tagName?: 'div' | 'p' | 'span' | 'label';
}

const Text = ({
  children,
  intent = 'main',
  fontSize = 14,
  fontWeight = 'regular',
  tagName = 'p',
  htmlFor,
  id,
  className,
  style,
}: TextProps): ReactElement => {
  const commonTextProps = {
    children,
    themeIntent: intent,
    themeFontSize: fontSize,
    themeFontWeight: fontWeight,
    as: tagName,
    htmlFor,
    id,
    className,
    style,
  };

  switch (tagName) {
    case 'div':
      return <StyledDivBlock {...commonTextProps} />;
    case 'p':
      return <StyledParagraphBlock {...commonTextProps} />;
    case 'span':
      return <StyledSpanInline {...commonTextProps} />;
    case 'label':
      return <StyledLabelInline {...commonTextProps} htmlFor={htmlFor} />;
  }
};

export default Text;
