import { notification } from 'antd';
import { FC, memo, useCallback, useEffect } from 'react';
import { ContentEnum } from 'shared/interfaces';
import { LS_IMAGES_KEY } from 'shared/model/const';
import { useActions } from 'shared/model/hooks/useActions';
import { useAppSelector } from 'shared/model/hooks/useAppSelector';
import { sortArray } from 'shared/model/lib';
import { Gallery, Tree, withLayout } from 'widgets';

const MainPage: FC = memo(() => {
	const { content, sort, error } = useAppSelector(
		state => state.galleryReducer
	);

	const { getImages, setImages, setError } = useActions();
	const [api, contextHolder] = notification.useNotification();

	const openNotification = useCallback(() => {
		api.error({
			message: 'Ошибка',
			description: error
		});
	}, [error]);

	useEffect(() => {
		const images = JSON.parse(localStorage.getItem(LS_IMAGES_KEY));
		!images ? getImages(sort) : setImages(sortArray(images, sort));
	}, []);

	useEffect(() => {
		if (error) {
			openNotification();
			setError(null);
		}
	}, [error]);

	const selectContent = useCallback(() => {
		switch (content) {
			case ContentEnum.GALLERY:
				return <Gallery />;
			case ContentEnum.TREE:
				return <Tree />;
			default:
				const _never: never = content;
		}
	}, [content]);

	return (
		<>
			{contextHolder} {selectContent()}
		</>
	);
});

export default withLayout(MainPage);
