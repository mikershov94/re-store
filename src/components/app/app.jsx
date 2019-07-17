import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Cards } from './../pages';

import './app.sass';

const App = () => {
	return(
		<div>
			<Switch>

				<Route path="/" 
							 exact
							 component={Home} />

				<Route path="/cards" 
							 component={Cards} />
							 
			</Switch>
		</div>
	);
};

export default App;