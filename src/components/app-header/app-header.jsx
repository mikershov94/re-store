import React from 'react';
import { Link } from 'react-router-dom';

import './app-header.sass'

const AppHeader = ({ numItems, total }) => {
	return(
		<header className="app-header row">
			<Link className="logo text-dark" to="/">ReStore</Link>
			<div className="cart-info">
				<i className="cart-icon fa fa-shopping-cart" />
				{numItems} товаров (${total})
			</div>
		</header>
	);
};

export default AppHeader;