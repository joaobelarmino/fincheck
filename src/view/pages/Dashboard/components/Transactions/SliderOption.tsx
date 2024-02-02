import cn from '../../../../../app/utils/className.ts';
import { useSwiper } from 'swiper/react';

interface SliderOptionProps {
  index: number;
  month: string;
  isActive: boolean;
}
function SliderOption({ index, month, isActive }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      className={cn('w-full rounded-full h-12 text-gray-800 tracking-[-0.5px] font-medium', isActive && 'bg-white')}
      onClick={() => swiper.slideTo(index, 400)}
    >
      {month}
    </button>
  );
}

export default SliderOption;