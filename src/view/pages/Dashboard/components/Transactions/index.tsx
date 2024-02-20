import { FilterIcon } from '../../../../components/icons/FilterIcon.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants.ts';
import SliderOption from './SliderOption.tsx';
import SliderNavigation from './SliderNavigation.tsx';
import TransactionCard from './TransactionCard.tsx';
import useTransactionsController from './useTransactionsController.ts';
import Spinner from '../../../../components/Spinner.tsx';
import emptyState from '../../../../../assets/empty-state.svg';
import { TransactionTypeDropdown } from './TransactionTypeDropdown.tsx';
import { FiltersModal } from './FiltersModal';

function Transactions() {
  const {
    isInitialLoading,
    isLoading,
    transactions,
    isFilterModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal
  } = useTransactionsController();
  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-12 h-12"></Spinner>
        </div>
      )}
      {!isInitialLoading && (
        <>
          <FiltersModal open={isFilterModalOpen} onClose={handleCloseFiltersModal}/>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown/>
              <button onClick={handleOpenFiltersModal}>
                <FilterIcon/>
              </button>
            </div>

            <div className="relative">
              <Swiper
                slidesPerView={3}
                centeredSlides
              >
                <SliderNavigation/>
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption index={index} month={month} isActive={isActive}/>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="mt-4 flex-1 flex flex-col gap-2 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="h-full flex flex-col justify-center items-center">
                <Spinner className="w-10 h-10"/>
              </div>
            )}
            {(!hasTransactions && !isLoading) && (
              <div className="h-full flex flex-col justify-center items-center">
                <img src={emptyState}/>
                <p className="text-gray-700 mt-4">Não encontramos nenhuma transação!</p>
              </div>
            )}
            {(hasTransactions && !isLoading) && (
              <>
                <TransactionCard name="Salário" type="income" date="12/12/2023" category="default" value={3230}/>
                <TransactionCard name="Almoço" type="expense" date="12/12/2023" category="food" value={200}/>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Transactions;
