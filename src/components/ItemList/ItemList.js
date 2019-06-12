import React, { Component } from 'react';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import './ItemList.css';

export default class ItemList extends Component {
	swapi = new swapiService();

	state = {
		peopleList: null,
	};

	componentDidMount() {
		this.swapi.getAllPeople().then(peopleList => {
			this.setState({ peopleList });
		});
	}

	renderItems(arr) {
		return arr.map(({ id, name }) => {
			return (
				<li key={id} className="list-group-item" onClick={() => this.props.onItemSelected(id)}>
					{name}
				</li>
			);
		});
	}

	render() {
		const { peopleList } = this.state;
		if (!peopleList) {
			return <Spinner />;
		}

		const items = this.renderItems(peopleList);

		return <ul className="item-list list-group">{items}</ul>;
	}
}
