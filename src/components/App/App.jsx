import React from 'react';
import { Outlet } from 'react-router-dom';

import useScrollToTop from 'src/hooks/useScrollToTop';

export const App = () => {
  useScrollToTop();
  
  return <Outlet />;
};
