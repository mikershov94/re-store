import React from 'react';

import './app-header.sass'

const AppHeader = ({ numItems, total }) => {
	return(
		<header className="app-header row">
			<a className="logo text-dark" href="#">ReStore</a>
			<a className="cart-info">
				<i className="cart-icon fa fa-shopping-cart" />
				{numItems} товаров (${total})
			</a>
		</header>
	);
};

export default AppHeader;