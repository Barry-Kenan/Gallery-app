import cn from 'classnames';
import { ContentRadio } from 'entities';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.header)} {...props}>
			Logo
			<ContentRadio />
		</div>
	);
};

export default Header;
