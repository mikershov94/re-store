import { deleteBooksFromCart, addBookToCart, decreaseBookInCart } from './../../actions';

const mapStateToProps = ({ cartItems, orderTotal }) => {
	return {
		items: cartItems,
		total: orderTotal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrease: (id) => {
			dispatch(addBookToCart(id));
		},
		onDecrease: (id) => {
			dispatch(decreaseBookInCart(id));
		},
		onDelete: (id) => {
			dispatch(deleteBooksFromCart(id));
		},
	};
};

export {
	mapStateToProps,
	mapDispatchToProps,
};