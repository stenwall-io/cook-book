import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const handleResize = (event: { matches: boolean }) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener('change', handleResize);
    return (): void =>
      mediaQueryList.removeEventListener('change', handleResize);
  }, [query]);

  return matches;
};

export default useMediaQuery;
