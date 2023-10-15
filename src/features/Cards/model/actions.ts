import { IImage } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

export const selectImage = (payload: IImage): GalleryAction => ({
	type: GalleryActionsEnum.SELECT_IMAGE,
	payload
});
