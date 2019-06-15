import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Page from '../Page';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import swapiService from '../../services/swapiService';
import { Record } from '../ItemDetails/ItemDetails';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import './App.css';

export default class App extends Component {
	swapi = new swapiService();

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

		const {
			getAllPeople,
			getAllPlanets,
			getAllStarships,
			getPersonImage,
			getPlanetImage,
			getStarshipImage,
			getPersonById,
			getStarshipById,
			getPlanetById,
		} = this.swapi;

		return (
			<div>
				<Header />
				{planet}
				<button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
				</button>
				<ErrorButton />

				<PeoplePage />
				<PlanetsPage />
				<StarshipsPage />

				<Page
					getData={getAllPeople}
					getImg={getPersonImage}
					getById={getPersonById}
					renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
				>
					<Record field="birthYear" label="Birth Year" />
					<Record field="eyeColor" label="Eye Color" />
					<Record field="gender" label="Gender" />
				</Page>

				<Page
					getData={getAllPlanets}
					getImg={getPlanetImage}
					getById={getPlanetById}
					renderItem={({ name, population }) => `${name} (${population})`}
				>
					<Record field="diameter" label="Diameter" />
					<Record field="population" label="Population" />
					<Record field="rotationPeriod" label="Rotation Period" />
				</Page>

				<Page
					getData={getAllStarships}
					getImg={getStarshipImage}
					getById={getStarshipById}
					renderItem={({ name, model }) => (
						<>
							<span>{name}</span>
							<button>{model}</button>
						</>
					)}
				>
					<Record field="model" label="Model" />
					<Record field="manufacturer" label="Manufacturer" />
					<Record field="length" label="Length" />
					<Record field="costInCredits" label="Cost" />
					<Record field="crew" label="Crew" />
					<Record field="passengers" label="Passengers" />
					<Record field="cargoCapacity" label="Cargo Capacity" />
				</Page>
			</div>
		);
	}
}
