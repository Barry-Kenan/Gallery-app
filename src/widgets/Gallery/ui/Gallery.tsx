import { Cards, Settings } from 'features';
import { FC } from 'react';
import styles from './Gallery.module.scss';

const Gallery: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Settings className={styles.settings} />
			<Cards />
		</div>
	);
};

export default Gallery;
