import cn from 'classnames';
import { FC } from 'react';
import { ContentEnum } from 'shared/interfaces';
import styles from './ContentRadioLabel.module.scss';
import { ContentRadioLabelProps } from './ContentRadioLabel.props';
import { GalleryIcon, TreeIcon } from './icons';

const ContentRadioLabel: FC<ContentRadioLabelProps> = ({ content }) => {
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
				[styles.checked]: true
			})}
		>
			{selectContent()}
		</div>
	);
};

export default ContentRadioLabel;
