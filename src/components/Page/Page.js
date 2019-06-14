import React, { Component } from './node_modules/react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary';
import Row from '../Row';
import './PeoplePage.css';

export default class Page extends Component {
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

		const details = (
			<React.Fragment>
				<ItemDetails personId={this.state.selectedPerson} />
				<ErrorButton />
			</React.Fragment>
		);

		return (
			<ErrorBoundary>
				<Row left={itemList} right={details} />
			</ErrorBoundary>
		);
	}
}
