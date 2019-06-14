import React, { Component } from 'react';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import './PersonDetails.css';

export default class PersonDetails extends Component {
	swapi = new swapiService();

	state = {
		person: null,
	};

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.setState({ person: null });
			this.updatePerson();
		}
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}

		this.swapi.getPersonById(personId).then(person => this.setState({ person }));
	}

	render() {
		const { person } = this.state;

		const spinner = !person ? <Spinner /> : null;
		const personDetailsView = person ? <PersonDetailsView {...person} /> : null;

		return (
			<React.Fragment>
				{spinner}
				{personDetailsView}
			</React.Fragment>
		);
	}
}

// const PersonDetailsView = ({ id, name, gender, birthYear, eyeColor }) => {
// 	return (
// 		<div className="person-details card">
// 			<img
// 				className="person-image"
// 				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
// 				alt={name}
// 			/>

// 			<div className="card-body">
// 				<h4>{name}</h4>
// 				<ul className="list-group list-group-flush">
// 					<li className="list-group-item">
// 						<span className="term">Gender</span>
// 						<span>{gender}</span>
// 					</li>
// 					<li className="list-group-item">
// 						<span className="term">Birth Year</span>
// 						<span>{birthYear}</span>
// 					</li>
// 					<li className="list-group-item">
// 						<span className="term">Eye Color</span>
// 						<span>{eyeColor}</span>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };
