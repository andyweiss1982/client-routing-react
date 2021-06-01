import React from 'react';

import LocationContextProvider from './context/LocationContext';
import Layout from './components/Layout';

import './style.css';

const App = () => (
  <LocationContextProvider>
    <Layout />
  </LocationContextProvider>
);

export default App;
