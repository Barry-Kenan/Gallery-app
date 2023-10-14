import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { IImage } from 'shared/interfaces';
import { GalleryActionsEnum } from 'shared/model/action-types';
import { galleryApi } from 'shared/model/api';
import { LS_IMAGES_KEY } from 'shared/model/const';
import { galleryActions } from '../../actions/gallery/gallery.actions';

function* getImagesSaga() {
	try {
		let images: IImage[] = JSON.parse(localStorage.getItem(LS_IMAGES_KEY));
		if (!images) {
			images = yield galleryApi.getImages();
		}
		yield put(galleryActions.setImages(images));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
}

function* watchGetImages() {
	yield takeEvery(GalleryActionsEnum.GET_IMAGES, getImagesSaga);
}

export default function* gallerySaga() {
	yield all([fork(watchGetImages)]);
}
