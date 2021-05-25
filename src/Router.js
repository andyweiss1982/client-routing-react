import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { routes } from './routes';
import NotFound from './pages/NotFound';

const LocationContext = createContext({
  location: window.location.pathname,
  navigate: () => {}
});

export const Router = ({ children }) => {
  const [location, navigate] = useState(window.location.pathname);

  const handlePopState = useCallback(() => navigate(window.location.pathname), [
    navigate
  ]);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handlePopState]);

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useRouter = () => {
  const { location } = useContext(LocationContext);

  for (const [path, Page] of Object.entries(routes)) {
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
      return <Page {...params} />;
    }
  }

  return <NotFound />;
};

export const Link = ({ to, children }) => {
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
