import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppSelector } from 'shared/model/hooks';
import styles from './Cards.module.scss';

const Cards: FC = () => {
	const { images } = useAppSelector(state => state.galleryReducer);
	const API_URL = process.env.API_URL;

	return (
		<div className={styles.grid}>
			{images.map(e => (
				<div className={styles.card} key={e.id}>
					<LazyLoadImage
						src={API_URL + e.image}
						alt={e.category}
						effect='blur'
						className={styles.image}
					/>
					<h5>{e.image.replace(`${e.category}/`, '')}</h5>
				</div>
			))}
		</div>
	);
};

export default Cards;
