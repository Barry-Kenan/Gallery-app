import { Button } from 'antd';
import { motion, useReducedMotion } from 'framer-motion';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IImage } from 'shared/interfaces';
import { useActions, useAppSelector } from 'shared/model/hooks';
import styles from './Cards.module.scss';
import CloseIcon from './close.svg';

const Cards: FC = () => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const { setImages } = useActions();
	const API_URL = process.env.API_URL;
	const shouldReduceMotion = useReducedMotion();

	const handleClickCard = (e: IImage) => {
		// eslint-disable-next-line no-console
		console.log(e);
	};

	const handleClose = (id: number) => {
		const filteredImages = images.filter(image => image.id !== id);
		setImages(filteredImages);
	};

	return (
		<div className={styles.grid}>
			{images.map(e => (
				<motion.div
					className={styles.card}
					key={e.id}
					layout={shouldReduceMotion ? false : true}
					transition={{ duration: 0.5 }}
				>
					<LazyLoadImage
						src={API_URL + e.image}
						alt={e.category}
						effect='blur'
						className={styles.image}
						onClick={() => handleClickCard(e)}
					/>
					<h5 onClick={() => handleClickCard(e)}>
						{e.image.replace(`${e.category}/`, '')}
					</h5>
					<Button
						className={styles.closeButton}
						onClick={() => handleClose(e.id)}
					>
						<CloseIcon />
					</Button>
				</motion.div>
			))}
		</div>
	);
};

export default Cards;
