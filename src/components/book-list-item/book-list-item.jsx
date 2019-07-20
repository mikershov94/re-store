import React from 'react';

import './book-list-item.sass';

const BookListItem = ({ book }) => {
	const { title, author, coverImage, price } = book;
	return(
		<div className="d-flex booklist-item">
			<div className="book-img">
				<img src={coverImage} alt="coverImage" />
			</div>
			<div className="flex-column ml-3 mt-2">
				<a className="book-title" href="#">{title}</a>
				<div>{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info btn-card">
					Добавить в корзину
				</button>
			</div>
		</div>
	);
};

export default BookListItem;