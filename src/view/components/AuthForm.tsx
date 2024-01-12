import { Link } from 'react-router-dom';
import RegisterForm from '../pages/Register/RegisterForm.tsx';
import LoginForm from '../pages/Login/LoginForm.tsx';

interface AuthFormProps {
  type: 'login' | 'register';
  title: string;
  subtitle: string;
}

export default function AuthForm({
 type, title, subtitle 
}: AuthFormProps) {
  return (
    <>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-0.1px]">
          {title}
        </h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">{subtitle}</span>
          <Link to={type === 'login' ? '/register' : '/login'} className="font-medium text-teal-900">{type === 'login' ? 'Crie sua conta' : 'Fazer Login'}</Link>
        </p>
      </header>
      {type === 'register' ? (
        <RegisterForm />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
