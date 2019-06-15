import React from 'react';
import Page from '../Page';
import { SwapiConsumer } from '../../services/swapiContext';
import { Record } from '../ItemDetails/ItemDetails';

const PeoplePage = () => {
	return (
		<SwapiConsumer>
			{({ getAllPeople, getPersonImage, getPersonById }) => (
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
			)}
		</SwapiConsumer>
	);
};

const PlanetsPage = () => {
	return (
		<SwapiConsumer>
			{({ getAllPlanets, getPlanetImage, getPlanetById }) => (
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
			)}
		</SwapiConsumer>
	);
};
const StarshipsPage = () => {
	return (
		<SwapiConsumer>
			{({ getAllStarships, getStarshipImage, getStarshipById }) => (
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
			)}
		</SwapiConsumer>
	);
};

export { PeoplePage, PlanetsPage, StarshipsPage };
