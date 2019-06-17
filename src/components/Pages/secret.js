import React from 'react';
import { Redirect } from 'react-router-dom';

const Secret = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return <div className="jumbotron text-center">All secrets!!!</div>;
	}
	return <Redirect to="/login" />;
};

export default Secret;
