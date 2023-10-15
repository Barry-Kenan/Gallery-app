import { format } from 'date-fns';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/model/hooks';
import { withLayout } from 'widgets';
import styles from './ImagePage.module.scss';

const ImagePage: FC = () => {
	const { selectedImage } = useAppSelector(state => state.galleryReducer);
	const API_URL = process.env.API_URL;

	return selectedImage ? (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<img
					src={API_URL + selectedImage.image}
					alt={selectedImage.category}
					className={styles.image}
				/>
				<div className={styles.info}>
					<h3>
						{selectedImage.image.replace(`${selectedImage.category}/`, '')}
					</h3>
					<h4>Category: {selectedImage.category}</h4>
					<h4>File size: {(selectedImage.filesize / 1024).toFixed(1)} KB</h4>
					<h4>Created date: {format(selectedImage.timestamp, 'dd.MM.yyyy')}</h4>
				</div>
			</div>
		</div>
	) : (
		<Navigate to='/' />
	);
};

export default withLayout(ImagePage);
