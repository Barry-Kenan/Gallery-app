import { ContentEnum } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

export interface GalleryState {
	content: ContentEnum;
}

const initialState: GalleryState = {
	content: ContentEnum.GALLERY
};

const galleryReducer = (
	state = initialState,
	action: GalleryAction
): GalleryState => {
	switch (action.type) {
		case GalleryActionsEnum.SET_CONTENT:
			return { ...state, content: action.payload };
		default:
			return state;
	}
};

export default galleryReducer;
