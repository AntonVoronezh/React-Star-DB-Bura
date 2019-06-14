import React, { Component } from './node_modules/react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';

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

// class ErrorBoundary extends Component {
// 	state = {
// 		hasError: false,
// 	};

// 	componentDidCatch(error, info) {
// 		this.setState({ hasError: true });
// 		// console.log('componentDidCatch', error, info);
// 	}

// 	render() {
// 		if (this.state.hasError) {
// 			return <ErrorIndicator />;
// 		}

// 		return this.props.children;
// 	}
// }
