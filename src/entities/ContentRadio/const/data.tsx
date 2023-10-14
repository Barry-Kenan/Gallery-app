import { ContentEnum } from 'shared/interfaces';
import { enumKeys } from 'shared/model/lib';
import { ContentRadioLabel } from 'shared/ui';

export const contentRadioData = enumKeys(ContentEnum).map(e => ({
	label: <ContentRadioLabel content={ContentEnum[e]} />,
	value: ContentEnum[e]
}));
