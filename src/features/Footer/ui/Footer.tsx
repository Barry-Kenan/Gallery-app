import cn from 'classnames';
import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = memo(({ className, ...props }) => {
	return (
		<div className={cn(className, styles.footer)} {...props}>
			<h3 className={styles.title}>Photo Gallery</h3>
		</div>
	);
});

export default Footer;
