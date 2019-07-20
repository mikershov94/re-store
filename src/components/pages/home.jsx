import React from 'react';
import BookList from './../book-list';
import ShoppingCartTable from './../shopping-cart-table';

const Home = () => {
	return(
		<div>
			<BookList />
			<ShoppingCartTable />
		</div>
	);
};

export default Home;