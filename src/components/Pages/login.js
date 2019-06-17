import React from 'react';

const Login = ({ onLogin }) => {
	return (
		<div>
			<button onClick={onLogin}> LogIn</button>
		</div>
	);
};

export default Login;
