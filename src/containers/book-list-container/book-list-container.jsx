import React from 'react';
import BookList from './../../components/book-list';
import { connect } from 'react-redux';
import { withBookstoreService } from './../../components/hoc';
import { compose } from './../../utils';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';
import { mapStateToProps, mapDispatchToProps } from './redux-components';

class BookListContainer extends React.Component {

	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const {
			books,
			loading,
			error,
			onAddToCart,
		 } = this.props;

		if (loading) {
			return <Spinner />;
		};

		if (error) {
			return <ErrorIndicator />;
		};

		return <BookList books={books}
										 onAddToCart={onAddToCart} />
	}
};

export default compose(
									withBookstoreService(),
									connect(mapStateToProps, mapDispatchToProps)
								)(BookListContainer);