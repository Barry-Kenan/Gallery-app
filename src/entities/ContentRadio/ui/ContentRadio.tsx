import { Radio, RadioChangeEvent } from 'antd';
import { FC, useState } from 'react';
import { ContentEnum } from 'shared/interfaces';
import { contentRadioData } from '../const/data';
import styles from './ContentRadio.module.scss';

const ContentRadio: FC = () => {
	const [value, setValue] = useState<ContentEnum>(ContentEnum.GALLERY);

	const handleOnChange = ({ target: { value } }: RadioChangeEvent) => {
		setValue(value);
		// eslint-disable-next-line no-console
		console.log(value);
	};

	return (
		<Radio.Group
			options={contentRadioData}
			optionType='button'
			buttonStyle='solid'
			size='large'
			value={value}
			onChange={handleOnChange}
			className={styles.radio}
		/>
	);
};

export default ContentRadio;
