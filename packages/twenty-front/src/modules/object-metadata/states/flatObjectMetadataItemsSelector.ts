import { currentWorkspaceMemberState } from '@/auth/states/currentWorkspaceMemberState';
import { metadataStoreState } from '@/metadata-store/states/metadataStoreState';
import { type FlatObjectMetadataItem } from '@/metadata-store/types/FlatObjectMetadataItem';
import {
  PONTEM_GERMAN_OBJECT_LABELS,
  isPontemGermanLocale,
} from '@/object-metadata/constants/PontemGermanLabels';
import { createAtomSelector } from '@/ui/utilities/state/jotai/utils/createAtomSelector';

export const flatObjectMetadataItemsSelector = createAtomSelector<
  FlatObjectMetadataItem[]
>({
  key: 'flatObjectMetadataItemsSelector',
  get: ({ get }) => {
    const storeItem = get(metadataStoreState, 'objectMetadataItems');
    const objects = storeItem.current as FlatObjectMetadataItem[];

    // Pontem Pro: overlay German labels for members with a German locale.
    if (!isPontemGermanLocale(get(currentWorkspaceMemberState)?.locale)) {
      return objects;
    }

    return objects.map((object) => {
      const german = PONTEM_GERMAN_OBJECT_LABELS[object.nameSingular];
      if (german === undefined) {
        return object;
      }
      return { ...object, ...german };
    });
  },
});
