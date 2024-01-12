import { type ComponentProps } from 'react';
import cn from '../../app/utils/className.ts';
import Spinner from './Spinner.tsx';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export default function Button({
 className, isLoading, disabled, ...props 
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'w-full lg:w-auto px-6 h-12 flex justify-center items-center bg-teal-900 rounded-2xl text-white hover:bg-teal-800 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all', className)
      }
    >
      {isLoading ? (
        <Spinner className="w-6 h-6"/>
      ) : (
        props.children
      )}
    </button>
  );
}
