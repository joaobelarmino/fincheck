import { useContext } from 'react';
import { DashboardContext } from './index.tsx';

function useDashboardContext() {
  return useContext(DashboardContext);
}

export default useDashboardContext;