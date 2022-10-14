import angular from "../assets/logos/angular.svg";
import ionic from "../assets/logos/ionic.svg";
import nodejs from "../assets/logos/nodejs.svg";
import mongodb from "../assets/logos/mongodb.svg";
import html from "../assets/logos/html.svg";
import react from "../assets/logos/react.svg";

export const PerfilPage = () => {
  return (
    <div>
      <p className="text-center text-5xl font-bold py-4 text-sky-700">Perfil</p>
      <div className="grid grid-cols-1 p-4 md:grid-cols-3 md:pt-14 lg:grid-cols-3 lg:pt-14">
        <div>
          <p className="text-center font-bold text-4xl text-sky-700">
            Desarrollador FrontEnd y Backend
          </p>
          <p className="text-base py-2 justify-start">
            Soy estudiante de Ingenieria de Sistemas de la Universidad del
            Pacifico de Colombia, me encuentro cursando el semestre X, me
            apasiona mucho la programacion, y las tecnologias que manejo son:
          </p>
          <div className="md:py-2">
            <li className="list-none">Angular</li>
            <li className="list-none">React</li>
            <li className="list-none">Ionic</li>
            <li className="list-none">Html</li>
            <li className="list-none">Node</li>
            <li className="list-none">MongoDB</li>

          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-2 grid md:justify-items-center lg:justify-items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 md:pl-20">
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={angular}
              alt=""
              srcset=""
            />
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={react}
              alt=""
              srcset=""
            />
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={ionic}
              alt=""
              srcset=""
            />
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={nodejs}
              alt=""
              srcset=""
            />
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={html}
              alt=""
              srcset=""
            />
            <img
              className="w-2/12 md:w-2/5 lg:w-2/4"
              src={mongodb}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
