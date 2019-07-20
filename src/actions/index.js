const booksRequested = () => {
	return {
		type: 'BOOKS_REQUESTED',
	};
}

const booksLoaded = (newBooks) => {
	return {
		type: 'BOOKS_LOADED',
		payload: newBooks,
	};
};

const errorLoading = (error) => {
	return {
		type: 'ERROR_LOADING',
		payload: error,
	};
}

export {
	booksRequested,
	booksLoaded,
	errorLoading,
}