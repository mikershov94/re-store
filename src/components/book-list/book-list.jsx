import React from 'react';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import { booksLoaded } from './../../actions';
import { withBookstoreService } from './../hoc';
import { compose } from './../../utils';
import Spinner from './../spinner';

import './book-list.sass';

class BookList extends React.Component {

	componentDidMount() {
		const { bookstoreService, booksLoaded } = this.props;	//деструктурируем объект-сервис (экземпляр класса работы с API) из props
		bookstoreService.getBooks()
			.then((data) => booksLoaded(data));
	}

	render() {
		const { books, loading } = this.props;

		if (loading) {
			return <Spinner />;
		}

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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch(booksLoaded(newBooks));
		}
	}
};

export default compose(
									withBookstoreService(),
									connect(mapStateToProps, mapDispatchToProps)
								)(BookList);