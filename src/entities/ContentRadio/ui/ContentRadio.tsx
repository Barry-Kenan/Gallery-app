import { Radio, RadioChangeEvent } from 'antd';
import { FC } from 'react';
import { useActions } from 'shared/model/hooks/useActions';
import { useAppSelector } from 'shared/model/hooks/useAppSelector';
import { contentRadioData } from '../const/data';
import styles from './ContentRadio.module.scss';

const ContentRadio: FC = () => {
	const { content } = useAppSelector(state => state.galleryReducer);
	const { setContent } = useActions();

	const handleOnChange = ({ target: { value } }: RadioChangeEvent) => {
		setContent(value);
	};

	return (
		<Radio.Group
			options={contentRadioData}
			optionType='button'
			buttonStyle='solid'
			size='large'
			value={content}
			onChange={handleOnChange}
			className={styles.radio}
		/>
	);
};

export default ContentRadio;
