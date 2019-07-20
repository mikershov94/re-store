import React from 'react';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import { booksLoaded } from './../../actions';
import { withBookstoreService } from './../hoc';
import { compose } from './../../utils';

import './book-list.sass';

class BookList extends React.Component {

	componentDidMount() {
		const { bookstoreService } = this.props;	//деструктурируем объект-сервис (экземпляр класса работы с API) из props
		const data = bookstoreService.getBooks();	//получаем данные методом getBooks объекта-сервиса

		this.props.booksLoaded(data);		//вызываем Action из props, которому передаем полученные данные
	}

	render() {
		const { books } = this.props;
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