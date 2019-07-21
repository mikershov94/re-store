import React from 'react';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import { fetchBooks } from './../../actions';
import { withBookstoreService } from './../hoc';
import { compose } from './../../utils';
import Spinner from './../spinner';
import ErrorIndicator from './../error-indicator';

import './book-list.sass';

class BookList extends React.Component {

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

		return(
			<div>
				{
					books.map((book) => {
						return(
							<div key={book.id} >
								<BookListItem book={book} />
							</div>
						);
					})
				}
			</div>
		);
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
								)(BookList);