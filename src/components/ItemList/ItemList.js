import React, { Component } from 'react';
import Spinner from '../Spinner';
import './ItemList.css';

const ItemList = props => {
	const renderItems = arr => {
		return arr.map(item => {
			const { id } = item;

			let label;

			if (props.children) {
				label = props.children(item);
			} else {
				label = props.renderItem(item);
			}
			return (
				<li key={id} className="list-group-item" onClick={() => props.onItemSelected(id)}>
					{label}
				</li>
			);
		});
	};

	const items = renderItems(props.data);

	return <ul className="item-list list-group">{items}</ul>;
};

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

export default withData(ItemList);

// -----------------------------------
// const f = () => {
// 	return class extends Component {
// 		render() {
// 			return <h1>ddddd</h1>;
// 		}
// 	};
// };

// export default f();
// -----------------------------------

// export default class ItemList extends Component {
// 	state = {
// 		itemList: null,
// 	};

// 	componentDidMount() {
// 		const { getData } = this.props;

// 		getData().then(itemList => {
// 			this.setState({ itemList });
// 		});
// 	}

// 	renderItems(arr) {
// 		return arr.map(item => {
// 			const { id } = item;

// 			let label;

// 			if (this.props.children) {
// 				label = this.props.children(item);
// 			} else {
// 				label = this.props.renderItem(item);
// 			}
// 			return (
// 				<li key={id} className="list-group-item" onClick={() => this.props.onItemSelected(id)}>
// 					{label}
// 				</li>
// 			);
// 		});
// 	}

// 	render() {
// 		const { itemList } = this.state;
// 		if (!itemList) {
// 			return <Spinner />;
// 		}

// 		const items = this.renderItems(itemList);

// 		return <ul className="item-list list-group">{items}</ul>;
// 	}
// }
