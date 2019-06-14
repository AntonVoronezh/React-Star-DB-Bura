import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';
import './ErrorBoundary.css';

export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		// console.log('componentDidCatch', error, info);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		return this.props.children;
	}
}
