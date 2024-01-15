import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

function AccountsSlideNavigation({ slot }: {slot: string}) {
  const swiper = useSwiper();

  return (
    <div className="text-white flex justify-between items-center mb-4" slot={slot}>
      <strong className="text-lg tracking-[-1px]">Minhas contas</strong>
      <div>
        <button
          className="py-3 pl-3 pr-2.5 rounded-full hover:enabled:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slidePrev()}
        >
          <ChevronLeftIcon className="w-6 h-6"/>
        </button>
        <button
          className="py-3 pl-3 pr-2.5 rounded-full hover:enabled:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slideNext()}
        >
          <ChevronRightIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
}

export default AccountsSlideNavigation;