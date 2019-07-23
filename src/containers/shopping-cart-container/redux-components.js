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

export {
	mapStateToProps,
	mapDispatchToProps,
};