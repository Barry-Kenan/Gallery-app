import { FunctionComponent, memo } from 'react';
import Layout from './Layout';

const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	const withLayoutComponent = memo((props: T): JSX.Element => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	});

	return withLayoutComponent;
};

export default withLayout;
