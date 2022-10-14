import instagram from "../assets/logos/instagram.svg";
import whatsapp from "../assets/logos/whatsapp.svg";

export const FooterPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 gap-4 py-4">
        <div className="rounded-lg bg-orange-500">
          <h1 className="font-bold text-center">Redes Sociales</h1>
          <a href="https://api.whatsapp.com/send?phone=573165365663">
            <img className="mx-auto" src={whatsapp} alt="" />
          </a>
          <a href="https://www.instagram.com/iamwistd">
            <img className="mx-auto" src={instagram} alt="" />
          </a>
        </div>
        <div className="rounded-lg bg-orange-500">
          <h1 className="font-bold text-center">Información de contacto</h1>
          <p>
            <span>
              Puedes contactarme al 📱 +57 3165365663 
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
