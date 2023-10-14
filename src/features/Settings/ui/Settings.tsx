import { Button, Radio, RadioChangeEvent } from 'antd';
import cn from 'classnames';
import { FC } from 'react';
import { useActions, useAppSelector } from 'shared/model/hooks';
import { sortArray } from 'shared/model/lib';
import { sortRadioOptions } from '../const/sortRadioOptions';
import styles from './Settings.module.scss';
import { SettingsProps } from './Settings.props';
import RefreshIcon from './refresh.svg';

const Settings: FC<SettingsProps> = ({ className, ...props }) => {
	const { setImages, setSort, getImages } = useActions();
	const { images, sort } = useAppSelector(state => state.galleryReducer);

	const handleOnChange = ({ target: { value } }: RadioChangeEvent) => {
		setSort(value);
		const sortedImages = sortArray(images, value);
		setImages(sortedImages);
	};

	const returnAllImages = () => {
		getImages(sort);
	};

	return (
		<div className={cn(className, styles.settings)} {...props}>
			<Radio.Group
				options={sortRadioOptions}
				size='large'
				value={sort}
				onChange={handleOnChange}
				className={styles.radio}
			/>
			<Button className={styles.button} onClick={returnAllImages}>
				<RefreshIcon />
				Return all images
			</Button>
		</div>
	);
};

export default Settings;
