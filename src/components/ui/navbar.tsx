import { Bell, LifeBuoy, LogOut, User } from "lucide-react";
import { useAuth } from "../authProvider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleSupport = () => {
    navigate("/support");
  };

  const handleLogoutSession = () => {
    handleLogout;
    navigate("/logout");
  };

  const handlePerfil = () => {
    navigate("/perfil");
  };

  return (
    <nav className="bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 text-white p-2 fixed top-0 left-0 w-full">
      <div className="container space-x-4 mx-auto flex justify-between ">
        <a href="/home" className="mt-2">
          <span className="text-1xl text-muted-foreground transition-colors hover:text-foreground">
            ACASE INICIO
          </span>
        </a>

        <div className="flex space-x-4 text-white">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <p className="items-center justify-center p-6 text-center text-sm text-muted-foreground">
                No hay notificaciones
              </p>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 bg-gray-900 justify-start">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button
                    className="w-full text-left justify-start"
                    onClick={handlePerfil}
                  >
                    <User className="mr-3 h-4 w-4 justify-start" />
                    <span className="text-md justify-start">perfil</span>
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Button
                    className="w-full text-left justify-start"
                    onClick={handleLogoutSession}
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    <span className="text-md">Cerrar sesión</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    className="w-full text-left justify-start"
                    onClick={handleSupport}
                  >
                    <LifeBuoy className="mr-3 h-4 w-4" />
                    <span className="text-md">Soporte</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
