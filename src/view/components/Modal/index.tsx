import * as Dialog from '@radix-ui/react-dialog';
import cn from '../../../app/utils/className.ts';
import { ModalProps } from './types.ts';
import { Cross2Icon } from '@radix-ui/react-icons';

export function Modal({ children, title, rightAction, onClose, open = false }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn('fixed inset-0 bg-black/80 backdrop-blur-sm z-20', 'data-[state=open]:animate-overlay-show')}
        />

        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-30 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show'
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              className="w-12 h-12 flex items-center justify-center"
              onClick={onClose}
            >
              <Cross2Icon className="w-6 h-6"/>
            </button>
            <h1 className="text-lg font-bold tracking-[-1px]">
              {title}
            </h1>
            <div className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </div>
          </header>

          <main>
            {children}
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
