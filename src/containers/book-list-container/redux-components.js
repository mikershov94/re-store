import { fetchBooks, addBookToCart } from './../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		books: state.bookList.books,
		loading: state.bookList.loading,
		error: state.bookList.error,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return bindActionCreators({
		fetchBooks: fetchBooks(bookstoreService),
		onAddToCart: addBookToCart,
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps,
};