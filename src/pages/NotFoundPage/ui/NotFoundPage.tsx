import { Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const { Title, Text } = Typography;

const NotFoundPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Title level={3}>Страница не найдена!</Title>
			<Text>
				Вы можете перейти на <Link to={'/'}> главную страницу</Link>
			</Text>
		</div>
	);
};

export default NotFoundPage;
