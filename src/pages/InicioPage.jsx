import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const InicioPage = () => {
  return (
    <>
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
    </>
  );
};
