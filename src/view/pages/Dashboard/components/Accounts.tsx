import { EyeIcon } from '../../../components/icons/EyeIcon.tsx';
import AccountCard from './AccountCard.tsx';
import { useState } from 'react';
import { iconsMap } from '../../../components/icons/BankAccountTypeIcon/iconsMap.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AccountsSlideNavigation from './AccountsSlideNavigation.tsx';

interface BankAccountsData {
  name: string;
  balance: number;
  color: string;
  bankAccountType: keyof typeof iconsMap;
}

function Accounts() {
  const [bankAccounts] = useState<BankAccountsData[]>([
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

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div className="text-white">
        <span className="tracking-[-0.5px] block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px]">R$ 1.000,00</strong>
          <button className="w-8 h-8 flex items-center justify-center" type="button">
            <EyeIcon open={true} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
            <Swiper
              spaceBetween={16}
              slidesPerView={2.1}
            >
            <AccountsSlideNavigation slot="container-start"/>

            <div>
              {bankAccounts.map(bankAccount => (
                <SwiperSlide>
                  <AccountCard
                    color={bankAccount.color}
                    name={bankAccount.name}
                    balance={bankAccount.balance}
                    accountType={bankAccount.bankAccountType}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Accounts;