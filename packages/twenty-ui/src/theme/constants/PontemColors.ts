// NEW FILE -> packages/twenty-ui/src/theme/constants/PontemColors.ts
// Pontem Pro brand scales. Coral replaces the Radix indigo accent family;
// petrol carries primary button surfaces (light mode).
// Anchors from the live ERP: coral #E05A41, petrol #114F5C / #0D3F49.
// Steps 9-10 (and light 11) are ACTION CORAL (#BB4631 family): accent9 carries
// white button text in Twenty v2.32 ('+ New Person'), and brand #E05A41 only
// reaches 3.68:1 there. #BB4631 matches Twenty's indigo9 default (5.21:1).
// Brand-exact #E05A41 lives on in tints, borders, selection alphas, and dark text.
// P3 values are exact sRGB->display-p3 conversions (not re-saturated).

export const PONTEM_CORAL_BRAND = '#e05a41';

export const PONTEM_CORAL_LIGHT = {
  coral1: 'color(display-p3 0.998 0.989 0.988)', // #fffcfc
  coral2: 'color(display-p3 0.995 0.97 0.962)', // #fff7f5
  coral3: 'color(display-p3 0.989 0.939 0.928)', // #ffefec
  coral4: 'color(display-p3 0.979 0.875 0.845)', // #ffded6
  coral5: 'color(display-p3 0.961 0.822 0.784)', // #fcd0c6
  coral6: 'color(display-p3 0.934 0.754 0.707)', // #f7beb2
  coral7: 'color(display-p3 0.896 0.671 0.609)', // #efa898
  coral8: 'color(display-p3 0.856 0.566 0.492)', // #e78c79
  coral9: 'color(display-p3 0.68 0.305 0.223)', // #bb4631 action coral, white text 5.21:1 (indigo9 parity)
  coral10: 'color(display-p3 0.639 0.281 0.203)', // #b0402c hover, 5.81:1
  coral11: 'color(display-p3 0.592 0.262 0.189)', // #a33c29 text, 6.49:1 on white / 5.81:1 on coral3
  coral12: 'color(display-p3 0.298 0.144 0.109)', // #522219
};

export const PONTEM_CORAL_DARK = {
  coral1: 'color(display-p3 0.105 0.083 0.079)', // #1c1514
  coral2: 'color(display-p3 0.134 0.096 0.088)', // #241816
  coral3: 'color(display-p3 0.212 0.119 0.093)', // #3a1d16
  coral4: 'color(display-p3 0.276 0.135 0.104)', // #4c2018
  coral5: 'color(display-p3 0.332 0.168 0.129)', // #5b281e
  coral6: 'color(display-p3 0.413 0.221 0.174)', // #713529
  coral7: 'color(display-p3 0.505 0.278 0.223)', // #8a4335
  coral8: 'color(display-p3 0.63 0.348 0.279)', // #ac5442
  coral9: 'color(display-p3 0.68 0.305 0.223)', // #bb4631 action coral (same solid as light)
  coral10: 'color(display-p3 0.639 0.281 0.203)', // #b0402c hover
  coral11: 'color(display-p3 0.841 0.554 0.48)', // #e38976 text, 6.65:1 on #1b1b1b
  coral12: 'color(display-p3 0.947 0.84 0.809)', // #f7d5cd
};

export const PONTEM_PETROL = {
  petrol500: 'color(display-p3 0.204 0.364 0.417)', // #245e6c gradient top
  petrol600: 'color(display-p3 0.145 0.305 0.354)', // #114f5c primary
  petrol700: 'color(display-p3 0.113 0.243 0.281)', // #0d3f49 hover
  petrol800: 'color(display-p3 0.079 0.212 0.254)', // #013742
};

export const PONTEM_CORAL_TRANSPARENT = {
  selectionLight: '#e05a4112',
  selectionDark: '#f0694f57',
};
