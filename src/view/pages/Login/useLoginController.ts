import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin.ts';
import { useAuth } from '../../../app/hooks/useAuth.ts';

const schema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Informe um email válido.'),
  password: z.string().min(8, 'A senha deve conter pelo menos 8 caracteres.')
});

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    }
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken);
    } catch (error) {
      toast.error('Credenciais inválidas!');
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isLoading
  };
}
