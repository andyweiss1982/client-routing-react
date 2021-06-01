import { useEffect, useContext } from 'react';

import { LocationContext } from '../context/LocationContext';

const Redirect = ({ to }) => {
  const { navigate } = useContext(LocationContext);

  useEffect(() => {
    window.history.pushState({}, '', to);
    navigate(to);
  }, []);

  return null;
};

export default Redirect;
