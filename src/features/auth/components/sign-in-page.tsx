import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SignInPage() {
  return (
    <form method="post" className="w-full space-y-6">
      <div className="space-y-4 ">
        <TextField
          id="email"
          labelProps={{
            children: "Email",
          }}
          inputProps={{
            placeholder: "ej: johndoe@gmail.com",
            autoComplete: "email",
            type: "email",
          }}
        />

        <PasswordField
          id="password"
          labelProps={{
            children: "Contraseña",
          }}
          inputProps={{
            autoComplete: "new-password",
          }}
        />

        <Link to="/" className="text-foreground underline">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <Button className="w-full">Iniciar sesión</Button>
    </form>
  );
}
