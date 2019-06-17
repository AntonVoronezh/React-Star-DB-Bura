import React from 'react';

const Secret = ({ isLoggedIn }) => {
	if (isLoggedIn){
        return (
            <div className="jumbotron text-center">
                All secrets!!!
            </div>
        )
	}
	return <p>notttttt</p>;
};

export default Secret;
