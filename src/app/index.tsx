import { FC } from 'react';
import './styles/index.scss';

const App: FC = () => {
	// eslint-disable-next-line no-console
	console.log(process.env.APP_URL);
	return <div>App</div>;
};

export default App;
