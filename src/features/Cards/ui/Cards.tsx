import { Card } from 'entities';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IImage } from 'shared/interfaces';
import { useActions, useAppSelector } from 'shared/model/hooks';
import styles from './Cards.module.scss';

const Cards: FC = () => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const { setImages, selectImage } = useActions();
	const navigate = useNavigate();

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
			{images.map(e => (
				<Card
					card={e}
					handleClickCard={handleClickCard}
					handleClose={handleClose}
				/>
			))}
		</div>
	);
};

export default Cards;
