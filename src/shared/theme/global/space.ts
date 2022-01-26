const BASE = 16;

interface Space {
  space1: number;
  space2: number;
  space3: number;
  space4: number;
  space5: number;
  space6: number;
  space7: number;
  space8: number;
  space9: number;
  space10: number;
  space11: number;
  space12: number;
  space13: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}

const space: Space = {
  space1: BASE * 0.125, // 2
  space2: BASE * 0.25, // 4
  space3: BASE * 0.5, // 8
  space4: BASE * 0.75, // 12
  space5: BASE * 1, // 16
  space6: BASE * 1.5, // 24
  space7: BASE * 2, // 32
  space8: BASE * 2.5, // 40
  space9: BASE * 3, // 48
  space10: BASE * 4, // 64
  space11: BASE * 5, // 80
  space12: BASE * 6, // 96
  space13: BASE * 10, // 160
  small: BASE * 0.25, // 4 - space2
  medium: BASE * 0.5, // 8 - space3
  large: BASE * 1, // 16 - space5
  xlarge: BASE * 1.5, // 24 - space6
  xxlarge: BASE * 3, // 48 - space9
};

export { space };
