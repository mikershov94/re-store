const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		];
	};

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

const updateTotal = (cartItems, books) => {
	let total = 0;
	cartItems.map((item) => {
		const book = books.find((book) => book.id === item.id);
		total += item.count*book.price;
		return total;
	});

	return total;
};

const updateOrder = (state, bookId, quantity = 1) => {
	const { bookList: { books }, shoppingCart: { cartItems }} = state;
	const book = books.find((book) => book.id === bookId)
	const idx = cartItems.findIndex((item) => item.id === bookId);
	const item = cartItems[idx];

	const newItem = updateCartItem(book, item, quantity);
	const newCartItems = updateCartItems(cartItems, newItem, idx)

	return {
		cartItems: newCartItems,
		orderTotal: updateTotal(newCartItems, books),
	};
};

const updateShoppingCart = (state, action) => {
	if (state === undefined) {
		return {
			cartItems: [],
			orderTotal: 0,
		};
	};

	switch (action.type) {
		case 'ADD_BOOK_TO_CART':
			return updateOrder(state, action.payload);

		case 'DECREASE_BOOK_IN_CART': 
			return updateOrder(state, action.payload, -1);
			
		case 'DELETE_BOOKS_FROM_CART':
			const item = state.shoppingCart.cartItems.find((item) => item.id === action.payload);
			return updateOrder(state, action.payload, -item.count);

		default:
			return state.shoppingCart;
	};
};

export default updateShoppingCart;