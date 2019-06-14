import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary';
import Row from '../Row';
import './PeoplePage.css';

export default class Page extends Component {
	state = {
		id: 5,
	};

	onItemSelected = id => {
		this.setState({ id });
	};

	render() {
		const { getData, getImg, renderItem } = this.props;

		const itemList = <ItemList onItemSelected={this.onItemSelected} getData={getData} renderItem={renderItem} />;

		const details = (
			<React.Fragment>
				<ItemDetails id={this.state.id} getImg={getImg} />
				<ErrorButton />
			</React.Fragment>
		);

		return (
			<ErrorBoundary>
				<Row left={itemList} right={details} />
			</ErrorBoundary>
		);
	}
}
