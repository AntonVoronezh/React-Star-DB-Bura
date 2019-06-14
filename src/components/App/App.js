import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Page from '../Page';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import swapiService from '../../services/swapiService';
import { Record } from '../ItemDetails/ItemDetails';

import './App.css';

export default class App extends Component {
	swapi = new swapiService();

	state = {
		showRandomPlanet: true,
		// selectedPerson: 5,
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
			getPersonImgUrl,
			getPlanetsImgUrl,
			getStarshipsImgUrl,
			getPersonById,
			getStarshipById,
			getPlanetById
		} = this.swapi;

		return (
			<div>
				<Header />
				{planet}
				<button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
				</button>
				<ErrorButton />

				<Page
					getData={getAllPeople}
					getImg={getPersonImgUrl}
					getById={getPersonById}
					renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
				>
					<Record field="birthYear" label="Birth Year" />
					<Record field="birthYear" label="Birth Year" />
				</Page>

				<Page
					getData={getAllPlanets}
					getImg={getPlanetsImgUrl}
					renderItem={({ name, population }) => `${name} (${population})`}
				/>

				<Page
					getData={getAllStarships}
					getImg={getStarshipsImgUrl}
					renderItem={({ name, model }) => (
						<>
							<span>{name}</span>
							<button>{model}</button>
						</>
					)}
				/>

				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected} getData={getAllPlanets}>
							{({ name, population }) => `${name} [=${population}=]`}
						</ItemList>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
						<ErrorButton />
					</div>
				</div> */}

				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={getAllStarships}
							renderItem={({ name, model }) => (
								<>
									<span>{name}</span>
									<button>{model}</button>
								</>
							)}
						/>
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
