import { Button } from 'antd';
import { motion, useReducedMotion } from 'framer-motion';
import { FC, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import CloseIcon from './close.svg';

const Card: FC<CardProps> = memo(({ card, handleClickCard, handleClose }) => {
	const API_URL = process.env.API_URL;
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className={styles.card}
			key={card.id}
			layout={shouldReduceMotion ? false : true}
			transition={{ duration: 0.3 }}
		>
			<LazyLoadImage
				src={API_URL + card.image}
				alt={card.category}
				effect='blur'
				className={styles.image}
			/>
			<div className={styles.content} onClick={() => handleClickCard(card)}>
				<h5>{card.image.replace(`${card.category}/`, '')}</h5>
			</div>
			<Button
				className={styles.closeButton}
				onClick={() => handleClose(card.id)}
			>
				<CloseIcon />
			</Button>
		</motion.div>
	);
});

export default Card;
