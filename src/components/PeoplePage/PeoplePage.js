import React from 'react';

import './PeoplePage.css';

const PeoplePage = () => {
	return (
		<div className="row mb2">
			<div className="col-md-6">
				<ItemList onItemSelected={this.onPersonSelected} />
			</div>
			<div className="col-md-6">
				<PersonDetails personId={this.state.selectedPerson} />
				<ErrorButton />
			</div>
		</div>
	);
};

export default PeoplePage;
