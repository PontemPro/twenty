import * as RadixColors from '@radix-ui/colors';

import { COLOR_LIGHT } from '@ui/theme/constants/ColorsLight';
import { GRAY_SCALE_LIGHT } from './GrayScaleLight';
import { TRANSPARENT_COLORS_LIGHT } from './TransparentColorsLight';
import { PONTEM_CORAL_TRANSPARENT, PONTEM_PETROL } from '@ui/theme/constants/PontemColors';

export const BACKGROUND_LIGHT = {
  noisy: 'var(--t-background-noisy)',
  primary: GRAY_SCALE_LIGHT.gray1,
  secondary: GRAY_SCALE_LIGHT.gray2,
  tertiary: GRAY_SCALE_LIGHT.gray4,
  quaternary: GRAY_SCALE_LIGHT.gray5,
  invertedPrimary: GRAY_SCALE_LIGHT.gray12,
  invertedSecondary: GRAY_SCALE_LIGHT.gray11,
  danger: COLOR_LIGHT.red3,
  transparent: {
    primary: RadixColors.whiteP3A.whiteA7,
    secondary: RadixColors.whiteP3A.whiteA6,
    strong: TRANSPARENT_COLORS_LIGHT.gray7,
    medium: TRANSPARENT_COLORS_LIGHT.gray5,
    light: TRANSPARENT_COLORS_LIGHT.gray2,
    lighter: TRANSPARENT_COLORS_LIGHT.gray1,
    danger: TRANSPARENT_COLORS_LIGHT.red3,
    blue: PONTEM_CORAL_TRANSPARENT.selectionLight,
    orange: TRANSPARENT_COLORS_LIGHT.orange3,
    success: TRANSPARENT_COLORS_LIGHT.green3,
  },
  overlayPrimary: TRANSPARENT_COLORS_LIGHT.gray11,
  overlaySecondary: TRANSPARENT_COLORS_LIGHT.gray9,
  overlayTertiary: TRANSPARENT_COLORS_LIGHT.gray4,
  radialGradient: `radial-gradient(50% 62.62% at 50% 0%, ${PONTEM_PETROL.petrol500} 0%, ${PONTEM_PETROL.petrol600} 100%)`,
  radialGradientHover: `radial-gradient(76.32% 95.59% at 50% 0%, ${PONTEM_PETROL.petrol600} 0%, ${PONTEM_PETROL.petrol700} 100%)`,
  primaryInverted: PONTEM_PETROL.petrol600,
  primaryInvertedHover: PONTEM_PETROL.petrol700,
};
