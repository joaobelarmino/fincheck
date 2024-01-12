import Spinner from './Spinner.tsx';
import Logo from './Logo.tsx';
import { Transition } from '@headlessui/react';

export default function PageLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 w-full h-full bg-teal-900 flex justify-center items-center flex-col gap-6">
        <Logo className="h-10 text-white"/>
        <Spinner className="w-14 h-14 dark:text-white fill-gray-600"/>
      </div>
    </Transition>
  );
}
