export default class swapiServises {
	_baseUrl = 'https://swapi.co/api';
	_imgUrl = 'https://starwars-visualguide.com/assets/img';

	getResourse = async url => {
		const response = await fetch(`${this._baseUrl}${url}`);

		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, resived ${response.status}`);
		}
		const body = await response.json();

		return body;
	};

	getAllPeople = async () => {
		const response = await this.getResourse('/people/');
		return response.results.map(this._transformPerson);
	};

	getPersonById = async id => {
		const response = await this.getResourse(`/people/${id}`);
		return this._transformPerson(response);
	};

	getAllStarships = async () => {
		const response = await this.getResourse('/starships/');
		return response.results.map(this._transformStarship);
	};

	getStarshipById = async id => {
		const response = await this.getResourse(`/starships/${id}`);
		return this._transformStarship(response);
	};

	getAllPlanets = async () => {
		const response = await this.getResourse('/planets/');
		return response.results.map(this._transformPlanet);
	};

	getPlanetById = async id => {
		const response = await this.getResourse(`/planets/${id}`);
		return this._transformPlanet(response);
	};

	getPersonImgUrl = async id => {
		const response = await this.getResourse(`/characters/${id}.jpg`);
		return response;
	};

	_extractId(url) {
		// https://regex101.com/
		const idRegExp = /\/([0-9]*)\/$/;
		return url.match(idRegExp)[1];
	}

	_transformPlanet = planet => {
		return {
			id: this._extractId(planet.url),
			diameter: planet.diameter,
			population: planet.population,
			name: planet.name,
			rotationPeriod: planet.rotation_period,
		};
	};

	_transformStarship = starship => {
		return {
			id: this._extractId(starship.url),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity,
		};
	};

	_transformPerson = person => {
		return {
			id: this._extractId(person.url),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		};
	};
}
