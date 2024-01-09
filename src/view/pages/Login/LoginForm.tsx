import Input from "../../components/Input.tsx";
import Button from "../../components/Button.tsx";
import {useLoginController} from "./useLoginController.ts";

export default function LoginForm() {
  const {handleSubmit, register, errors, isLoading} = useLoginController();

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[60px] flex flex-col gap-4 text-left"
    >
      <Input
        type="email"
        placeholder="E-mail"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Senha"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <Button className="mt-2" type="submit" isLoading={isLoading}>Entrar</Button>
    </form>
  );
}
