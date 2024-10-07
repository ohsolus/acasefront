import { PasswordField } from "@/components/password-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function PasswordUpdate() {
  const { toast } = useToast();

  const onSubmit = () => {
    return toast({
      title: "Aviso",
      description: "Has cambiado tu contraseña con éxito",
    });
  };

  return (
    <form method="post" className="w-full space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
        <PasswordField
          id="password"
          labelProps={{
            children: "Actual Contraseña",
          }}
          inputProps={{
            placeholder: "",
            autoComplete: "password",
          }}
          value={""}
        />
        <PasswordField
          id="newPassword"
          labelProps={{
            children: "Nueva Contraseña",
          }}
          inputProps={{
            autoComplete: "password",
          }}
          value={""}
        />

        <PasswordField
          id="confirmPassword"
          labelProps={{
            children: "Confirmar Contraseña",
          }}
          inputProps={{
            autoComplete: "password",
          }}
          value={""}
        />
        <br />

        <p className="text-sm text-muted-foreground flex justify-start text-slate-500 dark:text-slate-400">
          (*) Debe contener al menos 15 carácteres u 8 incluidos números y
          minúsculas.
        </p>
      </div>
      <div className="mb-4 h-6 w-6 w-full flex justify-end items-left">
        <Button>
          <span>Actualizar</span>
        </Button>
        <Button className="ml-2 mr-2 " variant="outline">
          <span>Olvidé mi contraseña</span>
        </Button>
      </div>
    </form>
  );
}
