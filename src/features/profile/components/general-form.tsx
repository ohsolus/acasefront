import { Label } from "@radix-ui/react-label";

import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";

import AddItem from "./add-item";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";

export function GeneralForm() {
  const onSubmit = async () => {};

  //In case of avatar was not an image, then could be initials of the name

  const firstName = "Jessica" || "";
  const paternalSurname = "Farrera" || "";

  const initials = `${firstName.charAt(0)}${paternalSurname.charAt(
    0
  )}`.toUpperCase();

  return (
    <form method="post" className="w-full space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <Avatar className=" h-20 w-20 rounded-full object-cover shadow-md">
            <AvatarFallback className="text-gray text-3xl font-semibold ">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>

        <div>
          <h1 className="ml-3 mt-5 text-2xl font-semibold">
            {firstName + " " + paternalSurname}
          </h1>
        </div>

        <br />

        <div className="flex flex-row">
          <TextField
            id="name"
            className="mr-2 w-full"
            labelProps={{
              children: "Nombre",
            }}
            inputProps={{
              placeholder: "ej: John",
              autoComplete: "given-name",
              type: "text",
            }}
            value={""}
          />

          <TextField
            id="lastname"
            className="ml-2 w-full"
            labelProps={{
              children: "Apellido",
            }}
            inputProps={{
              placeholder: "ej: Doe",
              autoComplete: "family-name",
              type: "text",
            }}
            value={""}
          />
        </div>
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
          value={""}
        />
      </div>
      <br></br>

      <Label
        htmlFor="tag"
        className="flex items-left justify-left peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
      >
        Etiquetas
      </Label>
      <AddItem />

      <div className="flex justify-end h-6 w-6 w-full items-left">
        <Button>
          <span>Guardar cambios</span>
        </Button>
      </div>
    </form>
  );
}
