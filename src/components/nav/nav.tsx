import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav: React.FunctionComponent = () => {
  return (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/assessment">Lets look at this assessment.</Link>
          <Link to="/404">We have a 404 page!</Link>
      </nav>
  );
};

export default Nav;
// 