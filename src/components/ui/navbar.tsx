const NavBar = () => {
  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-1xl text-white text-muted-foreground transition-colors hover:text-foreground">
            ACASE - Agenda del Calendario Académico para Servicios Estudiantiles
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
