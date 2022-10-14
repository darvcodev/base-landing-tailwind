import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";
export const PortafolioPage = () => {
  return (
    <div>
      <p class="text-center text-5xl font-bold py-4 text-white">
        Portafolio
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
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
