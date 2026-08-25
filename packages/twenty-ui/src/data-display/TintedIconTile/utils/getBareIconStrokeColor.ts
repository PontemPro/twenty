import { getIconTileColorShades } from '@ui/data-display/TintedIconTile/utils/getIconTileColorShades';

// Pontem Pro design reference: bare (tile-less) icons use the mockup's
// exact mid-tone stroke colors. Unlisted colors fall back to the theme's
// icon shade.
const PONTEM_BARE_ICON_STROKE_COLORS: Record<string, string> = {
  blue: '#4a79d4',
  purple: '#7c5cd6',
  yellow: '#cf9a12',
  green: '#2f9e68',
  turquoise: '#199f8c',
  orange: '#e0812c',
  gray: '#666666',
};

export const getBareIconStrokeColor = (
  color: string | null | undefined,
): string =>
  (color != null ? PONTEM_BARE_ICON_STROKE_COLORS[color] : undefined) ??
  getIconTileColorShades(color).iconColor;
