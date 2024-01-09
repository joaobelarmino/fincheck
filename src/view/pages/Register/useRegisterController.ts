import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {useMutation} from '@tanstack/react-query'

import {authService} from "../../../app/services/authService";
import {SignupParams} from '../../../app/services/authService/signup';
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório').email('Informe um email válido.'),
  password: z.string().min(8, 'A senha deve conter pelo menos 8 caracteres.')
})

type FormData = z.infer<typeof schema>


export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: {errors}
  } = useForm<FormData>({resolver: zodResolver(schema)})

  const {mutateAsync, isLoading} = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    }
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (e) {
      toast.error("Ocorreu um erro no seu cadastro.")
    }
  })

  return {handleSubmit, register, errors, isLoading}
}
