import React, { useContext } from 'react';

import { LocationContext } from '../context/LocationContext';

const Link = ({ to, children }) => {
  const { location, navigate } = useContext(LocationContext);

  const handleClick = event => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    navigate(to);
  };

  return (
    <a
      onClick={handleClick}
      href={to}
      className={location === to ? 'active' : undefined}
    >
      {children}
    </a>
  );
};

export default Link;
