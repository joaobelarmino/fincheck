import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon.tsx';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../components/icons/IncomeIcon.tsx';
import { ExpensesIcon } from '../../../../components/icons/ExpensesIcon.tsx';

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center gap-2">
          <TransactionsIcon/>
          <span className="text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
          <ChevronDownIcon/>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item className="gap-2">
          <IncomeIcon/>
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon/>
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon/>
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
