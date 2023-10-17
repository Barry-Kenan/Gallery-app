import { ImageContent } from 'entities';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/model/hooks';
import { withLayout } from 'widgets';
import styles from './ImagePage.module.scss';

const ImagePage: FC = () => {
	const { selectedImage } = useAppSelector(state => state.galleryReducer);

	return selectedImage ? (
		<div className={styles.wrapper}>
			<ImageContent />
		</div>
	) : (
		<Navigate to='/' />
	);
};

export default withLayout(ImagePage);
