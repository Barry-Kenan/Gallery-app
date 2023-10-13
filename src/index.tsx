import { ConfigProvider } from 'antd';
import App from 'app';
import { store } from 'app/model';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
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
	</Provider>
);
