import { ImageContent } from 'entities';
import { FC } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/model/hooks';
import { withLayout } from 'widgets';
import styles from './ImagePage.module.scss';

const ImagePage: FC = () => {
	const { selectedImage } = useAppSelector(state => state.galleryReducer);

	return selectedImage ? (
		<LazyLoadComponent>
			<div className={styles.wrapper}>
				<ImageContent />
			</div>
		</LazyLoadComponent>
	) : (
		<Navigate to='/' />
	);
};

export default withLayout(ImagePage);
