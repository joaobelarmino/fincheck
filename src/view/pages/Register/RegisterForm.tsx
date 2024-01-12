import Input from '../../components/Input.tsx';
import Button from '../../components/Button.tsx';
import { useRegisterController } from './useRegisterController.ts';

export default function RegisterForm() {
  const {
 handleSubmit, register, errors, isLoading 
} = useRegisterController();

  return (
    <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
      <Input type="text" placeholder="Nome" error={errors.name?.message} {...register('name')}/>
      <Input type="email" placeholder="E-mail" error={errors.email?.message} {...register('email')}/>
      <Input type="password" placeholder="Senha" error={errors.password?.message} {...register('password')}/>

      <Button className="mt-2" type="submit" isLoading={isLoading}>Criar conta</Button>
    </form>
  );
}
