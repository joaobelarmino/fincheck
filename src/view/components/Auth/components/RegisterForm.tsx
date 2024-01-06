import Input from "../../Input.tsx";
import Button from "../../Button.tsx";

export default function RegisterForm() {
  return (
    <form className="mt-[60px] flex flex-col gap-4">
      <Input type="text" placeholder="Nome" name="name" autoComplete="off"/>
      <Input type="email" placeholder="E-mail" name="email" autoComplete="off"/>
      <Input type="password" placeholder="Senha" name="password" autoComplete="off"/>

      <Button className="mt-2" type="submit">Criar conta</Button>
    </form>
  );
}
