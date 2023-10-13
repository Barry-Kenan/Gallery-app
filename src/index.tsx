import { ConfigProvider } from 'antd';
import App from 'app';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#2a6478'
				}
			}}
		>
			<App />
		</ConfigProvider>
	</BrowserRouter>
);
