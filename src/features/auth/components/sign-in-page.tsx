import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import IUserLoginData from "../../../types/Login";
import { ChangeEvent, useState } from "react";
import LoginService from "@/service/LoginService";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const initialLoginState = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [login, setLogin] = useState<IUserLoginData>(initialLoginState);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Para manejar errores

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const loginUser = () => {
    const data = {
      email: login.email,
      password: login.password,
    };

    LoginService.create(data) // Cambiar a método de login
      .then((response: any) => {
        const token = response.data.token; // Asume que el token JWT está en la respuesta
        if (token) {
          localStorage.setItem("token", token); // Guarda el token en localStorage
          setSubmitted(true);
          console.log(response.x);
          setError(null); // Si el login es exitoso, limpiar el error
          navigate("/home");
        } else {
          setError("Token no recibido. Verifica tu API.");
        }
      })
      .catch((e: Error) => {
        setError("Login fallido. Verifica tus credenciales."); // Mostrar un mensaje de error
        console.log(e);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  const newLogin = () => {
    setLogin(initialLoginState);
    setSubmitted(false);
    setError(null);
  };

  return (
    <div className="submit-form w-full space-y-6">
      {submitted ? (
        <div>
          <h4>¡Login exitoso!</h4>
          <button className="btn btn-success" onClick={newLogin}>
            Volver a intentar
          </button>
        </div>
      ) : (
        <div className="space-y-4 ">
          <div className="form-group" onChange={handleInputChange}>
            <TextField
              id="email"
              value={login.email}
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
              value={login.password}
              labelProps={{
                children: "Contraseña",
              }}
              inputProps={{
                autoComplete: "new-password",
              }}
            />
          </div>

          <Link to="/" className="text-foreground underline">
            ¿Has olvidado tu contraseña?
          </Link>

          <Button onClick={loginUser} className="w-full">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
