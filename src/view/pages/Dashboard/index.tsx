import Logo from '../../components/Logo.tsx';
import UserMenu from '../../components/UserMenu.tsx';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import { DashboardProvider } from './DashboardContext';
import { Fab } from './components/Fab';

export default function Dashboard() {

  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:p-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex justify-between items-center">
          <Logo className="text-teal-900 h-6"/>
          <UserMenu/>
        </header>
        <main className="flex flex-1 flex-col md:flex-row gap-4 max-h-full">
          <section className="w-full md:w-1/2">
            <Accounts/>
          </section>
          <section className="w-full md:w-1/2">
            <Transactions/>
          </section>
        </main>
      </div>
      <Fab/>
    </DashboardProvider>
  );
}
