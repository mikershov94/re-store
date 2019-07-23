import React from 'react';
import BookListItem from './../book-list-item';

import './book-list.sass';

const BookList = ({ books, onAddToCart }) => {
	return(
			<div>
				{
					books.map((book) => {
						return(
							<div key={book.id} >
								<BookListItem book={book}
															onAddToCart={() => onAddToCart(book.id)} />
							</div>
						);
					})
				}
			</div>
		);
};

export default BookList;