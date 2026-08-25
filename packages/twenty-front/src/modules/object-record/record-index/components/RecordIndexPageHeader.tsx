import { RecordIndexCommandMenu } from '@/command-menu-item/components/RecordIndexCommandMenu';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@/context-store/constants/MainContextStoreInstanceId';
import { contextStoreCurrentViewIdComponentState } from '@/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { isLayoutCustomizationModeEnabledState } from '@/layout-customization/states/isLayoutCustomizationModeEnabledState';
import { useNumberFormat } from '@/localization/hooks/useNumberFormat';
import { useFilteredObjectMetadataItems } from '@/object-metadata/hooks/useFilteredObjectMetadataItems';
import { RecordIndexPageHeaderIcon } from '@/object-record/record-index/components/RecordIndexPageHeaderIcon';
import { useRecordIndexContextOrThrow } from '@/object-record/record-index/contexts/RecordIndexContext';
import { SidePanelToggleButton } from '@/side-panel/components/SidePanelToggleButton';
import { PageCardHeader } from '@/ui/layout/page/components/PageCardHeader';
import { useAtomComponentStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomComponentStateValue';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useSidePanelMenu } from '@/side-panel/hooks/useSidePanelMenu';
import { styled } from '@linaria/react';
import { t } from '@lingui/core/macro';
import { isDefined } from 'twenty-shared/utils';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledTitleWithSelectedRecords = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${themeCssVariables.spacing[1]};
`;

const StyledTitle = styled.div`
  color: ${themeCssVariables.font.color.primary};
  padding-right: ${themeCssVariables.spacing['0.5']};
`;

/* Pontem Pro design reference: small keyboard hint chip next to the header
   actions; clicking it opens the command menu like the shortcut does. */
const StyledCommandMenuHintChip = styled.button`
  background: ${themeCssVariables.background.primary};
  border: 1px solid #e2e8e8;
  border-radius: 5px;
  color: ${themeCssVariables.font.color.tertiary};
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  line-height: 1;
  padding: 4px 6px;
  white-space: nowrap;
`;

const StyledSelectedRecordsCount = styled.div`
  color: ${themeCssVariables.font.color.tertiary};
  padding-left: ${themeCssVariables.spacing['0.5']};
`;

export const RecordIndexPageHeader = () => {
  const { findObjectMetadataItemByNamePlural } =
    useFilteredObjectMetadataItems();

  const contextStoreNumberOfSelectedRecords = useAtomComponentStateValue(
    contextStoreNumberOfSelectedRecordsComponentState,
  );

  const { formatNumber } = useNumberFormat();

  const { objectNamePlural } = useRecordIndexContextOrThrow();

  const objectMetadataItem =
    findObjectMetadataItemByNamePlural(objectNamePlural);

  const label = objectMetadataItem?.labelPlural ?? objectNamePlural;

  const pageHeaderTitle =
    contextStoreNumberOfSelectedRecords > 0 ? (
      <StyledTitleWithSelectedRecords>
        <StyledTitle>{label}</StyledTitle>
        <>{'->'}</>
        <StyledSelectedRecordsCount>
          {t`${formatNumber(contextStoreNumberOfSelectedRecords)} selected`}
        </StyledSelectedRecordsCount>
      </StyledTitleWithSelectedRecords>
    ) : (
      label
    );

  const { toggleSidePanelMenu } = useSidePanelMenu();

  const isMacLike =
    typeof navigator !== 'undefined' && /Mac|iP/.test(navigator.platform);

  const contextStoreCurrentViewId = useAtomComponentStateValue(
    contextStoreCurrentViewIdComponentState,
    MAIN_CONTEXT_STORE_INSTANCE_ID,
  );
  const isLayoutCustomizationModeEnabled = useAtomStateValue(
    isLayoutCustomizationModeEnabledState,
  );

  return (
    <PageCardHeader
      icon={
        <RecordIndexPageHeaderIcon objectMetadataItem={objectMetadataItem} />
      }
      title={pageHeaderTitle}
      actionButton={
        isDefined(contextStoreCurrentViewId) ? (
          <>
            <RecordIndexCommandMenu />
            {!isLayoutCustomizationModeEnabled && <SidePanelToggleButton />}
            <StyledCommandMenuHintChip
              type="button"
              onClick={() => toggleSidePanelMenu()}
              aria-label="Open command menu"
            >
              {isMacLike ? '\u2318K' : 'Ctrl+K'}
            </StyledCommandMenuHintChip>
          </>
        ) : undefined
      }
    />
  );
};
