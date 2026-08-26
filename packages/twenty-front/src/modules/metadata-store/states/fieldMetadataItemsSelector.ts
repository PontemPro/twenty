import { currentWorkspaceMemberState } from '@/auth/states/currentWorkspaceMemberState';
import { metadataStoreState } from '@/metadata-store/states/metadataStoreState';
import { type FlatFieldMetadataItem } from '@/metadata-store/types/FlatFieldMetadataItem';
import {
  PONTEM_GERMAN_FIELD_LABELS,
  isPontemGermanLocale,
} from '@/object-metadata/constants/PontemGermanLabels';
import { createAtomSelector } from '@/ui/utilities/state/jotai/utils/createAtomSelector';

export const fieldMetadataItemsSelector = createAtomSelector<
  FlatFieldMetadataItem[]
>({
  key: 'fieldMetadataItemsSelector',
  get: ({ get }) => {
    const storeItem = get(metadataStoreState, 'fieldMetadataItems');
    const fields = storeItem.current as FlatFieldMetadataItem[];

    // Pontem Pro: overlay German labels for members with a German locale.
    if (!isPontemGermanLocale(get(currentWorkspaceMemberState)?.locale)) {
      return fields;
    }

    return fields.map((field) => {
      const german = PONTEM_GERMAN_FIELD_LABELS[field.name];
      if (german === undefined) {
        return field;
      }
      return {
        ...field,
        label: german.label,
        options: german.options
          ? (field.options ?? []).map((option: any) => ({
              ...option,
              label: german.options?.[option.value] ?? option.label,
            }))
          : field.options,
      };
    });
  },
});
