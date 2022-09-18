import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { useState } from "react";

function App() {
  const [forms, setForms] = useState([]);

  return (
    <>
      <Navbar />
      <section className="flex bg-orange-500" id="inicio">
        <InicioPage />
      </section>
      <section className="bg-white" id="perfil">
        <PerfilPage />
      </section>
      <section className="bg-orange-500" id="estudios">
        <EstudiosPage />
      </section>
      <section className="bg-white" id="experiencia">
        <ExperienciaPage />
      </section>
      <section className="bg-orange-500" id="portafolio">
        <PortafolioPage />
      </section>
      <section className="bg-white" id="contacto">
        <ContactoPage forms={forms} setForms={setForms} />
      </section>
    </>
  );
}

export default App;
