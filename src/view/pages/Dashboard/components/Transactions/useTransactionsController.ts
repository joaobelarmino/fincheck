import useDashboardContext from '../../DashboardContext/useDashboardContext.ts';

export default function useTransactionsController() {
    const { areValuesVisible } = useDashboardContext();

    return {
      areValuesVisible,
      isLoading: false,
      isInitialLoading: false,
      transactions: [{}]
    };
}