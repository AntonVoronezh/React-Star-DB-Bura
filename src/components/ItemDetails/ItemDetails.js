import React from 'react';
import './ItemDetails.css';

export default class ItemDetails extends React.Component {
	state = {
		imgUrl: null,
		data: null,
	};

	componentDidMount() {
		const { getImg, id, getById } = this.props;

		getImg(id).then(({ url }) => {
			this.setState({ imgUrl: url });
		});

		// getById(id).then(res => {
		// 	this.setState({ data: { name:'ggggg'} });
		// });
	}

	componentDidUpdate() {
		const { getImg, id } = this.props;

		getImg(id).then(({ url }) => {
			this.setState({ imgUrl: url });
		});
	}

	render() {
		let name = null;

		// if (this.state.data) {
		// 	let { name } = this.state.data;
		// }

		return (
			<div className="person-details card">
				{/* <img className="person-image" src={this.state.imgUrl} alt={name} /> */}

				<div className="card-body">
					{/* <h4>{name}</h4> */}
					<ul className="list-group list-group-flush">
						{React.Children.map(this.props.children, (i, idx) => {
							return <li>{idx}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			{/* <span>{item[field]}</span> */}
		</li>
	);
};

// export { Record };
