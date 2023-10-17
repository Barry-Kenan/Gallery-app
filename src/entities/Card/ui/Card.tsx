import { Button } from 'antd';
import { motion, useReducedMotion } from 'framer-motion';
import { FC, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getImageName } from 'shared/model/lib';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import CloseIcon from './icons/close.svg';

const Card: FC<CardProps> = memo(({ card, handleClickCard, handleClose }) => {
	const API_URL = process.env.API_URL;
	const shouldReduceMotion = useReducedMotion();

	const name = getImageName(card);

	return (
		<motion.div
			className={styles.card}
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
				<h5>{name}</h5>
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
