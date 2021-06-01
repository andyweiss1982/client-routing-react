import React from 'react';

import { useRouter } from '../hooks/useRouter';
import { routes } from '../routes';
import Link from './Link';

const Layout = () => (
  <>
    <header>
      <nav>
        <Link to="/items">All Items</Link>
        <Link to="/items/1">Item 1</Link>
        <Link to="/items/2">Item 2</Link>
        <Link to="/bananas">Go Bananas</Link>
      </nav>
    </header>
    <main>{useRouter(routes)}</main>
  </>
);

export default Layout;
