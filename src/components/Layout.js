import React from 'react';

import { useRouter } from '../hooks/useRouter';
import { routes } from '../routes';
import Link from './Link';

const Layout = () => (
  <>
    <header>
      <nav>
        <Link to="/">All Todos</Link>
        <Link to="/todos/1">Todo 1</Link>
        <Link to="/todos/2">Todo 2</Link>
        <Link to="/bananas">Go Bananas</Link>
      </nav>
    </header>
    <main>{useRouter(routes)}</main>
  </>
);

export default Layout;
