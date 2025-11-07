import { tv } from "tailwind-variants";
import { Heart } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

// 1. IMPORTE A IMAGEM NO TOPO DO ARQUIVO.
// O caminho '../assets/p1.avif' é relativo à localização do Product.tsx.
import p1Image from "../assets/p1.avif"; 

const variants = tv({
  base: "relative flex bg-secDark/50 text-priDark p-5 w-full gap-4 rounded-2xl flex-col items-center text-center justify-center",
  variants: {
    variant: {
      bestSeller: "bg-priDark text-secondary",
    },
  },
});

export const Product = ({
  name,
  price,
  installment,
  variant,
}: {
  name: string;
  price: string;
  installment: string;
  variant?: keyof typeof variants["variants"]["variant"];
}) => {
  return (
    <Link to="/produto">
    <div className={variants({ variant })}>
      {/* 2. Use a variável importada 'p1Image' na propriedade src */}
      <img 
        src={p1Image} 
        className="rounded-2xl shadow-lg shadow-gray-400 h-40 object-cover" 
        alt={name} // Usando a prop 'name' aqui é melhor que '{name}'
      />
      <div className="flex flex-col gap-2 items-center">
        <div className="italic border-b-2">{name}</div>
        <div className="flex flex-col">
          <div className="text-xl text-priDark font-bold">{price}</div>
          <div className="text-xs">{installment}</div>
        </div>
      </div>
      <div className="absolute space-x-2 flex items-center justify-between top-1 right-1">
      {variant === "bestSeller" && ( /* operador lógico "e comercial" (&&). Uma condição que só será verdadeira se ambas as condições forem atendidas.*/
          <Button variant="small">
            Mais vendido
          </Button>
        )}
        <Button variant="favorite">
          <Heart size={15} />
        </Button> 
      </div>
    </div>
    </Link>
  );
};