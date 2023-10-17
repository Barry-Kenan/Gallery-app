import cn from 'classnames';
import { FC } from 'react';
import { useAppSelector } from 'shared/model/hooks';
import { getImageDate, getImageName, getImageSize } from 'shared/model/lib';
import styles from './ImageContent.module.scss';
import { ImageContentProps } from './ImageContent.props';

const ImageContent: FC<ImageContentProps> = ({ className, ...props }) => {
	const API_URL = process.env.API_URL;
	const { selectedImage } = useAppSelector(state => state.galleryReducer);
	const name = getImageName(selectedImage);
	const fileSize = getImageSize(selectedImage);
	const date = getImageDate(selectedImage);

	return (
		<div className={cn(styles.content, className)} {...props}>
			<img
				src={API_URL + selectedImage.image}
				alt={selectedImage.category}
				className={styles.image}
			/>
			<div className={styles.info}>
				<h3>{name}</h3>
				<h4>Category: {selectedImage.category}</h4>
				<h4>File size: {fileSize}</h4>
				<h4>Created date: {date}</h4>
			</div>
		</div>
	);
};

export default ImageContent;
