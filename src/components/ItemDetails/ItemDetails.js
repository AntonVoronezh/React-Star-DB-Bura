import React from 'react';
import './ItemDetails.css';

export default class ItemDetails extends React.Component {
	state = {
		imgUrl: null,
	};

	componentDidMount() {
		const { getImg, id } = this.props;

		getImg(id).then(({url}) => {
			this.setState({ imgUrl:url });
		});
	}

	componentDidUpdate() {
		const { getImg, id } = this.props;

		getImg(id).then(({url}) => {
			this.setState({ imgUrl:url });
		});
	}


	render() {
		const { name, gender, birthYear, eyeColor } = this.props;

		return (
			<div className="person-details card">
				<img className="person-image" src={this.state.imgUrl} alt={name} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
