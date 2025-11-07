import { ArrowRight } from "lucide-react";
export const Qualities = () => {
  return (
    <div className="hidden text-center text-white lg:flex lg:flex-col lg:gap-4 p-4 lg:text-start">
      <div className="flex flex-row items-center gap-4 rounded-xl p-2">
        <ArrowRight className="w-20" />
        <div>
          <h2 className="font-bold text-[#ede6e2]">Escolha como pagar</h2>
          <p>
            Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também
            pode pagar em até 12x sem cartão com a Linha de Crédito.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 rounded-xl p-2">
        <ArrowRight className="w-20" />
        <div>
          <h2 className="font-bold text-[#ede6e2]">
            Frete grátis a partir de R$ 19
          </h2>
          <p>
            Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também
            pode pagar em até 12x sem cartão com a Linha de Crédito.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 rounded-xl p-2">
        <ArrowRight className="w-20" />
        <div>
          <h2 className="font-bold text-[#ede6e2]">
            Segurança, do início ao fim
          </h2>
          <p>
            Você não gostou do que comprou? Devolva! No Mercado Livre não há
            nada que você não possa fazer, porque você está sempre protegido.
          </p>
        </div>
      </div>
    </div>
  );
};
