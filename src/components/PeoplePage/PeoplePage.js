import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import swapiService from '../../services/swapiService';
import './PeoplePage.css';

const Row = ({left, right}) => {
	return (
		<div className="row mb2">
			<div className="col-md-6">{left}</div>
			<div className="col-md-6">{right}</div>
		</div>
	);
};

export default class PeoplePage extends Component {
	swapi = new swapiService();

	state = {
		selectedPerson: 5,
		hasError: false,
	};

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		console.log('componentDidCatch', error, info);
	}

	onPersonSelected = id => {
		this.setState({ selectedPerson: id });
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapi.getAllPeople}
				renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
			/>
		);

		const persDet = (
			<>
				<PersonDetails personId={this.state.selectedPerson} />
				 <ErrorButton />
			 </>
		);

		return <Row left={itemList} right={persDet} />;
	}
}

