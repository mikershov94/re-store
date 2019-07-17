import React, { Fragment } from 'react';

import './book-list-item.sass';

const BookListItem = ({ book }) => {
	const { title, author } = book;
	return(
		<Fragment>
			<span>{title}</span>
			<span>{author}</span>
		</Fragment>
	);
};

export default BookListItem;