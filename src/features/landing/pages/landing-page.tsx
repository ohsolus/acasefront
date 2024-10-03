import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import UNEG from "@/assets/UNEG.png";
import TEPUY from "@/assets/tepuy.jpg";
import { Link, useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate("/login");
  };

  const handleRedirectRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${TEPUY})` }}
    >
      <div className="flex p-4 justify-center py-7"></div>

      <div className="justify-center flex p-2">
        {/* Card */}
        <div className="w-1/3">
          <Card className="shadow-lg rounded-lg bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-6 shadow-lg">
            {/* Img */}
            <div className="flex p-2 justify-center">
              <img
                src={UNEG}
                alt="Logo"
                className="w-20 h-20 h-auto object-cover rounded-lg"
              />
            </div>
            <CardContent className="items-center p-4">
              <h2 className="text-2xl font-bold mt-5">Calendario Académico</h2>
              <h2 className="text-2xl font-bold mt-5">CIVA 2024</h2>
              <CardDescription className="mt-4">
                <div className="justify-center flex space-x-2 mt-5">
                  <Button className="bg-blue-800" onClick={handleRedirectLogin}>
                    Inicia sesión
                  </Button>

                  <Button
                    className="bg-blue-800"
                    onClick={handleRedirectRegister}
                  >
                    Registrate
                  </Button>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center">
        <Card className="border-0 rounded-lg bg-blue-800 rounded-lg w-1/3 ">
          <CardContent>
            <Link
              to="https://www.uneg.edu.ve/"
              className="text-xl text-white font-bold mt-3"
            >
              UNEG, la luz de Guayana
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
