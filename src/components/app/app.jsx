import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Cards } from './../pages';
import AppHedaer from './../app-header';

import './app.sass';

const App = () => {
	return(
		<div className="container-fluid">
			<AppHedaer numItems={5} total={50} />
			<div className="app-contain">
				<Switch>

					<Route path="/" 
								 exact
								 component={Home} />

					<Route path="/cards" 
								 component={Cards} />
								 
				</Switch>
			</div>
		</div>
	);
};

export default App;