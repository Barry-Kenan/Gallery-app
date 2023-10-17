import { Button, Radio, RadioChangeEvent } from 'antd';
import cn from 'classnames';
import { FC, memo, useCallback, useMemo } from 'react';
import { useActions, useAppSelector } from 'shared/model/hooks';
import { sortArray } from 'shared/model/lib';
import { sortRadioOptions } from '../const/sortRadioOptions';
import styles from './Settings.module.scss';
import { SettingsProps } from './Settings.props';
import RefreshIcon from './icons/refresh.svg';

const Settings: FC<SettingsProps> = memo(({ className, ...props }) => {
	const { setImages, setSort, getImages } = useActions();
	const { images, sort, totalCount } = useAppSelector(
		state => state.galleryReducer
	);

	const handleOnChange = useCallback(
		({ target: { value } }: RadioChangeEvent) => {
			setSort(value);
			const sortedImages = sortArray(images, value);
			setImages(sortedImages);
		},
		[setSort, setImages]
	);

	const returnAllImages = useCallback(() => {
		getImages(sort);
	}, [getImages]);

	const isAllImages = useMemo(
		() => images.length === totalCount,
		[images, totalCount]
	);

	return (
		<div className={cn(className, styles.settings)} {...props}>
			<Radio.Group
				options={sortRadioOptions}
				size='large'
				value={sort}
				onChange={handleOnChange}
				className={styles.radio}
			/>
			<Button
				className={styles.button}
				onClick={returnAllImages}
				disabled={isAllImages}
			>
				<RefreshIcon />
				Return all images
			</Button>
		</div>
	);
});

export default Settings;
