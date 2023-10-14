import { setContent } from 'entities/ContentRadio';
import { setSort } from 'features/Settings';
import { IImage, SortEnum } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

const setImages = (payload: IImage[]): GalleryAction => ({
	type: GalleryActionsEnum.SET_IMAGES,
	payload
});

const getImages = (payload: SortEnum): GalleryAction => ({
	type: GalleryActionsEnum.GET_IMAGES,
	payload
});

export const galleryActions = { setContent, setImages, getImages, setSort };
