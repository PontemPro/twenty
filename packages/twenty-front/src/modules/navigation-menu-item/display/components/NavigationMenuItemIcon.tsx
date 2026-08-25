import { NavigationMenuItemType } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import {
  Avatar,
  StyledTintedIconTileContainer,
  getIconTileColorShades,
} from 'twenty-ui/data-display';
import { IconLink, IconWorld, useIcons } from 'twenty-ui/icon';
import { themeCssVariables } from 'twenty-ui/theme-constants';
import { type NavigationMenuItem } from '~/generated-metadata/graphql';

import { getNavigationMenuItemColor } from '@/navigation-menu-item/common/utils/getNavigationMenuItemColor';
import { recordIdentifierToObjectRecordIdentifier } from '@/navigation-menu-item/common/utils/recordIdentifierToObjectRecordIdentifier';
import { LinkIconWithLinkOverlay } from '@/navigation-menu-item/display/link/components/LinkIconWithLinkOverlay';
import { getNavigationMenuItemObjectNameSingular } from '@/navigation-menu-item/display/object/utils/getNavigationMenuItemObjectNameSingular';
import { getNavigationMenuItemComputedLink } from '@/navigation-menu-item/display/utils/getNavigationMenuItemComputedLink';
import { getNavigationMenuItemLabel } from '@/navigation-menu-item/display/utils/getNavigationMenuItemLabel';
import { ObjectIconWithViewOverlay } from '@/navigation-menu-item/display/view/components/ObjectIconWithViewOverlay';
import { useGetStandardObjectIcon } from '@/object-metadata/hooks/useGetStandardObjectIcon';
import { objectMetadataItemsSelector } from '@/object-metadata/states/objectMetadataItemsSelector';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { viewsSelector } from '@/views/states/selectors/viewsSelector';
import { getAbsoluteImageUrl } from '~/utils/image/getAbsoluteImageUrl';

export const NavigationMenuItemIcon = ({
  navigationMenuItem,
}: {
  navigationMenuItem: NavigationMenuItem;
}) => {
  const { getIcon } = useIcons();
  const objectMetadataItems = useAtomStateValue(objectMetadataItemsSelector);
  const views = useAtomStateValue(viewsSelector);

  const objectNameSingular =
    getNavigationMenuItemObjectNameSingular(
      navigationMenuItem,
      objectMetadataItems,
      views,
    ) ?? '';

  const { Icon: StandardIcon, IconColor } =
    useGetStandardObjectIcon(objectNameSingular);

  const isRecord = navigationMenuItem.type === NavigationMenuItemType.RECORD;

  const view = isDefined(navigationMenuItem.viewId)
    ? views.find((view) => view.id === navigationMenuItem.viewId)
    : undefined;
  const objectMetadataItem = objectMetadataItems.find(
    (item) => item.nameSingular === objectNameSingular,
  );
  const objectIconForView =
    objectMetadataItem?.icon != null
      ? getIcon(objectMetadataItem.icon)
      : StandardIcon;

  const canShowViewOverlay =
    navigationMenuItem.type === NavigationMenuItemType.VIEW &&
    isDefined(view) &&
    isDefined(objectIconForView) &&
    isDefined(view?.icon);

  if (canShowViewOverlay) {
    return (
      <ObjectIconWithViewOverlay
        ObjectIcon={objectIconForView}
        ViewIcon={getIcon(view!.icon)}
        objectColor={getNavigationMenuItemColor(
          navigationMenuItem,
          objectMetadataItem,
        )}
      />
    );
  }

  if (navigationMenuItem.type === NavigationMenuItemType.PAGE_LAYOUT) {
    const pageLayoutIcon = isDefined(navigationMenuItem.icon)
      ? getIcon(navigationMenuItem.icon)
      : undefined;
    const pageLayoutColor = getNavigationMenuItemColor(navigationMenuItem);
    const pageLayoutIconStyle = getIconTileColorShades(pageLayoutColor);

    return (
      <StyledTintedIconTileContainer
        $backgroundColor={pageLayoutIconStyle.backgroundColor}
        $borderColor={pageLayoutIconStyle.borderColor}
      >
        <Avatar
          size="sm"
          type="icon"
          Icon={pageLayoutIcon}
          iconColor={pageLayoutIconStyle.iconColor}
          placeholder={navigationMenuItem.name ?? ''}
        />
      </StyledTintedIconTileContainer>
    );
  }

  if (navigationMenuItem.type === NavigationMenuItemType.LINK) {
    // Pontem Pro: a LINK item with an explicitly configured icon renders it
    // in a tinted tile instead of the target site's favicon.
    const customLinkIcon = isDefined(navigationMenuItem.icon)
      ? getIcon(navigationMenuItem.icon)
      : undefined;
    if (isDefined(customLinkIcon)) {
      const linkColor = getNavigationMenuItemColor(navigationMenuItem);
      const linkIconStyle = getIconTileColorShades(linkColor);
      return (
        <StyledTintedIconTileContainer
          $backgroundColor={linkIconStyle.backgroundColor}
          $borderColor={linkIconStyle.borderColor}
        >
          <Avatar
            size="sm"
            type="icon"
            Icon={customLinkIcon}
            iconColor={linkIconStyle.iconColor}
            placeholder={navigationMenuItem.name ?? ''}
          />
        </StyledTintedIconTileContainer>
      );
    }
    const computedLink = getNavigationMenuItemComputedLink({
      item: navigationMenuItem,
      objectMetadataItems,
      views,
    });
    return (
      <LinkIconWithLinkOverlay
        link={computedLink}
        LinkIcon={IconLink}
        DefaultIcon={IconWorld}
        color={getNavigationMenuItemColor(navigationMenuItem)}
      />
    );
  }

  const itemIcon = isRecord
    ? undefined
    : objectMetadataItem?.icon
      ? getIcon(objectMetadataItem.icon)
      : undefined;
  const iconToUse = StandardIcon ?? itemIcon;

  const effectiveColor = getNavigationMenuItemColor(
    navigationMenuItem,
    objectMetadataItem,
  );
  const useStyledIcon = !isRecord;
  const iconStyle = useStyledIcon
    ? getIconTileColorShades(effectiveColor)
    : null;

  const iconColorToUse = iconStyle
    ? iconStyle.iconColor
    : StandardIcon
      ? IconColor
      : themeCssVariables.font.color.secondary;

  const labelIdentifier = getNavigationMenuItemLabel(
    navigationMenuItem,
    objectMetadataItems,
    views,
  );

  const recordIdentifier =
    isRecord &&
    isDefined(navigationMenuItem.targetRecordIdentifier) &&
    isDefined(objectMetadataItem)
      ? recordIdentifierToObjectRecordIdentifier({
          recordIdentifier: navigationMenuItem.targetRecordIdentifier,
          objectMetadataItem,
        })
      : null;

  const avatar = (
    <Avatar
      size="md"
      type={recordIdentifier?.avatarType ?? 'icon'}
      Icon={iconToUse}
      iconColor={iconColorToUse}
      avatarUrl={getAbsoluteImageUrl(recordIdentifier?.avatarUrl ?? '')}
      placeholder={labelIdentifier}
      placeholderColorSeed={navigationMenuItem.targetRecordId ?? undefined}
    />
  );

  // Pontem Pro design reference: object and view items render a bare
  // colored stroke icon (no tinted tile), like the sidebar mockup.
  return avatar;
};
