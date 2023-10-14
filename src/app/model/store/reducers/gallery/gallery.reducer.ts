import { ContentEnum, IImage } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';
import { LS_IMAGES_KEY } from 'shared/model/const';

export interface GalleryState {
	content: ContentEnum;
	images: IImage[];
}

const initialState: GalleryState = {
	content: ContentEnum.GALLERY,
	images: []
};

const galleryReducer = (
	state = initialState,
	action: GalleryAction
): GalleryState => {
	switch (action.type) {
		case GalleryActionsEnum.SET_CONTENT:
			return { ...state, content: action.payload };
		case GalleryActionsEnum.SET_IMAGES:
			localStorage.setItem(LS_IMAGES_KEY, JSON.stringify(action.payload));
			return { ...state, images: action.payload };
		default:
			return state;
	}
};

export default galleryReducer;
