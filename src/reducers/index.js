const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 0,
};

const updateCartItems = (cartItems, item, idx) => {
	if (idx < 0) {
		return [
			...cartItems,
			item
		];
	} else {
		return [
			...cartItems.slice(0, idx),
			item,
			...cartItems.slice(idx + 1)
		];
	};
};

const updateCartItem = (book, item = {}) => {
	const { 
		id = book.id,
	 	name = book.title,
	 	count = 0,
	 	cost = 0,
	} = item;

	return {
		id: id,
		name: name,
		count: count + 1,
		cost: cost + book.price 
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				books: state.books,
				loading: true,
				error: null,
			};
		case 'FETCH_BOOKS_SUCCESS':
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null,
			};
		case 'FETCH_BOOKS_FAILURE':
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload,
			};
		case 'ADD_BOOK_TO_CART':
			const bookId = action.payload;
			const book = state.books.find((book) => book.id === bookId)
			const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
			const item = state.cartItems[itemIndex];
			
			const newItem = updateCartItem(book, item);

			return {
				...state,
				cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
			};
		case 'DELETE_BOOKS_FROM_CART':
			const itemId = action.payload;
			const idx = state.cartItems.findIndex((item) => item.id === itemId);
			const after = state.cartItems.slice(0, idx);
			const before = state.cartItems.slice(idx + 1);

			return {
				...state,
				cartItems: [ ...before, ...after ],
			};

		default:
			return state;
	}
};

export default reducer;