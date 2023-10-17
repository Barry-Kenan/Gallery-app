import { Card } from 'entities';
import { FC, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { IImage } from 'shared/interfaces';
import { useActions, useAppSelector } from 'shared/model/hooks';
import styles from './Cards.module.scss';

const Cards: FC = () => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const { setImages, selectImage } = useActions();
	const navigate = useNavigate();
	const deferredImages = useDeferredValue(images);

	const handleClickCard = (e: IImage) => {
		selectImage(e);
		navigate(`/${e.id}`);
	};

	const handleClose = (id: number) => {
		const filteredImages = images.filter(image => image.id !== id);
		setImages(filteredImages);
	};

	return (
		<div className={styles.grid}>
			{deferredImages.map(e => (
				<Card
					key={e.id}
					card={e}
					handleClickCard={handleClickCard}
					handleClose={handleClose}
				/>
			))}
		</div>
	);
};

export default Cards;
