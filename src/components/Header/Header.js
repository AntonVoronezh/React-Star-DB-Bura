import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
	return (
		<div className="header d-flex">
			<h3>
				<a href="http">Star DB</a>
			</h3>
			<ul className="d-flex">
				<li>
					<Link to="/people">People</Link>
				</li>
				<li>
					<Link to="/planets">Planets</Link>
				</li>
				<li>
					<Link to="/starships">Starships</Link>
				</li>
			</ul>
			<button className="btn btn-sm btn-primary" onClick={props.onChangeHandler}>
				Change Service
			</button>
		</div>
	);
};

export default Header;
