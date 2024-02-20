import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import cn from '../../../app/utils/className.ts';
import { DropdownMenuProps } from './types';

export default function DropdownMenuContent({ children, className, side = 'bottom' }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        collisionPadding={16}
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_8px_rgba(0,0,0,0.10)] data-[side=bottom]:animate-slide-up-and-fade data-[side=top]:animate-slide-down-and-fade z-10',
          className
        )}
        side={side}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}
