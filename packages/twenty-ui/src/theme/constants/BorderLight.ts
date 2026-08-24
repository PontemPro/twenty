import { COLOR_LIGHT } from '@ui/theme/constants/ColorsLight';
import { BORDER_COMMON } from './BorderCommon';
import { GRAY_SCALE_LIGHT } from './GrayScaleLight';
import { TRANSPARENT_COLORS_LIGHT } from './TransparentColorsLight';
import { PONTEM_CORAL_BRAND } from '@ui/theme/constants/PontemColors';

export const BORDER_LIGHT = {
  color: {
    strong: GRAY_SCALE_LIGHT.gray6,
    medium: GRAY_SCALE_LIGHT.gray5,
    light: GRAY_SCALE_LIGHT.gray4,
    secondaryInverted: GRAY_SCALE_LIGHT.gray11,
    inverted: GRAY_SCALE_LIGHT.gray12,
    danger: COLOR_LIGHT.red5,
    blue: PONTEM_CORAL_BRAND,
    transparentStrong: TRANSPARENT_COLORS_LIGHT.gray4,
  },
  ...BORDER_COMMON,
};
