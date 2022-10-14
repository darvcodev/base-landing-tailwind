import React from "react";

export const EstudiosPage = () => {
  return (
    <>
      <p className="text-center text-5xl font-bold py-4 text-white">Estudios</p>
      <p className="text-start text-2xl font-normal py-4">
        En esta sección podras encontrar información de mis estudios
      </p>
      <div className="grid grid-cols-1 px-2 py-2 rounded-lg lg:rounded-r-full mt-4 bg-slate-600">
        <p className="text-center text-white font-bold text-4xl">
          Nombre del titulo:{" "}
          <span className="text-sky-600">Ingeniero de Sistemas</span>
        </p>

        <blockquote className="text-base text-white">
          Nombre de la institucion:
          <span className="text-sky-600"> Universidad del Pacifico</span>
        </blockquote>
        <blockquote className="text-base text-white">
          Ciudad:
          <span className="text-sky-600">
            {" "}
            Buenaventura, Valle del Cauca, Colombia
          </span>
        </blockquote>
        <blockquote className="text-base text-white">
          Estado:
          <span className="text-sky-600">
            Actualmente cursando el semestre
            <span className="font-bold">X</span>
          </span>
        </blockquote>
      </div>

      <div className="grid grid-cols-1 px-2 rounded-lg lg:rounded-r-full mt-4 bg-slate-600">
        <p className="text-center text-white font-bold text-4xl">
          Diplomado: <span className="text-sky-600">Diplomado en React Js</span>
        </p>

        <blockquote className="text-base text-white">
          Nombre de la institucion:
          <span className="text-sky-600">
            {" "}
            Fundacion Maria Luisa de Moreno, Livebox
          </span>
        </blockquote>
        <blockquote className="text-base text-white">
          Ciudad:
          <span className="text-sky-600"> Modalidad virtual</span>
        </blockquote>
        <blockquote className="text-base text-white">
          Estado:
          <span className="text-sky-600">Finalizado</span>
        </blockquote>
      </div>
    </>
  );
};
