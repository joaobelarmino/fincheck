import { useState } from 'react';
import useWindowWidth from '../../../../../app/hooks/useWindowWidth.ts';
import useDashboardContext from '../../DashboardContext/useDashboardContext.ts';
import { iconsMap } from '../../../../components/icons/BankAccountTypeIcon/iconsMap.ts';

interface BankAccountsData {
  name: string;
  balance: number;
  color: string;
  bankAccountType: keyof typeof iconsMap;
}

function UseAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility } = useDashboardContext();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const [accounts] = useState<BankAccountsData[]>([
    {
      name: 'Nubank',
      color: '#7950f2',
      balance: 12000,
      bankAccountType: 'CHECKING'
    },{
      name: 'XP Investimentos',
      color: '#f1c300',
      balance: 20000,
      bankAccountType: 'INVESTMENT'
    },{
      name: 'Carteira',
      color: '#000',
      balance: 420,
      bankAccountType: 'CASH'
    },
  ]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: false,
    accounts: []
  };
}

export default UseAccountsController;