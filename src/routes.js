import React from 'react';

import AllItems from './pages/AllItems';
import SingleItem from './pages/SingleItem';

// all matches must be exact except for named parameters
export const routes = {
  // path / component mappings
  '/items': AllItems,
  '/items/:id': SingleItem,
  // redirects
  '/': '/items'
};
