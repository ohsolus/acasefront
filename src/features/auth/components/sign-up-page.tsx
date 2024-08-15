import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

export function SignUpPage() {
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

        <TextField
          id="name"
          labelProps={{
            children: "Nombre",
          }}
          inputProps={{
            placeholder: "ej: John",
            autoComplete: "given-name",
            type: "text",
          }}
        />
      </div>

      <Button className="w-full">Registrarse</Button>
    </form>
  );
}
