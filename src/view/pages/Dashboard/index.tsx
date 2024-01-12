import Button from '../../components/Button.tsx';
import { useAuth } from '../../../app/hooks/useAuth.ts';

export default function Dashboard() {
  const { signout } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={signout}>Logout</Button>
    </>
  );
}
