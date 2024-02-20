import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import cn from '../../../app/utils/className.ts';
import { DropdownMenuProps } from './types';

interface DropdownMenuItemProps extends DropdownMenuProps {
  onSelect?: () => void;
}

export default function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn('min-h-10 outline-none flex items-center p-2 text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-[12px] transition-colors cursor-pointer', className)}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
