import React from 'react';
import './ItemDetails.css';

export default class ItemDetails extends React.Component {
	state = {
		imgUrl: null,
		item: null,
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id ||
			this.props.getById !== prevProps.getById) {
			this.updateItem();
		}
	}

	updateItem() {
		const { getImg, id, getById } = this.props;

		if (!id) {
			return;
		}

		getById(id).then(item => {
			this.setState({
				item,
				imgUrl: getImg(id),
			});
		});
	}

	render() {
		const { item, imgUrl } = this.state;

		if (!item) {
			return <span>Select a item from a list</span>;
		}
		return (
			<div className="person-details card">
				<img className="person-image" src={imgUrl} alt="item" />

				<div className="card-body">
					<h4>{item.name}</h4>
					<ul className="list-group list-group-flush">
						{React.Children.map(this.props.children, child => {
							return React.cloneElement(child, { item });
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
			<span>{item[field]}</span>
		</li>
	);
};

// export { Record };
