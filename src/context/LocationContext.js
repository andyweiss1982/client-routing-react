import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

export const LocationContext = createContext({
  location: decodeURIComponent(window.location.pathname),
  navigate: () => {}
});

const LocationContextProvider = ({ children }) => {
  const [location, navigate] = useState(() =>
    decodeURIComponent(window.location.pathname)
  );

  const handlePopState = useCallback(
    () => navigate(decodeURIComponent(window.location.pathname)),
    [navigate]
  );

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

export default LocationContextProvider;
