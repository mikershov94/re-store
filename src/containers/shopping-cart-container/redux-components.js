import { deleteBooksFromCart, addBookToCart, decreaseBookInCart } from './../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
	return {
		items: cartItems,
		total: orderTotal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onIncrease: addBookToCart,
		onDecrease: decreaseBookInCart,
		onDelete: deleteBooksFromCart,
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps,
};