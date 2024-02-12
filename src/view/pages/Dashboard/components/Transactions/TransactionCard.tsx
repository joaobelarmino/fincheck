import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon.tsx';
import { formatCurrency } from '../../../../../app/utils/formatCurrency.ts';
import { iconsMap } from '../../../../components/icons/categories/iconsMap.ts';
import cn from '../../../../../app/utils/className.ts';
import useTransactionsController from './useTransactionsController.ts';

interface CardProps {
  category: keyof (typeof iconsMap.expense);
  type: 'income' | 'expense';
  name: string;
  date: string;
  value: number;
}

function TransactionCard({ category, date, value, type, name }: CardProps) {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className="p-4 flex justify-between items-center rounded-2xl bg-white gap-4">

      <div className="flex flex-1 items-center gap-3">
        <CategoryIcon category={category} type={type}/>

        <div className="flex flex-col">
          <strong className="tracking-[-0.5px] font-bold">{name}</strong>
          <span className="text-sm text-gray-600">{date}</span>
        </div>
      </div>

      <span className={cn('text-red-800 tracking-[-0.5px] font-medium', type === 'income' && 'text-green-800', areValuesVisible && 'blur-sm')}>
        {(type === 'income' ? '+ ' : '- ') + formatCurrency(value)}
      </span>

    </div>
  );
}

export default TransactionCard;