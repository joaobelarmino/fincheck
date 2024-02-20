import { Modal } from '../../../../../components/Modal';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Button from '../../../../../components/Button.tsx';
import { useFiltersModal } from './useFiltersModal.ts';
import cn from '../../../../../../app/utils/className.ts';

interface FiltersModalProps {
  open: boolean;

  onClose(): void;
}

const mockedAccounts = [
  {
    id: '123',
    name: 'Nubank',
  },
  {
    id: '456',
    name: 'XP Investimentos'
  },
  {
    id: '789',
    name: 'Dinheiro'
  }
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    handleSelectBankAccount,
    handleChangeYear,
    selectedBankAccountId,
    selectedYear
  } = useFiltersModal();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <h2 className="font-bold text-lg tracking-[-1px] text-gray-800">Conta</h2>

        <div className="space-y-2 mt-2">
          {mockedAccounts.map(account => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccount(account.id)}
              className={cn(
                'p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-100',
                account.id === selectedBankAccountId && '!bg-gray-200'
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-lg tracking-[-1px] text-gray-800">Ano</h3>

        <div className="mt-2 w-52 text-gray-800 flex items-center justify-between">
          <button className="p-2 w-12 h-12 text-left" onClick={() => handleChangeYear(-1)}>
            <ChevronLeftIcon className="w-6 h-6"/>
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
          </div>

          <button className="p-2 w-12 h-12 text-left" onClick={() => handleChangeYear(1)}>
            <ChevronRightIcon className="w-6 h-6"/>
          </button>
        </div>
      </div>
      <Button className="w-full mt-10">
        Aplicar filtros
      </Button>
    </Modal>
  );
}
