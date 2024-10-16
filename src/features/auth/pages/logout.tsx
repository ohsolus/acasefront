import { Main } from "@/components/ui/main";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Logout() {
  useEffect(() => {
    // Mostrar el toast al cargar la página
    toast.success("Bienvenido a la página de inicio!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []); // Solo se ejecuta una vez al cargar la ruta

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-sky-50 via-sky-200 to-sky-300">
      <div className="w-full max-w-lg space-y-8">
        <div className="space-y-2">
          <Card className="shadow-lg rounded-lg bg-white border border-white rounded-lg p-6 shadow-lg">
            <h1 className="text-muted-foreground md:text-center">
              El usuario ha cerrado sesión correctamente.
            </h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Logout;
