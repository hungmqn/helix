import { useState, useEffect } from 'react';
export const useCurrentPath = () => {
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    if (window.location.pathname !== url) {
      setUrl(window.location.pathname);
    }
  }, [url]);
  return url;
};
