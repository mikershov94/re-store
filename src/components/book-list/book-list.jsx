import React from 'react';
import BookListItem from './../book-list-item';

import './book-list.sass';

const BookList = ({ books }) => {
	return(
			<div>
				{
					books.map((book) => {
						return(
							<div key={book.id} >
								<BookListItem book={book} />
							</div>
						);
					})
				}
			</div>
		);
};

export default BookList;