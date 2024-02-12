import { formatCurrency } from '../../../../../app/utils/formatCurrency.ts';
import { BankAccountTypeIcon } from '../../../../components/icons/BankAccountTypeIcon';
import { iconsMap } from '../../../../components/icons/BankAccountTypeIcon/iconsMap.ts';
import cn from '../../../../../app/utils/className.ts';
import useAccountsController from './useAccountsController.ts';

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  accountType: keyof typeof iconsMap;
}

function AccountCard({ name, color, balance, accountType }: AccountCardProps) {
  const { areValuesVisible } = useAccountsController();

  return (
    <div
      className="bg-gray-300 rounded-lg h-[200px] p-4 flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={accountType} />
        <span className="font-medium text-gray-800 tracking-[-0.5px] mt-4 block">{name}</span>
      </div>
      <div>
        <span
          className={cn(
            'font-medium text-gray-800 tracking-[-0.5px] mt-4 block',
            areValuesVisible && 'blur-sm select-none'
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}

export default AccountCard;