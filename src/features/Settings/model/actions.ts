import { SortEnum } from 'shared/interfaces';
import { GalleryAction, GalleryActionsEnum } from 'shared/model/action-types';

export const setSort = (payload: SortEnum): GalleryAction => ({
	type: GalleryActionsEnum.SET_SORT,
	payload
});
