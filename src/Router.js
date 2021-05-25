import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { routes } from './routes';
import NotFound from './pages/NotFound';

const LocationContext = createContext({
  location: window.location.pathname,
  setLocation: () => {}
});

export const Router = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handlePopState = () => {
    setLocation(window.location.pathname);
  };

  const value = useMemo(() => ({ location, setLocation }), [
    location,
    setLocation
  ]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const { location } = useContext(LocationContext);
  for (const [path, Component] of Object.entries(routes)) {
    if (location === path) {
      return <Component />;
    }
    const pathParts = path.split('/');
    const locationParts = location.split('/');
    if (
      pathParts.every(
        (part, index) =>
          part === locationParts[index] ||
          (part.startsWith(':') && locationParts[index])
      )
    ) {
      const params = pathParts.reduce(
        (result, part, index) => ({
          ...result,
          ...(part.startsWith(':') && {
            [part.substring(1)]: locationParts[index]
          })
        }),
        {}
      );
      return <Component {...params} />;
    }
  }
  return <NotFound />;
};

export const Link = ({ to, children }) => {
  const { location, setLocation } = useContext(LocationContext);
  const handleClick = event => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    setLocation(to);
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
