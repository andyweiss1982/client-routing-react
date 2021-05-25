import React from 'react';
import { useLocation, Link } from './Router';
import './style.css';

export default function App() {
  const page = useLocation();
  return (
    <>
      <nav>
        <Link to="/">All Todos</Link>
        <Link to="/todos/1">Todo 1</Link>
        <Link to="/todos/2">Todo 2</Link>
        <Link to="/bananas">Go Bananas</Link>
      </nav>
      <main>{page}</main>
    </>
  );
}
