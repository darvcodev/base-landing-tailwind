import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";
export const PortafolioPage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-white py-4 uppercase text-center">Portafolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <MyCard
            key={proyecto.id}
            url={proyecto.url}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            url_preview={proyecto.url_preview}
            url_github={proyecto.url_github}
          />
        ))}
      </div>
    </div>
  );
};
