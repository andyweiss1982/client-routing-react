import AllItems from './pages/AllItems';
import SingleItem from './pages/SingleItem';

// all matches must be exact except for named parameters
export const routes = {
  '/': AllItems,
  '/items/:id': SingleItem
};
