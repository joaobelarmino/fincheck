import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';

export default function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  );
}
