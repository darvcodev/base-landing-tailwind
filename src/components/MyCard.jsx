export const MyCard = ({ url, titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="m-6 bg-white px-20 py-16 rounded-2xl shadow-2xl">
      <img src={url} className="rounded-2xl mx-auto mb-4 shadow-2xl" />
      <h1 className="font-bold text-2xl mb-4">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <a href={url_preview} target="_blank" className="bg-blue-500 mr-2 text-white px-6 py-2 rounded-full">
        Vista Previa
      </a>
      <a href={url_github} target="_blank" className="bg-blue-500 text-white px-6 py-2 rounded-full">
        GitHub
      </a>
    </div>
  );
};
