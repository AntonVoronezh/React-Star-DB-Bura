import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import swapiService from '../../services/swapiService';
import './PeoplePage.css';

const Row = ({ left, right }) => {
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
	};

	onPersonSelected = id => {
		this.setState({ selectedPerson: id });
	};

	render() {
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

		return (
			<ErrorBoundary>
				<Row left={itemList} right={persDet} />
			</ErrorBoundary>
		);
	}
}

class ErrorBoundary extends Component {
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
