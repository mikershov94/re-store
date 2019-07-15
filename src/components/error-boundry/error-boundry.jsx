import React from 'react';
import ErrorIndicator from './../error-indicator';

class ErrorBoundry extends React.Component {
	constructor() {
		super(props);
		this.state = {
			hasErrors: false,
		};
	}

	componentDidCatch() {
		this.setState({
			hasErrors: true,
		})
	}

	render() {
		if (this.state.hasErrors) {
			return <ErrorIndicator />;
		};

		return this.props.children;
	}
}

export default ErrorBoundry;