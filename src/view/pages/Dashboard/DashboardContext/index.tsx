import { createContext, useCallback, useState } from 'react';

interface DashboardContextValues {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}
export const DashboardContext = createContext({} as DashboardContextValues);

export function DashboardProvider ({ children } : {children: React.ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}