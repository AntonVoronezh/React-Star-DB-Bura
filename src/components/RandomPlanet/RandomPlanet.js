import React, { Component } from 'react';
import './RandomPlanet.css';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {
	static defaultProps = {
		updateInterval: 5000
	}

	static propTypes = {
		updateInterval: (props, propName, componentName) => {
			const value = props[propName];

			if(typeof value === 'number' && !isNaN(value)) {
				return null
			}

			return new TypeError(`${componentName} - ${propName} must be number`)
		}
	}

	swapi = new swapiService();

	state = {
		planet: {},
		isLoading: true,
		isError: false,
	};

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = planet => {
		this.setState({ planet, isLoading: false });
	};

	onError = () => {
		this.setState({ isError: true, isLoading: false });
	};

	updatePlanet = () => {
		const randomNum = Math.ceil(Math.random() * 18) +1 ;

		this.swapi
			.getPlanetById(randomNum)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	render() {
		const { isLoading, isError, planet } = this.state;

		const hasData = !(isLoading || isError);

		const errorMessage = isError ? <ErrorIndicator /> : null;
		const spinner = isLoading ? <Spinner /> : null;
		const content = hasData ? <ViewPlanet {...planet} /> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

const ViewPlanet = ({ id, name, population, rotationPeriod, diameter }) => {
	return (
		<React.Fragment>
			<img
				className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				alt={name}
			/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};
