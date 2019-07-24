import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Cards } from './../pages';
import AppHedaerContainer from './../../containers/app-header-container';

import './app.sass';

const App = () => {
	return(
		<div className="container-fluid">
			<AppHedaerContainer />
			<div className="app-contain">
				<Switch>

					<Route path="/" 
								 exact
								 component={Home} />

					<Route path="/cart" 
								 component={Cards} />
								 
				</Switch>
			</div>
		</div>
	);
};

export default App;