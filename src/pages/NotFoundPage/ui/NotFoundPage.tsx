import { Typography } from 'antd';
import { FC } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const { Title, Text } = Typography;

const NotFoundPage: FC = () => {
	return (
		<LazyLoadComponent>
			<div className={styles.wrapper}>
				<Title level={3}>Страница не найдена!</Title>
				<Text>
					Вы можете перейти на <Link to={'/'}> главную страницу</Link>
				</Text>
			</div>
		</LazyLoadComponent>
	);
};

export default NotFoundPage;
