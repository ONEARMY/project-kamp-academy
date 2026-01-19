import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function ParentComms() {
  const location = useLocation();

  useEffect(() => {
    if (window.parent !== window) {
      window.parent.postMessage({ pathname: location.pathname }, '*');
    }
  }, [location.pathname]);

  return null;
}
