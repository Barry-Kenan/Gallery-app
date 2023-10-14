import { all, fork } from 'redux-saga/effects';
import gallerySaga from './gallery/gallery.saga';

export default function* rootSaga() {
	yield all([fork(gallerySaga)]);
}
