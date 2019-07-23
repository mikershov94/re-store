const booksRequested = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST',
	};
}

const booksLoaded = (newBooks) => {
	return {
		type: 'FETCH_BOOKS_SUCCESS',
		payload: newBooks,
	};
};

const errorLoading = (error) => {
	return {
		type: 'FETCH_BOOKS_FAILURE',
		payload: error,
	};
};

const fetchBooks = (bookstoreService, dispatch) => () => {
				dispatch(booksRequested());
				bookstoreService.getBooks()
					.then((data) => dispatch(booksLoaded(data)))
					.catch((err) => dispatch(errorLoading(err)));
};

const addBookToCart = (idBook) => {
	return {
		type: 'ADD_BOOK_TO_CART',
		payload: idBook,
	};
};

export {
	fetchBooks,
	addBookToCart,
}