import React from 'react';
import { Link } from 'react-router-dom';

import './app-header.sass'

const AppHeader = ({ numItems, total }) => {
	return(
		<header className="app-header row">
			<Link className="logo text-dark" to="/">ReStore</Link>
			<Link className="cart-info text-dark" to="/cart">
				<i className="cart-icon fa fa-shopping-cart" />
				{numItems} товаров (${total})
			</Link>
		</header>
	);
};

export default AppHeader;