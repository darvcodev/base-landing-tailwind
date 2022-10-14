import todo from "../assets/previas/TODO.png";
import marvel from "../assets/previas/Marvel.png";
import weather from "../assets/previas/weather.png";

export const proyectos = [
  {
    id: 1,
    titulo: "TO-DO",
    descripcion:
      "App realizada en React con JS, la app permite hacer un crud pero no tiene conexión a base de datos. La información se guarda en el LocalStorage",
    url: todo,
    // url: "https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png",
    url_preview: "https://iridescent-empanada-0e2dc0.netlify.app",
    url_github: "https://github.com/Wisthong/to-do",
  },
  {
    id: 2,
    titulo: "App Heroes (MARVEL & DC)",
    descripcion:
      "App de heroes realizada en react con JS, se realizo una api para las peticiones get y así poder alimentar la APP con las imagenes de MARVEL & DC",
    url: marvel,
    // url: "https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png",
    url_preview: "https://appheroesvite.netlify.app",
    url_github: "https://github.com/Wisthong/heroes",
  },
  {
    id: 3,
    titulo: "App Weather",
    descripcion:
      "App de clima realizada en react con TS, se utilizo la api de openweathermap para obtener el clima de las ciudades ",
    url: weather,
    // url: "https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png",
    url_preview: "https://regal-peony-ca0e9c.netlify.app/",
    url_github: "https://github.com/Wisthong/app-clima",
  },
];
