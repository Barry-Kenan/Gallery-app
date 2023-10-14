import { FC, useEffect } from 'react';
import { ContentEnum } from 'shared/interfaces';
import { useActions } from 'shared/model/hooks/useActions';
import { useAppSelector } from 'shared/model/hooks/useAppSelector';
import { withLayout } from 'widgets';

const MainPage: FC = () => {
	const { content } = useAppSelector(state => state.galleryReducer);
	const { getImages } = useActions();

	useEffect(() => {
		getImages();
	}, []);

	switch (content) {
		case ContentEnum.GALLERY:
			return <div>Gallery</div>;
		case ContentEnum.TREE:
			return <div>Tree</div>;
		default:
			const _never: never = content;
	}
};

export default withLayout(MainPage);
