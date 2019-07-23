import { fetchBooks, addBookToCart } from './../../actions';

const mapStateToProps = (state) => {
	return {
		books: state.books,
		loading: state.loading,
		error: state.error,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddToCart: (id) => {
			dispatch(addBookToCart(id));
		},
	}
};

export {
	mapStateToProps,
	mapDispatchToProps,
};