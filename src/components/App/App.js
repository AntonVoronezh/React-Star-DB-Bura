import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
// import ItemList from '../ItemList';
// import PersonDetails from '../PersonDetails';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';


import './App.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: 5,
		hasError: false,
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	toggleRandomPlanet = () => {
		this.setState(state => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};



	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div>
				<Header />
				{planet}
				<button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
				</button>
				<ErrorButton />
				<PeoplePage />
				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
						<ErrorButton />
					</div>
				</div> */}
			</div>
		);
	}
}
