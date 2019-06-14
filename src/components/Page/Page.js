import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary';
import Row from '../Row';
import './PeoplePage.css';

export default class Page extends Component {
	state = {
		selectedPerson: 5,
	};

	onPersonSelected = id => {
		this.setState({ selectedPerson: id });
	};

	render() {
		const { getData, renderItem } = this.props;

		const itemList = <ItemList onItemSelected={this.onPersonSelected} getData={getData} renderItem={renderItem} />;

		const details = (
			<React.Fragment>
				<ItemDetails personId={this.state.selectedPerson} />
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
