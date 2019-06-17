import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<button onClick={onLogin}> LogIn</button>
		</div>
	);
};

export default Login;
