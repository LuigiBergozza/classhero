import { NavBar } from "../Components/navBar";
import Footer from "../Components/footer";
import { Product } from "../Components/product";
import { Varieties } from "../Components/varieties";
import { DetalhesProdutos } from "../Components/detalhesProdutos";
import { CarrosselProdutos } from "../Components/carrouselProductos";
import { NavBarMobile } from "../Components/navBarMobile";

export const Produto = () => {
  return (
    <body className="bg-secondary max-w-dvw">
      <div className="flex h-dvh flex-col items-center">
        <div className="flex w-full justify-center">
          <NavBarMobile />
          <NavBar />
        </div>
        <div className="flex w-full h-full flex-col items-center justify-center p-4 lg:flex-row">
          <DetalhesProdutos />
        </div>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-4 lg:h-svh lg:px-45">
        <div className="grid w-full grid-cols-2 gap-4 rounded-2xl lg:hidden">
          {Array.from({ length: 10 }, (_, index) => (
            <Product
              key={index}
              name="Nike One Swoosh"
              price="R$ 113,99 Pix"
              installment="ou R$ 119,99 sem juros"
            />
          ))}
        </div>
        <div className="w-full">
          <CarrosselProdutos />
        </div>
        <div className="hidden h-90 lg:flex">
          <Varieties />
        </div>
      </div>
      <Footer />
    </body>
  );
};
