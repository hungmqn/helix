const BASE = 16;

interface Sizes {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
  xxxlarge: number;
  xxxxlarge: number;
}

const sizes: Sizes = {
  xxsmall: BASE * 0.125, // 2
  xsmall: BASE * 0.25, // 4
  small: BASE * 0.5, // 8
  medium: BASE, // 16
  large: BASE * 2, // 32
  xlarge: BASE * 4, // 64
  xxlarge: BASE * 5, // 80
  xxxlarge: BASE * 6, // 96
  xxxxlarge: BASE * 8, // 128
};

export { sizes };
