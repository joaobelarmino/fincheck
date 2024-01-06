import Input from "../../Input.tsx";
import Button from "../../Button.tsx";

export default function LoginForm() {
  return (
    <form className="mt-[60px] flex flex-col gap-4">
      <Input type="email" placeholder="E-mail" name="email"/>
      <Input type="password" placeholder="Senha" name="password"/>

      <Button className="mt-2" type="submit">Entrar</Button>
    </form>
  );
}
