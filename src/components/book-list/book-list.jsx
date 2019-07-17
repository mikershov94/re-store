import React from 'react';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import { booksLoaded } from './../../actions';
import { withBookstoreService } from './../hoc';
import { compose } from './../../utils';

import './book-list.sass';

class BookList extends React.Component {

	componentDidMount() {
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();

		this.props.booksLoaded(data);
	}

	render() {
		const { books } = this.props;
		return(
			<ul>
				{
					books.map((book) => {
						return(
							<li key={book.id} >
								<BookListItem book={book} />
							</li>
						);
					})
				}
			</ul>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		books: state.books,
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