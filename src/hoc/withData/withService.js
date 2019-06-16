import React from 'react';
import { SwapiConsumer } from '../../services/swapiContext';

const withService = (Wrapped, mapMethodsToProps) => {
	return props => (
		<SwapiConsumer>
			{SwapiService => {
				const propsService = mapMethodsToProps(SwapiService);

				return <Wrapped {...props} {...propsService} />;
			}}
		</SwapiConsumer>
	);
};

export default withService;
