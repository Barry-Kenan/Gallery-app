import { ContentEnum, IImage, SortEnum } from 'shared/interfaces';

export enum GalleryActionsEnum {
	SET_CONTENT = 'SET_CONTENT',
	SET_IMAGES = 'SET_IMAGES',
	GET_IMAGES = 'GET_IMAGES',
	SET_SORT = 'SET_SORT',
	SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
	SELECT_IMAGE = 'SELECT_IMAGE',
	SET_LOADING = 'SET_LOADING',
	SET_ERROR = 'SET_ERROR'
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
	payload: SortEnum;
}

export interface SetSort {
	type: GalleryActionsEnum.SET_SORT;
	payload: SortEnum;
}

export interface SetTotalCount {
	type: GalleryActionsEnum.SET_TOTAL_COUNT;
	payload: number;
}

export interface SelectImage {
	type: GalleryActionsEnum.SELECT_IMAGE;
	payload: IImage;
}

export interface SetLoading {
	type: GalleryActionsEnum.SET_LOADING;
	payload: boolean;
}

export interface SetError {
	type: GalleryActionsEnum.SET_ERROR;
	payload: string;
}

export type GalleryAction =
	| SetContent
	| SetImages
	| GetImages
	| SetSort
	| SetTotalCount
	| SelectImage
	| SetLoading
	| SetError;
