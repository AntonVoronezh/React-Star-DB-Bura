import React from 'react';
import { SwapiConsumer } from '../../services/swapiContext';

const withService = Wrapped => {
	return props => (
		<SwapiConsumer>
			{
				SwapiService => (
					<Wrapped {...props} SwapiService={SwapiService}/>
				)
			}
		</SwapiConsumer>
		
	)
};

export default withService;