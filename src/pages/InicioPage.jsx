import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";
import miniatura from "../assets/foto/miniatura.png";

export const InicioPage = () => {
  return (
    <>
      {/* <div className="flex mx-20"> */}
      <div className="grid grid-cols-2 mx-10">
        <div>
          <h1 className="font-bold text-7xl">
            Hola 👋🏾, <br /> soy Wisthong 😎
          </h1>
          <p className="mt-4 text-2xl">
            Trabajemos juntos y realicemos app <br /> moviles 📱 y sitos web
            responsives 💻
          </p>
          <div className="mt-8 text-3xl text-white">
            <a
              href="https://github.com/Wisthong"
              target="_blank"
              className="bg-black mx-20  px-6 py-2 rounded-full"
            >
              Perfil
            </a>
            <a
              href="https://github.com/Wisthong"
              target="_blank"
              className="bg-blue-800  px-6 py-2 rounded-full"
            >
              GitHub
            </a>
          </div>
        </div>
        <div>
          <img className="rounded-full w-72 mx-48" src={miniatura} alt="" />
          {/* <p>
            <span className="font-bold text-6xl">Aqui va la foto</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            assumenda ex rem voluptatem porro laboriosam esse perspiciatis modi
            optio quae? Earum, quod accusantium ex fuga dicta sint sapiente eos
            quisquam!
          </p> */}
        </div>
      </div>
      {/* <div className="flex">
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
      </div> */}
    </>
  );
};
