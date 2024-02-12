import { EyeIcon } from '../../../../components/icons/EyeIcon.tsx';
import AccountCard from './AccountCard.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderNavigation from './SliderNavigation.tsx';
import { formatCurrency } from '../../../../../app/utils/formatCurrency.ts';
import useAccountsController from './useAccountsController.ts';
import cn from '../../../../../app/utils/className.ts';
import Spinner from '../../../../components/Spinner.tsx';
import { PlusIcon } from '@radix-ui/react-icons';

function Accounts() {
  const {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading ,
    accounts,
    toggleValuesVisibility,
    setSliderState,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full">
          <Spinner className="fill-white dark:text-gray-500 h-12 w-12" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="text-white">
            <span className="tracking-[-0.5px] block">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn('text-2xl tracking-[-1px]', areValuesVisible && 'blur-md select-none')}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                type="button"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end">
            {accounts.length === 0 && (
              <>
                <div className="text-white mb-4 mt-10 md:mt-0">
                  <strong className="text-lg tracking-[-1px]">Minhas contas</strong>
                </div>

                <button className="h-52 flex flex-col items-center justify-center border-teal-600 rounded-2xl border-2 border-dashed text-white">
                  <div className="w-11 h-11 rounded-full border-2 border-dashed flex items-center justify-center mb-4">
                    <PlusIcon className="w-6 h-6"/>
                  </div>
                  <span className="font-medium tracking-[-0.5px] block max-w-32 text-center">Cadastre uma nova conta</span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 1024 ? 2.1 : 1.2}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd
                    });
                  }}
                >
                  <SliderNavigation slot="container-start" isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />

                  <div>
                    {accounts.map(bankAccount => (
                      <SwiperSlide key={bankAccount.name}>
                        <AccountCard
                          color={bankAccount.color}
                          name={bankAccount.name}
                          balance={bankAccount.balance}
                          accountType={bankAccount.bankAccountType}
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
              )}
          </div>
        </>
      )}
    </div>
  );
}

export default Accounts;