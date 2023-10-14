import { setContent } from 'entities/ContentRadio';
import { IImage } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

const setImages = (payload: IImage[]): GalleryAction => ({
	type: GalleryActionsEnum.SET_IMAGES,
	payload
});

const getImages = (): GalleryAction => ({
	type: GalleryActionsEnum.GET_IMAGES
});

export const galleryActions = { setContent, setImages, getImages };
