import instagram from "../assets/logos/instagram.svg";
import whatsapp from "../assets/logos/whatsapp.svg";

export const FooterPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-4 py-4">
        <div className="rounded-lg bg-slate-200">
          <h1 className="font-bold text-center">Información general</h1>
          <p>
            Landing page desarrollada en React.{" "}
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ab
              blanditiis odit, tenetur labore doloribus iusto deleniti sapiente
              consectetur nemo, molestias magni ea laborum officiis veritatis
              suscipit saepe asperiores accusantium?
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-slate-200">
          <h1 className="font-bold text-center">Redes Sociales</h1>
          <a href="https://api.whatsapp.com/send?phone=573165365663">
            <img className="mx-auto" src={whatsapp} alt="" />
          </a>
          <a href="https://www.instagram.com/iamwistd">
            <img className="mx-auto" src={instagram} alt="" />
          </a>
        </div>
        <div className="rounded-lg bg-slate-200">
          <h1 className="font-bold text-center">Información de contacto</h1>
          <p>
            Landing page desarrollada en React.{" "}
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ab
              blanditiis odit, tenetur labore doloribus iusto deleniti sapiente
              consectetur nemo, molestias magni ea laborum officiis veritatis
              suscipit saepe asperiores accusantium?
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-black text-center">
        <span className="text-white font-light">
          Derechos reservados © Wisthong David Martinez Castro © 2022
        </span>
      </div>
    </>
  );
};
