import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";
import miniatura from "../assets/foto/miniatura.png";

export const InicioPage = () => {
  return <>
  <div className="grid grid-cols-3 pt-4 lg:grid-cols-3 lg:pt-14">
  <div className="col-span-2 px-4 md:mx-auto lg:mx-auto">
    <p className="font-bold text-4xl md:text-6xl lg:text-7xl">
      Hola 👋🏾, <br />
      soy Wisthong 😎
    </p>
    <p className="mt-2 lg:mt-4 text-2xl">
      Trabajemos juntos y realicemos app <br />
      moviles 📱 y sitos web responsives 💻
    </p>
    <div className="mt-4 lg:mt-8 text-3xl text-center">
      <a
        href="https://github.com/Wisthong"
        target="_blank"
        className="text-white bg-blue-500 hover:bg-blue-900 px-6 py-2 rounded-full"
        ><i className="fa-brands fa-github"></i>

        GitHub</a
      >
    </div>
  </div>

  <div>
    <img
      className="animate__animated animate__fadeInDown animate__repeat-3 rounded-full w-4/6  md:w-3/5 lg:w-3/5 mx-8"
      src={miniatura}
      alt=""
    />
  </div>
</div>

  </>;
};
