const BASE = 16;

interface FontSizes {
  size1: number;
  size2: number;
  size3: number;
  size4: number;
  size5: number;
  size6: number;
  size7: number;
  size8: number;
  size9: number;
  size10: number;
  size11: number;
  size12: number;
  size13: number;
  size14: number;
  size15: number;
  size16: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
  xxxlarge: number;
  xxxxlarge: number;
}

interface FontWeights {
  light: number;
  regular: number;
  semiBold: number;
  bold: number;
}

interface LineHeights {
  size1: number;
  size2: number;
  size3: number;
  size4: number;
  size5: number;
  size6: number;
  size7: number;
  size8: number;
  size9: number;
  size10: number;
  size11: number;
  size12: number;
  size13: number;
  size14: number;
  size15: number;
  size16: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
  xxxlarge: number;
  xxxxlarge: number;
}

const fontSizes: FontSizes = {
  size1: BASE * 0.75, // 12
  size2: BASE * 0.875, // 14
  size3: BASE * 1, // 16
  size4: BASE * 1.125, // 18
  size5: BASE * 1.25, // 20
  size6: BASE * 1.5, // 24
  size7: BASE * 2, // 32
  size8: BASE * 2.25, // 36
  size9: BASE * 2.625, // 42
  size10: BASE * 3, // 54
  size11: BASE * 3.375, // 54
  size12: BASE * 3.75, // 60
  size13: BASE * 4.25, // 68
  size14: BASE * 4.75, // 76
  size15: BASE * 5.25, // 84
  size16: BASE * 5.75, // 92
  xsmall: BASE * 0.625, // 10 - super small - use in special case
  small: BASE * 0.75, // 12 - size1
  medium: BASE * 0.875, // 14 - size2
  large: BASE * 1, // 16 - size3
  xlarge: BASE * 1.125, // 18 - size4
  xxlarge: BASE * 1.25, // 20 - size5
  xxxlarge: BASE * 1.5, // 24 - size6
  xxxxlarge: BASE * 2, // 32 - size7
};

const fontWeights: FontWeights = {
  light: 200,
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const lineHeights: LineHeights = { ...fontSizes };
Object.keys(lineHeights).forEach((key) => {
  lineHeights[key as keyof typeof fontSizes] =
    lineHeights[key as keyof typeof fontSizes] + 8;
});

export { fontSizes, fontWeights, lineHeights };

export type { FontSizes, FontWeights, LineHeights };
