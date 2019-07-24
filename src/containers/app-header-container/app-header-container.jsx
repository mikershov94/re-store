import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './redux-components';
import AppHedaer from './../../components/app-header';

class AppHeaderContainer extends React.Component {
	render() {
		const { items, total } = this.props;
		let numItems = 0;
		items.map(item => {
			return numItems += item.count;
		});
		return <AppHedaer numItems={numItems} total={total} />;
	};
};

export default connect(mapStateToProps)(AppHeaderContainer);