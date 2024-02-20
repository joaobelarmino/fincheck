import useDashboardContext from '../../DashboardContext/useDashboardContext.ts';
import { useState } from 'react';

export default function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    isLoading: false,
    isInitialLoading: false,
    transactions: [{}],
    isFilterModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  };
}
