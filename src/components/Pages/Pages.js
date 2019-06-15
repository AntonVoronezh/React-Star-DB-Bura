import React, { Component } from 'react';
import Page from '../Page';
import swapiService from '../../services/swapiService';
import { Record } from '../ItemDetails/ItemDetails';

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
} = new swapiService();


const PeoplePage = () => {
	return (
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
	);
};






const PlanetsPage = () => {
	return <h1>PlanetsPage</h1>;
};
const StarshipsPage = () => {
	return <h1>StarshipsPage</h1>;
};

export { PeoplePage, PlanetsPage, StarshipsPage };
