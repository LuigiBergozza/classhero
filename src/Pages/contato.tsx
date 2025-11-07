import { Button } from "../Components/button";
import { NavBar } from "../Components/navBar";
import { NavBarMobile } from "../Components/navBarMobile";
import { LocalizacaoUsuario } from "../Components/localizacao";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { LocationEdit, MailCheckIcon, Phone } from "lucide-react";
import Footer from "../Components/footer";

export function Contato() {
  return (
    <body className="bg-priDark/95 max-w-screen text-white">
      <div className="flex h-full flex-col items-center lg:h-screen lg:gap-23">
        <div className="flex w-full justify-center">
          <NavBarMobile />
          <NavBar />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 p-4 lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-20 lg:gap-10">
            <div className="mt-8 flex items-center gap-4 lg:mt-0">
              <FaFacebook className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
              <FaInstagram className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
              <FaTwitter className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
              <FaYoutube className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-25 lg:flex-col lg:gap-0">
              <div className="flex flex-col">
                <h2 className="text-secondary mb-6 text-4xl font-bold">
                  Entre em contato
                </h2>
                <p className="text-secundary mb-8 text-xl">
                  Alguma pergunta?
                  <br />
                  Estamos aqui para ajudar
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <LocationEdit className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="mb-1 text-2xl font-bold">Localização</h3>
                    <p className="text-secundary">
                      {" "}
                      <LocalizacaoUsuario />{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Phone className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="mb-1 text-2xl font-bold">Fone</h3>
                    <p className="text-secundary">(00) 00000-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <MailCheckIcon className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="mb-1 text-2xl font-bold">Email</h3>
                    <p className="text-secundary">
                      nomesobrenome@classhero.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-priDark flex w-full flex-col rounded-xl p-8 lg:w-1/2">
            <h3 className="mb-6 text-2xl font-bold">Envie sua mensagem</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-md mb-1 block font-medium"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-md mb-1 block font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-md mb-1 block font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button>Enviar</Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}
