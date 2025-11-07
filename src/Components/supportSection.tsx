import { ArrowRight } from "lucide-react";
export const SupportSection = () => {
  return (
    <div className="Flex w-full flex-col items-center justify-between lg:hidden">
      <div className="Flex bg-secondary text-primary h-full w-full flex-col items-center justify-center rounded-xl">
        <h2 className="p-3 font-bold text-[#7495ab]">Precisa de ajuda?</h2>

        <button className="hover:bg-primary hover:text-secondary flex w-full cursor-pointer items-center justify-between bg-gray-200 p-3">
          <div className="">Termos e condições</div>
          <ArrowRight className="text-primary" />
        </button>
        <button className="hover:bg-primary hover:text-secondary flex w-full cursor-pointer items-center justify-between bg-gray-100 p-3">
          <div className="">Promoções</div>
          <ArrowRight className="text-primary" />
        </button>
        <button className="hover:bg-primary flex w-full cursor-pointer items-center justify-between rounded-b-xl bg-gray-200 p-3 hover:text-blue-200">
          <div className="font-bold">Saiba mais</div>
          <ArrowRight className="text-primary" />
        </button>
      </div>
    </div>
  );
};
