import { useEffect, useState } from "react";

export const ContactoPage = ({ forms, setForms }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if ([nombre, apellido, email, mensaje].includes("")) {
      setError(true);
      setShowModal(true);
      alert("Hay campos sin llenar😡😡😡");
      return;
    } else {
      setError(false);

      const obtenerDataForm = {
        nombre,
        apellido,
        email,
        mensaje,
      };

      alert("Mensaje exitoso");

      setForms([...forms, obtenerDataForm]);
      console.log({ forms });
      setApellido("");
      setEmail("");
      setMensaje("");
      setNombre("");
    }
  };

  return (
    <>
      <div className="grid justify-center">
        <p class="text-center text-5xl font-bold py-4 text-sky-700">
          Contacto
        </p>{" "}
        <form
          className="w-full max-w-l bg-slate-100 shadow-md rounded-lg py-5 px-5 mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="David"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Apellido
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Martinez"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Correo electronico
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Digite su correo electronico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-mensaje"
              >
                Mensaje
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-mensaje"
                type="text"
                placeholder="Digite su Mensaje"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap mx-3 mb-6">
            <input
              type="submit"
              className="bg-blue-600 w-full p-3 rounded-3xl text-white uppercase font-bold hover:bg-blue-900 transition-colors cursor-pointer"
              value="Enviar"
            />
          </div>
        </form>
      </div>
    </>
  );
};
