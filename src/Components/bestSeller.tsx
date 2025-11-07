import { Best } from "./best";

// 1. IMPORTE TODAS AS IMAGENS NECESSÁRIAS
// O caminho '../assets/' é relativo ao local onde BestSeller.tsx está.
import p1Image from "../assets/p1.avif";
import p4Image from "../assets/p4.avif";
import p5Image from "../assets/p5.avif";
import p7Image from "../assets/p7.avif";

export const BestSeller = () => {
  return (
    <div className="hidden h-full w-full gap-4 lg:grid">
      <div className="text-priDark flex items-center justify-center gap-8">
        <h2 className="text-2xl font-light italic">
          {" "}
          Produtos <span className="font-bold">mais vendidos</span> da
          semana{" "}
        </h2>
        <p className="text-sm">
          Se prepare para economizar muito com as ofertas que fizeram parte
          desse começo de ano.
        </p>
      </div>

      <div className="h-full gap-4 lg:grid lg:grid-cols-4">
        <Best
          name="Nike One Swoosh"
          price="R$ 100,00"
          installment="10x R$ 10,00"
          // 2. Use a variável importada, NÃO a string estática
          image={p1Image}
        />
        <Best
          name="Nike One Swoosh"
          price="R$ 100,00"
          installment="10x R$ 10,00"
          // 2. Use a variável importada
          image={p4Image}
        />
        <Best
          name="Nike One Swoosh"
          price="R$ 100,00"
          installment="10x R$ 10,00"
          // 2. Use a variável importada
          image={p5Image}
        />
        <Best
          name="Nike One Swoosh"
          price="R$ 100,00"
          installment="10x R$ 10,00"
          // 2. Use a variável importada
          image={p7Image}
        />
      </div>
    </div>
  );
};
