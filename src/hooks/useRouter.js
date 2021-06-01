import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import NotFound from '../pages/NotFound';

export const useRouter = routes => {
  const { location } = useContext(LocationContext);
  const locationParts = location.split('/').filter(Boolean);

  for (const [path, Page] of Object.entries(routes)) {
    const pathParts = path.split('/').filter(Boolean);
    if (
      locationParts.length === pathParts.length &&
      locationParts.every((locationPart, index) => {
        const pathPart = pathParts[index];
        return pathPart === locationPart || pathPart.startsWith(':');
      })
    ) {
      const params = pathParts.reduce(
        (result, pathPart, index) => ({
          ...result,
          ...(pathPart.startsWith(':') && {
            [pathPart.substring(1)]: locationParts[index]
          })
        }),
        {}
      );
      return <Page {...params} />;
    }
  }
  return <NotFound />;
};
