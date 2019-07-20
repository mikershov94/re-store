import React from 'react';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import { booksLoaded, booksRequested, errorLoading } from './../../actions';
import { withBookstoreService } from './../hoc';
import { compose } from './../../utils';
import Spinner from './../spinner';
import ErrorIndicator from './../error-indicator';

import './book-list.sass';

class BookList extends React.Component {

	componentDidMount() {
		const { bookstoreService, booksLoaded, booksRequested, errorLoading } = this.props;	//деструктурируем объект-сервис (экземпляр класса работы с API) из props
		booksRequested();
		bookstoreService.getBooks()
			.then((data) => booksLoaded(data))
			.catch((err) => errorLoading(err));
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

const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch(booksLoaded(newBooks));
		},
		booksRequested: () => {
			dispatch(booksRequested());
		},
		errorLoading: (error) => {
			dispatch(errorLoading(error));
		},
	}
};

export default compose(
									withBookstoreService(),
									connect(mapStateToProps, mapDispatchToProps)
								)(BookList);