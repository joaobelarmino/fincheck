import { PlusIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { BankAccountIcon } from '../../../../components/icons/BankAccountIcon.tsx';
import { Expense } from '../../../../components/icons/categories/expense/Expense.tsx';
import { Income } from '../../../../components/icons/categories/income/Income.tsx';

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div
            className="text-white h-12 w-12 bg-teal-900 rounded-full flex items-center justify-center"
          >
            <PlusIcon className="w-6 h-6"/>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side="top">
          <DropdownMenu.Item className="gap-2">
            <Expense/>
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <Income/>
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <BankAccountIcon/>
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
