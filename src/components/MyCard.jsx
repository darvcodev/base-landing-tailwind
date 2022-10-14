export const MyCard = ({
  url,
  titulo,
  descripcion,
  url_preview,
  url_github,
}) => {
  return (
    <div className="m-2 text-center bg-white px-10 lg:px-20 py-16 rounded-2xl shadow-2xl">
      <img src={url} className="rounded-2xl mx-auto mb-4 shadow-2xl" />
      <h1 className="font-bold text-2xl mb-4">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <a
        href={url_github}
        target="_blank"
        className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-2 rounded-full"
      >
        <i className="fa-brands fa-github"></i> GitHub
      </a>
      <a
        href={url_preview}
        target="_blank"
        className="bg-orange-500 hover:bg-orange-900 mr-2 text-white px-6 py-2 rounded-full"
      >
        <i class="fa-solid fa-share"></i>
        Vista Previa
      </a>
    </div>
  );
};
