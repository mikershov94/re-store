import React from 'react';
import BookList from './../../components/book-list';
import { connect } from 'react-redux';
import { fetchBooks } from './../../actions';
import { withBookstoreService } from './../../components/hoc';
import { compose } from './../../utils';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';

class BookListContainer extends React.Component {

	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error } = this.props;

		if (loading) {
			return <Spinner />;
		};

		if (error) {
			return <ErrorIndicator />;
		};

		return <BookList books={books} />
	}
};

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
	}
};

export default compose(
									withBookstoreService(),
									connect(mapStateToProps, mapDispatchToProps)
								)(BookListContainer);