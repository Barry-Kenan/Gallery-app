import { Footer, Header } from 'features';
import { FC } from 'react';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.body} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export default Layout;
