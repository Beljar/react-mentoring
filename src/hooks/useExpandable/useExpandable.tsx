import * as React from 'react';

export const useExpandable: () => [React.RefObject<HTMLDivElement>, boolean, (val: boolean) => void] = () => {
  const [expanded, setExpanded] = React.useState(false);

  const menuRef: React.RefObject<HTMLDivElement> = React.useRef();

  const clickListener = React.useCallback((e) => {
    if (!menuRef?.current?.contains(e.target)) {
      setExpanded(false);
    }
  }, []);

  React.useEffect(() => {
    if (expanded) {
      document.addEventListener('click', clickListener);
    }
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, [expanded]);

  return [menuRef, expanded, setExpanded];
};
