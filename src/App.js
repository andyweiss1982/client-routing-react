import React from 'react';
import { Link, useRouter } from './Router';
import './style.css';

const App = () => {
  const page = useRouter();
  return (
    <>
      <header>
        <nav>
          <Link to="/">All Todos</Link>
          <Link to="/todos/1">Todo 1</Link>
          <Link to="/todos/2">Todo 2</Link>
          <Link to="/bananas">Go Bananas</Link>
        </nav>
      </header>
      <main>{page}</main>
    </>
  );
};

export default App;
