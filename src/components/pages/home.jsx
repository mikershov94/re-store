import React from 'react';
import BookListContainer from './../../containers/book-list-container';
import ShoppingCartTable from './../shopping-cart-table';

const Home = () => {
	return(
		<div>
			<BookListContainer />
			<ShoppingCartTable />
		</div>
	);
};

export default Home;