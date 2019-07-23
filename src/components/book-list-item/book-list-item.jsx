import React from 'react';

import './book-list-item.sass';

const BookListItem = ({ book, onAddToCart }) => {
	const { title, author, coverImage, price } = book;
	return(
		<div className="d-flex booklist-item">
			<div className="book-img">
				<img src={coverImage} alt="coverImage" />
			</div>
			<div className="flex-column ml-3 mt-2">
				<div className="book-title">{title}</div>
				<div>{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info btn-card"
								onClick={onAddToCart} >
					Добавить в корзину
				</button>
			</div>
		</div>
	);
};

export default BookListItem;