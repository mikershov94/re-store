import React from 'react';
import BookListContainer from './../../containers/book-list-container';
import ShoppingCartContainer from './../../containers/shopping-cart-container';

const Home = () => {
	return(
		<div>
			<BookListContainer />
			<ShoppingCartContainer />
		</div>
	);
};

export default Home;