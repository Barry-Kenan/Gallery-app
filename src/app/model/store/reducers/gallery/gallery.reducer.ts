import { ContentEnum, IImage, SortEnum } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';
import { LS_IMAGES_KEY } from 'shared/model/const';

export interface GalleryState {
	content: ContentEnum;
	images: IImage[];
	sort: SortEnum;
	totalCount: number;
	selectedImage: IImage;
	loading: boolean;
	error: string;
}

const initialState: GalleryState = {
	content: ContentEnum.GALLERY,
	images: [],
	sort: SortEnum.NAME,
	totalCount: 660,
	selectedImage: null,
	loading: false,
	error: null
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
		case GalleryActionsEnum.SET_SORT:
			return { ...state, sort: action.payload };
		case GalleryActionsEnum.SET_TOTAL_COUNT:
			return { ...state, totalCount: action.payload };
		case GalleryActionsEnum.SELECT_IMAGE:
			return { ...state, selectedImage: action.payload };
		case GalleryActionsEnum.SET_LOADING:
			return { ...state, loading: action.payload };
		case GalleryActionsEnum.SET_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default galleryReducer;
