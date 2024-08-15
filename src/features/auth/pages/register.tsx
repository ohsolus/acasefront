import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

import GOOGLE from "@/assets/google.svg";
import { TextSeparator } from "../components/text-separator";
import { SignUpPage } from "../components/sign-up-page";

export function Register() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-sky-50 via-sky-200 to-sky-300">
      <div className="w-full max-w-lg space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold md:text-center">Regístrate</h1>

          <p className="text-muted-foreground md:text-center">Comencemos</p>
        </div>
        {/*una card*/}
        <Card className="shadow-lg rounded-lg bg-white border border-white rounded-lg p-6 shadow-lg">
          <div className="flex p-2 items-start"> </div>
          <CardContent className="p-4 ">
            <CardDescription className="mt-4">
              <div className="flex items-center justify-between">
                <SignUpPage />
              </div>
            </CardDescription>
          </CardContent>
        </Card>
        <TextSeparator>O continúa con</TextSeparator>

        <Button className="grid w-full grid-cols-3" variant="outline">
          <img src={GOOGLE} height={24} width={24} alt="Logo de Google" />

          <span className="font-medium">Google</span>
        </Button>
        <p className="text-center text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-foreground underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
