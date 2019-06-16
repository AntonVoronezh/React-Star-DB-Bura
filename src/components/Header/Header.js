import React from 'react';

import './Header.css';

const Header = props => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="http">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="http">People</a>
        </li>
        <li>
          <a href="http">Planets</a>
        </li>
        <li>
          <a href="http">Starships</a>
        </li>
      </ul>
      <button className="btn btn-sm btn-primary" onClick={props.onChangeHandler}>Change Service</button>
    </div>
  );
};

export default Header;