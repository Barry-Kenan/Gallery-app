import { ContentEnum, IImage } from 'shared/interfaces';

export enum GalleryActionsEnum {
	SET_CONTENT = 'SET_CONTENT',
	SET_IMAGES = 'SET_IMAGES',
	GET_IMAGES = 'GET_IMAGES'
}

export interface SetContent {
	type: GalleryActionsEnum.SET_CONTENT;
	payload: ContentEnum;
}

export interface SetImages {
	type: GalleryActionsEnum.SET_IMAGES;
	payload: IImage[];
}
export interface GetImages {
	type: GalleryActionsEnum.GET_IMAGES;
}

export type GalleryAction = SetContent | SetImages | GetImages;
