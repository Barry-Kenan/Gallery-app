import { SettingTwoTone } from '@ant-design/icons';
import { Spin } from 'antd';
import { FC } from 'react';
import styles from './Loading.module.scss';

const antIcon = (
	<SettingTwoTone spin style={{ fontSize: 50 }} twoToneColor='#2a6478' />
);

const Loading: FC = () => {
	return (
		<div className={styles.loading}>
			<Spin indicator={antIcon} />
		</div>
	);
};

export default Loading;
