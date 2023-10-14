import { FC, useEffect } from 'react';
import { ContentEnum } from 'shared/interfaces';
import { LS_IMAGES_KEY } from 'shared/model/const';
import { useActions } from 'shared/model/hooks/useActions';
import { useAppSelector } from 'shared/model/hooks/useAppSelector';
import { Gallery, withLayout } from 'widgets';

const MainPage: FC = () => {
	const { content, sort } = useAppSelector(state => state.galleryReducer);
	const { getImages, setImages } = useActions();

	useEffect(() => {
		const images = JSON.parse(localStorage.getItem(LS_IMAGES_KEY));
		!images ? getImages(sort) : setImages(images);
	}, []);

	switch (content) {
		case ContentEnum.GALLERY:
			return <Gallery />;
		case ContentEnum.TREE:
			return <div>Tree</div>;
		default:
			const _never: never = content;
	}
};

export default withLayout(MainPage);
