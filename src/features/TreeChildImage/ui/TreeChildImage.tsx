import { Modal } from 'antd';
import { ImageContent } from 'entities';
import { FC, memo, useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useActions } from 'shared/model/hooks';
import { getImageName } from 'shared/model/lib';
import styles from './TreeChildImage.module.scss';
import { TreeChildImageProps } from './TreeChildImage.props';

const TreeChildImage: FC<TreeChildImageProps> = memo(({ data }) => {
	const API_URL = process.env.API_URL;
	const imageName = useMemo(() => getImageName(data), [data]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { selectImage } = useActions();

	const handleOpen = () => {
		selectImage(data);
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

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
			<Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
				<ImageContent className={styles.imageContent} />
			</Modal>
		</>
	);
});

export default TreeChildImage;
