import 'styled-components';

import { ThemeType } from './shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
