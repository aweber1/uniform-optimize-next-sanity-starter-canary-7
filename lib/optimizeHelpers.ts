import { IntentTags } from '@uniformdev/optimize-common';
import { PersonalizableListItem } from '@uniformdev/optimize-tracker-common';
import { SanityDocument } from './sanityTypes';

export function mapSanityDocumentToPersonalizableItem(document: SanityDocument): PersonalizableListItem {
  return {
    ...document,
    type: document._type,
    intentTag: JSON.parse((document.unfrmOptIntentTag?.uniformIntentTags as any) || '{}') as IntentTags,
  };
}
