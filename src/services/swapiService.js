export default class swapiServises {
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
		return response.results.map(this._transformPerson);
	}

	async getPersonById(id) {
		const response = await this.getResourse(`/people/${id}`);
		return this._transformPerson(response);
	}

	async getAllStarships() {
		const response = await this.getResourse('/starships/');
		return response.results.map(this._transformStarship);
	}

	async getStarshipById(id) {
		const response = await this.getResourse(`/starships/${id}`);
		return this._transformStarship(response);
	}

	async getAllPlanets() {
		const response = await this.getResourse('/planets/');
		return response.results.map(this._transformPlanet);
	}

	async getPlanetById(id) {
		const response = await this.getResourse(`/planets/${id}`);
		return this._transformPlanet(response);
	}

	_extractId(url) {
		// https://regex101.com/
		const idRegExp = /\/([0-9]*)\/$/;
		return url.match(idRegExp)[1];
	}

	_transformPlanet(planet) {
		return {
			id: this._extractId(planet.url),
			diameter: planet.diameter,
			population: planet.population,
			name: planet.name,
			rotationPeriod: planet.rotation_period,
		};
	}

	_transformStarship(starship) {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity,
		};
	}

	_transformPerson(person) {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor,
		};
	}
}
