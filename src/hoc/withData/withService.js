import React, { Component } from 'react';
import Spinner from '../../components/Spinner';

const withData = Wrapper => {
	return class extends Component {
		state = {
			data: null,
		};

		componentDidMount() {
			const { getData } = this.props;

			getData().then(data => {
				this.setState({ data });
			});
		}

		render() {
			const { data } = this.state;
			if (!data) {
				return <Spinner />;
			}

			return <Wrapper {...this.props} data={data} />;
		}
	};
};

export default withData;