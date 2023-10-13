import { rootActions } from '@redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const { galleryActions } = rootActions;
const actions = { ...galleryActions };

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
