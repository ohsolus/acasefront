import { Main } from "@/components/ui/main";
import { Content } from "../components/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FaqPage() {
  return (
    <Main className="flex flex-col items-center space-y-4 px-6 py-12">
      <h1 className="text-3xl font-semibold md:text-center">
        Preguntas Frecuentes
      </h1>
      <span className="text-muted-foreground md:text-center">
        ¿Cómo podemos ayudarte?
      </span>

      <div className="w-full max-w-lg">
        <Content />
        <div className="space-y-4 py-12 px-6">
          <Link to="/" className="text-foreground underline">
            ¿Tienes una pregunta que no está en la lista?
          </Link>

          <Button>Reportar un problema</Button>
        </div>
      </div>
    </Main>
  );
}
