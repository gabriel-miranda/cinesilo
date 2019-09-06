import React from 'react';
import ActiveSectionContext from './context';

const useActiveSection = () => {
  const section = React.useContext(ActiveSectionContext);
  return section;
};

export default useActiveSection;
