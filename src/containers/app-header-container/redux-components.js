const mapStateToProps = (state) => {
	return {
		items: state.shoppingCart.cartItems,
		total: state.shoppingCart.orderTotal
	};
};

export { mapStateToProps };