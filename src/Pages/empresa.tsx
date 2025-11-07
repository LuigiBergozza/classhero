import "react-multi-carousel/lib/styles.css";
import { NavBar } from "../Components/navBar";
import { ImageMosaic } from "../Components/imageMosaic";
import { NavBarMobile } from "../Components/navBarMobile";
import Footer from "../Components/footer";
import { HeroPageHero } from "../Components/heroPageHero";

export const Empresa = () => {
  return (
    <body className="bg-priDark/95 max-w-dvw text-white">
      <div className="flex h-dvh flex-col items-center">
        <div className="flex w-full justify-center">
          <NavBarMobile />
          <NavBar />
        </div>
        <HeroPageHero />
      </div>
      <div className="flex h-dvh w-full md:pt-20 flex-col items-center justify-center gap-40 rounded-4xl lg:flex-row">
        <ImageMosaic />
        <div className="text-secondary text-4xl md:text-5xl">
          <p>Estilo de vida</p>
          <p className="font-extralight italic">com um produto de</p>
          <p className="bg-tertiary mt-3 px-3 pt-1 pb-3">Alta performance</p>
        </div>
      </div>
      <Footer />
    </body>
  );
};
