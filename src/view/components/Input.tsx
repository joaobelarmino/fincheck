import { ComponentProps, forwardRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import cn from '../../app/utils/className.ts';

interface InputProps extends ComponentProps<'input'>{
  name: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
 placeholder, name, id, error, ...props 
}, ref) => {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        name={name}
        id={inputId}
        className={cn('bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-gray-800', error && '!border-red-900')}
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute left-[13px] top-2 text-xs leading-3 text-gray-700 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base transition-all"
      >
        {placeholder}
      </label>
      {error && (
        <div className="flex gap-2 items-center text-red-900 mt-2">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
});

export default Input;
