import { deleteBooksFromCart } from './../../actions';

const mapStateToProps = ({ cartItems, orderTotal }) => {
	return {
		items: cartItems,
		total: orderTotal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrease: (id) => {
			console.log(`Increase ${id}`);
		},
		onDecrease: (id) => {
			console.log(`Decrease ${id}`);
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