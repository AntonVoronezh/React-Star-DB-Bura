import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { SwapiProvider } from '../../services/swapiContext';
import SwapiServises from '../../services/swapiService';
import DummySwapiService from '../../services/DummySwapiService';
import { Login, Secret } from '../Pages';
import './App.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		hasError: false,
		swapiService: new DummySwapiService(),
		isLoggedIn: false,
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

	onChangeHandler = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiServises ? DummySwapiService : SwapiServises;
			console.log(Service.name);
			return {
				swapiService: new Service(),
			};
		});
	};

	onLogin = () => {
		this.setState({ isLoggedIn: true });
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<SwapiProvider value={this.state.swapiService}>
				<BrowserRouter>
					<Header onChangeHandler={this.onChangeHandler} />
					{planet}
					<button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					<ErrorButton />

					<Route path="/" exact render={() => <h2>Welcome to StarDB</h2>} />
					<Route path="/people" exact component={PeoplePage} />
					{/* <Route path="/people/:id" render={({match}) => <ItemDetails id={match.params.id}/>}  /> */}
					<Route path="/planets" component={PlanetsPage} />
					<Route path="/starships" component={StarshipsPage} />
					<Route
						path="/login"
						render={() => <Login onLogin={this.onLogin} isLoggedIn={this.state.isLoggedIn} />}
					/>
					<Route path="/secret" render={() => <Secret isLoggedIn={this.state.isLoggedIn} />} />
				</BrowserRouter>
			</SwapiProvider>
		);
	}
}
