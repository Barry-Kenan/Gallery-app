import cn from 'classnames';
import { FC } from 'react';
import { ContentEnum } from 'shared/interfaces';
import { useAppSelector } from 'shared/model/hooks/useAppSelector';
import styles from './ContentRadioLabel.module.scss';
import { ContentRadioLabelProps } from './ContentRadioLabel.props';
import { GalleryIcon, TreeIcon } from './icons';

const ContentRadioLabel: FC<ContentRadioLabelProps> = ({ content }) => {
	const { content: selectedContent } = useAppSelector(
		state => state.galleryReducer
	);

	const selectContent = () => {
		switch (content) {
			case ContentEnum.GALLERY:
				return (
					<>
						<GalleryIcon />
						Gallery
					</>
				);
			case ContentEnum.TREE:
				return (
					<>
						<TreeIcon />
						Tree
					</>
				);
			default:
				const _never: never = content;
		}
	};
	return (
		<div
			className={cn(styles.label, {
				[styles.checked]: content === selectedContent
			})}
		>
			{selectContent()}
		</div>
	);
};

export default ContentRadioLabel;
