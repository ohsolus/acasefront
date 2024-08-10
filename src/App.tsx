import "./App.css";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold mb-5">UNEG</h1>
        <h2 className="text-2xl font-bold mt-5">calendario Académico</h2>
        <h2 className="text-2xl font-bold mt-5">CIVA 2024</h2>
        <div className="items-center flex space-x-2 mt-5">
          <div>
            <Button>Inicia sesión</Button>
          </div>
          <div>
            <Button>Registrate</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
