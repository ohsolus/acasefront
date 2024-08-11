import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/30 backdrop-blur-md border-t border-white/20 p-4 fixed bottom-0 left-0 w-full">
      <div className="container flex h-full flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <ul className="flex flex-col items-center gap-4 lg:flex-row">
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-muted-foreground transition-colors hover:text-foreground">
                  Políticas de Privacidad
                </button>
              </DialogTrigger>
            </Dialog>
          </li>

          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-muted-foreground transition-colors hover:text-foreground">
                  Términos de Uso
                </button>
              </DialogTrigger>
            </Dialog>
          </li>
        </ul>

        <p className="text-center text-muted-foreground">
          ©{currentYear} UNEG · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
