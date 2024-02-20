import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { DropdownMenuProps } from './types.ts';

export default function DropdownMenuTrigger({ children }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Trigger>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}
