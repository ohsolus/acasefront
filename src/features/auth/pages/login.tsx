import { Link } from "react-router-dom";

import googleLogo from "@/assets/google.svg";
import { Button } from "@/components/ui/button";

import { TextSeparator } from "../components/text-separator";
import { Main } from "@/components/ui/main";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { SignInPage } from "../components/sign-in-page";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-sky-50 via-sky-200 to-sky-300">
      <div className="w-full max-w-lg space-y-8">
        <h1 className="text-3xl font-bold md:text-center">
          Bienvenido de vuelta
        </h1>
        <p className="text-muted-foreground md:text-center">
          Ingresa tus credenciales para iniciar sesión
        </p>
        <div className="space-y-2">
          <Card className="shadow-lg rounded-lg bg-white border border-white rounded-lg p-6 shadow-lg">
            <CardContent className="items-center p-4">
              <CardDescription className="mt-4">
                <div className="justify-center flex space-x-2 mt-5">
                  <SignInPage />
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <TextSeparator>O continua con</TextSeparator>

        <Button className="grid w-full grid-cols-3" variant="outline">
          <img src={googleLogo} height={24} width={24} alt="Logo de Google" />

          <span className="font-medium">Google</span>
        </Button>

        <p className="text-center text-muted-foreground">
          ¿No tienes una cuenta aún?{" "}
          <Link to="/register" className="text-foreground underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
