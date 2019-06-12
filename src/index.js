import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'));

// const getUsers = async url => {
// 	const response = await fetch(url);

// 	if (!response.ok) {
// 		throw new Error(`Could not fetch ${url}, resived ${response.status}`);
// 	}
// 	const body = await response.json();

// 	return body;
// };

// getUsers('https://swapi.co/api/people/1')
// 	.then(body => console.log(body))
// 	.catch(err => console.error('Could not fetch ', err));

class swapiServises {
	_baseUrl = 'https://swapi.co/api';

	async getResourse(url) {
		const response = await fetch(`${this._baseUrl}${url}`);

		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}
		const body = await response.json();

		return body;
	}

	async getAllPeople() {
		const response = await this.getResourse('/people/');
		return response.results;
	}

	getPersonById(id) {
		return this.getResourse(`/people/${id}`);
	}

	async getAllStarships() {
		const response = await this.getResourse('/starships/');
		return response.results;
	}

	getStarshipById(id) {
		return this.getResourse(`/starships/${id}`);
	}

	async getAllPlanets() {
		const response = await this.getResourse('/planets/');
		return response.results;
	}

	getPlanetById(id) {
		return this.getResourse(`/planets/${id}`);
	}
}

const swapi = new swapiServises();

// swapi.getAllPeople()
// .then(body => console.log(body.results))

// swapi.getPersonById(3)
// .then(body => console.log(body))

// swapi.getAllStarships()
// .then(body => console.log(body.results))

// swapi.getStarshipById(3)
// .then(body => console.log(body))

// swapi.getAllPlanets()
// .then(body => console.log(body.results))

// swapi.getPlanetById(3)
// .then(body => console.log(body))
