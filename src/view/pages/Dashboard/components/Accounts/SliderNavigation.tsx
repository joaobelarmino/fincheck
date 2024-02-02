import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountsSlideNavigationProps {
  slot: string;
  isBeginning: boolean;
  isEnd: boolean;
}

function SliderNavigation({ slot, isBeginning, isEnd }: AccountsSlideNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="text-white flex justify-between items-center mb-4 mt-10 md:mt-0" slot={slot}>
      <strong className="text-lg tracking-[-1px]">Minhas contas</strong>
      <div className="hidden lg:inline-flex">
        <button
          className="py-3 pl-3 pr-2.5 rounded-full hover:enabled:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slidePrev()}
          disabled={isBeginning}
        >
          <ChevronLeftIcon className="w-6 h-6"/>
        </button>
        <button
          className="py-3 pl-3 pr-2.5 rounded-full hover:enabled:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slideNext()}
          disabled={isEnd}
        >
          <ChevronRightIcon className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
}

export default SliderNavigation;