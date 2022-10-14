export const ExperienciaPage = () => {
  return (
    <>
      <p class="text-center text-5xl font-bold py-4 text-sky-700">Experiencia</p>
      <p class="text-start text-2xl font-normal py-4">
        En esta sección podras encontrar información acerca de mi experiencia
      </p>
      <div class="grid grid-cols-1 px-2 py-2 rounded-lg lg:rounded-r-full mt-4 bg-slate-600">
        <p class="text-center text-white font-bold text-4xl">
          Nombre de la institucion:{" "}
          <span class="text-sky-600">Instituto Nacional de Vias</span>
        </p>

        <blockquote class="text-base text-white">
          Ciudad:
          <span class="text-sky-600"> Bogota</span>
        </blockquote>
        <blockquote class="text-base text-white">
          Periodo de practicas:
          <span class="text-sky-600">6 meses</span>
        </blockquote>
        <blockquote class="text-base text-white">
          Año de las practica:
          <span class="text-sky-600"> 2021</span>
        </blockquote>
      </div>
    </>
  );
};
