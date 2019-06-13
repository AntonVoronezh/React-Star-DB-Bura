import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import swapiService from '../../services/swapiService';
import './PeoplePage.css';

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

		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onItemSelected={this.onPersonSelected} />
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson} />
					<ErrorButton />
				</div>
			</div>
		);
	}
}
