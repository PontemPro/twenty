import { COLOR_DARK } from '@ui/theme/constants/ColorsDark';
import { BORDER_COMMON } from './BorderCommon';
import { GRAY_SCALE_DARK } from './GrayScaleDark';
import { TRANSPARENT_COLORS_DARK } from './TransparentColorsDark';

export const BORDER_DARK = {
  color: {
    strong: GRAY_SCALE_DARK.gray6,
    medium: GRAY_SCALE_DARK.gray5,
    light: GRAY_SCALE_DARK.gray4,
    secondaryInverted: GRAY_SCALE_DARK.gray11,
    inverted: GRAY_SCALE_DARK.gray12,
    danger: COLOR_DARK.red5,
    blue: 'color(display-p3 0.505 0.278 0.223)',
    transparentStrong: TRANSPARENT_COLORS_DARK.gray4,
  },
  ...BORDER_COMMON,
};
