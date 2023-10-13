import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.footer)} {...props}>
			Photo Gallery
		</div>
	);
};

export default Footer;
