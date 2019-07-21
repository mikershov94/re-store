import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from './../../components/shopping-cart-table';

class ShoppingCartContainer extends React.Component {

	render() {
		const { items, total, onIncrease, onDecrease, onDelete } = this.props;
		return <ShoppingCartTable items={items}
															total={total}
															onIncrease={onIncrease}
															onDecrease={onDecrease}
															onDelete={onDelete} />;
	}
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
	return {
		items: cartItems,
		total: orderTotal,
	};
};

const mapDispatchToProps = () => {
	return {
		onIncrease: (id) => {
			console.log(`Increase ${id}`);
		},
		onDecrease: (id) => {
			console.log(`Decrease ${id}`);
		},
		onDelete: (id) => {
			console.log(`Delete ${id}`);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);