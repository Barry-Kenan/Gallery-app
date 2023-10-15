import { Button } from 'antd';
import { motion, useReducedMotion } from 'framer-motion';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { IImage } from 'shared/interfaces';
import { useActions, useAppSelector } from 'shared/model/hooks';
import styles from './Cards.module.scss';
import CloseIcon from './close.svg';

const Cards: FC = () => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const { setImages, selectImage } = useActions();
	const API_URL = process.env.API_URL;
	const shouldReduceMotion = useReducedMotion();
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
					/>
					<div className={styles.content} onClick={() => handleClickCard(e)}>
						<h5>{e.image.replace(`${e.category}/`, '')}</h5>
					</div>
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
