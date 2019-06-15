import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { SwapiProvider } from '../../services/swapiContext';
import swapiServises from '../../services/swapiService';
import DummySwapiService from '../../services/DummySwapiService';
import './App.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
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
			<SwapiProvider value={new swapiServises()}>
				<Header />
				{planet}
				<button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
				</button>
				<ErrorButton />

				<PeoplePage />

				<PlanetsPage />

				<StarshipsPage />
			</SwapiProvider>
		);
	}
}
