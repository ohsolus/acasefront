import { Card, CardContent } from "@/components/ui/card";
import { Main } from "@/components/ui/main";

export function HomePage() {
  return (
    <Main className="bg-cover bg-center h-screen">
      <div className="flex p-4 justify-center py-7"></div>

      <div className="justify-center flex p-2">
        <div className="w-1/3">
          <Card className="shadow-lg rounded-lg bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-6 shadow-lg">
            <CardContent className="items-center p-4">
              <h2 className="text-2xl font-bold mt-5">
                Has ingresado con éxito, bienvenido
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
