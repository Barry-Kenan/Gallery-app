import { ContentEnum } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

export const setContent = (payload: ContentEnum): GalleryAction => ({
	type: GalleryActionsEnum.SET_CONTENT,
	payload
});
