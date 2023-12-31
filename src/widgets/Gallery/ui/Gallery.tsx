import { Cards, Settings } from 'features';
import { FC, memo } from 'react';
import { useAppSelector } from 'shared/model/hooks';
import { Loading } from 'shared/ui';
import styles from './Gallery.module.scss';

const Gallery: FC = memo(() => {
	const { loading } = useAppSelector(state => state.galleryReducer);
	return (
		<div className={styles.wrapper}>
			<Settings className={styles.settings} />
			{loading ? <Loading /> : <Cards />}
		</div>
	);
});

export default Gallery;
