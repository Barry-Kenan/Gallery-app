import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { IImage } from 'shared/interfaces';
import { GalleryActionsEnum, GetImages } from 'shared/model/action-types';
import { galleryApi } from 'shared/model/api';
import { sortArray } from 'shared/model/lib';
import { galleryActions } from '../../actions/gallery/gallery.actions';

function* getImagesSaga({ payload }: GetImages) {
	try {
		yield put(galleryActions.setLoading(true));
		let images: IImage[] = yield galleryApi.getImages();
		images = images.map((e, i) => ({ ...e, id: i }));
		const sortedImages = sortArray(images, payload);
		yield put(galleryActions.setImages(sortedImages));
		yield put(galleryActions.setTotalCount(sortedImages.length));
		yield put(galleryActions.setLoading(false));
	} catch (error) {
		yield put(galleryActions.setLoading(false));
		yield put(galleryActions.setError(error.message));
	}
}

function* watchGetImages() {
	yield takeEvery(GalleryActionsEnum.GET_IMAGES, getImagesSaga);
}

export default function* gallerySaga() {
	yield all([fork(watchGetImages)]);
}
