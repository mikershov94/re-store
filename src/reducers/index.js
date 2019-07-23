const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 0,
};

const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		];
	}

	if (idx === -1) {
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

const updateCartItem = (book, item = {}, quantity = 1) => {
	const { 
		id = book.id,
	 	name = book.title,
	 	count = 0,
	 	cost = 0,
	} = item;

	return {
		id,
		name,
		count: count + quantity,
		cost: cost + quantity * book.price,
	};
};

const updateOrder = (state, bookId, quantity = 1) => {
	const { books, cartItems } = state;
	const book = books.find((book) => book.id === bookId)
	const idx = cartItems.findIndex((item) => item.id === bookId);
	const item = cartItems[idx];

	const newItem = updateCartItem(book, item, quantity);

	return {
		...state,
		cartItems: updateCartItems(cartItems, newItem, idx)
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
			return updateOrder(state, action.payload);

		case 'DECREASE_BOOK_IN_CART': 
			return updateOrder(state, action.payload, -1);
			
		case 'DELETE_BOOKS_FROM_CART':
			const item = state.cartItems.find((item) => item.id === action.payload);
			return updateOrder(state, action.payload, -item.count)

		default:
			return state;
	}
};

export default reducer;