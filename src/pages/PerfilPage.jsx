import angular from "../assets/logos/angular.svg";
import ionic from "../assets/logos/ionic.svg";
import nodejs from "../assets/logos/nodejs.svg";
import mongodb from "../assets/logos/mongodb.svg";
import html from "../assets/logos/html.svg";
import react from "../assets/logos/react.svg";

export const PerfilPage = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl text-blue-600 py-4 uppercase">
        Perfil
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2">
        <div className="grid grid-cols-2 ml-10 text-center font-bold text-2xl text-orange-500 ">
          <div className="mr-10 mt-4">
            <h3>Angular</h3>
            <img className="" src={angular} alt="Angular" />
          </div>
          <div className="ml-10 mt-4">
            <h3>React</h3>
            <img  src={react} alt="React" />
          </div>
          <div className="mr-10 mt-4">
            <h3>Ionic</h3>
            <img className="" src={ionic} alt="Ionic" />
          </div>
          <div className="ml-10 mt-4">
            <h3>Html</h3>
            <img  src={html} alt="Html" />
          </div>
          <div className="mr-10 mt-4">
            <h3>Node js</h3>
            <img className="" src={nodejs} alt="Node js" />
          </div>
          <div className="ml-10 mt-4">
            <h3>Mongo DB</h3>
            <img  src={mongodb} alt="Mongo DB" />
          </div>
        </div>

        <div className="">
          <h2 className="text-center text-2xl text-orange-500 font-bold">
            Desarrollador FrontEnd y Backend{" "}
          </h2>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};
