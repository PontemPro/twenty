import { type EnrichedObjectMetadataItem } from '@/object-metadata/types/EnrichedObjectMetadataItem';
import { getObjectColorWithFallback } from '@/object-metadata/utils/getObjectColorWithFallback';
import {
  TintedIconTile,
  getIconTileColorShades,
} from 'twenty-ui/data-display';
import { useIcons } from 'twenty-ui/icon';
import { useTheme } from 'twenty-ui/theme-constants';

export type ObjectMetadataIconInput = Pick<
  EnrichedObjectMetadataItem,
  'icon' | 'nameSingular' | 'color' | 'isSystem'
>;

export type ObjectMetadataIconProps = {
  objectMetadataItem?: ObjectMetadataIconInput | null;
  size?: number;
  stroke?: number;
  variant?: 'tile' | 'bare';
};

export const ObjectMetadataIcon = ({
  objectMetadataItem,
  size,
  stroke,
  variant = 'tile',
}: ObjectMetadataIconProps) => {
  const theme = useTheme();
  const { getIcon } = useIcons();
  const Icon = getIcon(objectMetadataItem?.icon);
  const color = getObjectColorWithFallback(objectMetadataItem);

  // Pontem Pro design reference: page headers and breadcrumbs show a bare
  // colored stroke icon instead of the tinted tile.
  if (variant === 'bare') {
    return (
      <Icon
        size={size ?? theme.icon.size.md}
        stroke={stroke ?? theme.icon.stroke.md}
        color={getIconTileColorShades(color).iconColor}
      />
    );
  }

  return (
    <TintedIconTile Icon={Icon} color={color} size={size} stroke={stroke} />
  );
};
