import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from './../../components/shopping-cart-table';
import { mapStateToProps, mapDispatchToProps } from './redux-components';

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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);