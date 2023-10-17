import { Modal } from 'antd';
import { ImageContent } from 'entities';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useActions, useAppSelector } from 'shared/model/hooks';
import { getImageName } from 'shared/model/lib';
import styles from './TreeChildImage.module.scss';
import { TreeChildImageProps } from './TreeChildImage.props';

const TreeChildImage: FC<TreeChildImageProps> = memo(({ data }) => {
	const API_URL = process.env.API_URL;
	const imageName = useMemo(() => getImageName(data), [data]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { selectedImage } = useAppSelector(state => state.galleryReducer);
	const { selectImage } = useActions();

	const handleOpen = useCallback(() => {
		selectImage(data);
		setIsModalOpen(true);
	}, [selectImage, setIsModalOpen]);

	const handleCancel = useCallback(() => {
		selectImage(null);
		setIsModalOpen(false);
	}, [setIsModalOpen]);

	return (
		<>
			<div className={styles.wrapper} onClick={handleOpen}>
				<LazyLoadImage
					src={API_URL + data.image}
					alt={data.image}
					className={styles.image}
				/>
				<span>{imageName}</span>
			</div>
			{selectedImage && (
				<Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
					<ImageContent className={styles.imageContent} />
				</Modal>
			)}
		</>
	);
});

export default TreeChildImage;
