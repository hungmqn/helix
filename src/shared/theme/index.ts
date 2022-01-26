import { colors } from './global/colors';
import { sizes } from './global/sizes';
import { space } from './global/space';
import { shadows } from './global/shadows';
import { transitions } from './global/transitions';
import { fontSizes, fontWeights, lineHeights } from './global/typograpy';

interface ThemeType {
  colors: typeof colors;
  shadows: typeof shadows;
  space: typeof space;
  sizes: typeof sizes;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  transitions: typeof transitions;
}

const theme: ThemeType = {
  colors,
  shadows,
  sizes,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  transitions,
};

export type { ThemeType };

export default theme;
