import { Button } from "../Components/button";
import { Star } from "lucide-react";
import { HeaderMobile } from "../Components/headerMobile";

// 1. IMPORTE AS IMAGENS NECESSÁRIAS NO TOPO DO ARQUIVO
import p2Image from "../assets/p2.avif";
import p1Image from "../assets/p1.avif";
import p3Image from "../assets/p3.avif";

export const DetalhesProdutos = () => {
  return (
    <div className="flex h-full flex-col lg:h-full">
      <div className="w-full lg:hidden">
        <HeaderMobile />
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-5 lg:h-full lg:flex-row lg:gap-10">
        <div className="grid w-full grid-cols-2 items-center gap-5 lg:w-190">
          <img
            className="col-span-2 h-55 md:h-[calc(100vh-550px)] w-full rounded-2xl object-cover object-top shadow-lg lg:h-[calc(100vh-400px)]"
            src={p2Image}
            alt="product"
          />
          <img
            className="h-45 w-full rounded-2xl object-cover shadow-lg"
            src={p1Image}
            alt="product"
          />
          <img
            className="h-45 w-full rounded-2xl object-cover shadow-lg"
            src={p3Image}
            alt="product"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:flex-col">
          <div className="flex flex-col gap-5">
            <div className="2md:flex-row 2md:gap-15 flex items-center justify-between gap-5 md:flex-col md:gap-1">
              <h1 className="font-regular text-2xl leading-tight">
                Nike One Swoosh
              </h1>
              <h1 className="text-primary text-3xl leading-tight font-bold">
                R$ 113,99
              </h1>
            </div>
            <hr className="text-primary" />
            <div className="flex items-center justify-center gap-5">
              <div className="flex gap-2">
                <Star className="text-yellow-400" />
                <p>4.9 (10 avaliações)</p>
              </div>
              <div className="flex gap-5">
                <p className="font-bold">1.5+ Sold</p>
                <p>3 Categorias</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div className="flex justify-between gap-15 md:gap-5">
              <div className="flex flex-col items-center gap-2">
                <p className="text-primary text-xl font-bold">Armazenamento</p>
                <div className="grid grid-cols-2 gap-1">
                  <Button variant="baseWhite"> Tam P </Button>
                  <Button variant="baseWhite"> Tam M </Button>
                  <Button variant="baseWhite"> Tam G </Button>
                  <Button variant="baseWhite"> Tam GG </Button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-primary text-xl font-bold">Color</p>
                <div className="grid grid-cols-2 gap-1">
                  <div className="border-secondary/50 h-9 w-16 rounded-lg border-2 bg-gray-800"></div>
                  <div className="border-secondary/50 h-9 w-16 rounded-lg border-2 bg-cyan-100"></div>
                  <div className="border-secondary/50 h-9 w-16 rounded-lg border-2 bg-purple-200"></div>
                  <div className="border-secondary/50 h-9 w-16 rounded-lg border-2 bg-neutral-300"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button>Comprar</Button>
              <Button variant="secundary">Add ao carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
