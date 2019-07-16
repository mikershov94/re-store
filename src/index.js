import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { BookstoreProvider } from './components/bookstore-service-context';
import ErrorBoundry from './components/error-boundry';
import store from './store';
import BookstoreService from './services/bookstore-service';

import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreProvider value={bookstoreService} >
				<Router>
					<App />
				</Router>
			</BookstoreProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);