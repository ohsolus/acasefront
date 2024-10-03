import { useState, ChangeEvent } from "react";
import UserService from "../../../service/UserService";
import IUserRegisterData from "../../../types/User";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/text-field";
import { PasswordField } from "@/components/password-field";

export function SignUpPage() {
  const initialRegisterState = {
    id: null,
    name: "",
    email: "",
    password: "",
  };
  const [register, setRegister] =
    useState<IUserRegisterData>(initialRegisterState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      name: register.name,
      email: register.email,
      password: register.password,
    };

    UserService.create(data)
      .then((response: any) => {
        setRegister({
          id: response.data.id,
          email: response.data.email,
          name: response.data.name,
          password: response.data.password,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setRegister(initialRegisterState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form w-full space-y-6">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div className="space-y-4 ">
          <div className="form-group" onChange={handleInputChange}>
            <TextField
              id="name"
              value={register.name}
              labelProps={{
                children: "Nombre",
              }}
              inputProps={{
                placeholder: "Jhon Doe",
                type: "email",
              }}
            />
          </div>

          <div className="form-group" onChange={handleInputChange}>
            <TextField
              id="email"
              value={register.email}
              labelProps={{
                children: "Email",
              }}
              inputProps={{
                placeholder: "ej: johndoe@gmail.com",
                autoComplete: "email",
                type: "email",
              }}
            />
          </div>

          <div className="form-group" onChange={handleInputChange}>
            <PasswordField
              id="password"
              value={register.password}
              labelProps={{
                children: "Contraseña",
              }}
              inputProps={{
                autoComplete: "new-password",
              }}
            />
          </div>

          <Button onClick={saveTutorial} className="w-full">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
