import { Button } from 'antd';
import cn from 'classnames';
import { ContentRadio } from 'entities';
import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions } from 'shared/model/hooks';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import BackIcon from './back.svg';

const Header: FC<HeaderProps> = memo(({ className, ...props }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { selectImage } = useActions();

	const handleBack = () => {
		selectImage(null);
		navigate('/');
	};

	return (
		<div className={cn(className, styles.header)} {...props}>
			{location.pathname === '/' ? (
				<>
					<h3 className={styles.logo}>Logo</h3>
					<ContentRadio />
				</>
			) : (
				<Button onClick={handleBack}>
					<BackIcon />
				</Button>
			)}
		</div>
	);
});

export default Header;
