import React from 'react';


const withService = Wrapped => {
	return props => (
		<Wrapped {...props}/>
	)
};

export default withService;