import { Button } from "../Components/button";
import { Carrossel } from "../Components/carousel";
// 1. IMPORTE AS IMAGENS NECESSÁRIAS NO TOPO DO ARQUIVO
import runImage from "../assets/run.jpg";
import duskImage from "../assets/dusk.jpg";

export const HeroPageHero = () => {
  return (
    <div className="flex h-full lg:h-[calc(100vh-70px)] w-full flex-col justify-center gap-4 p-4">
      <div className="flex h-2/3 w-full flex-col gap-4 lg:flex-row">
        <img
          // 2. Use a variável importada 'runImage'
          src={runImage}
          className="h-1/3 rounded-2xl object-cover object-[9%] lg:h-1/1 lg:w-1/2"
          alt="category"
        />
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <Carrossel />
        </div>
      </div>
      <div className="flex h-1/3 w-full flex-col gap-4 lg:flex-row">
        <img
          // 2. Use a variável importada 'duskImage'
          src={duskImage}
          className="h-full w-full rounded-2xl object-cover lg:w-1/2"
          alt="category"
        />
        <div className="text-secondary bg-primary/10 hidden h-full w-full items-center justify-center gap-25 rounded-2xl font-extralight italic lg:flex">
          <div className="flex flex-col text-xl">
            <p>O esporte mantém nossa forma.</p>
            <p className="text-primary text-4xl font-bold">
              Mantém nosso foco.
            </p>
            <span className="flex gap-4">
              <p>Nos une.</p> <hr className="mt-5 w-60" />
            </span>
          </div>
          <form action="#" className="flex flex-col gap-5">
            <div className="relative">
              <input
                type="text"
                id="default-search"
                className="border-secondary text-secondary placeholder-secondary block w-full rounded-2xl border bg-transparent px-5 py-3 text-lg leading-relaxed font-normal shadow-xs focus-within:border-gray-300 focus:outline-none"
                placeholder="cadastre seu e-mail"
                required={true}
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-5">
              <div className="black flex items-start">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="checked:border-secondary checked:bg-primary/15 hover:border-secondary mr-2 aspect-square h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-transparent checked:bg-center checked:bg-no-repeat hover:bg-gray-900"
                  checked={true}
                />
                <label
                  htmlFor="checked-checkbox"
                  className="text-secondary cursor-pointer text-sm font-normal"
                >
                  I agree with{" "}
                  <a href="javascript:;" className="text-primary">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="javascript:;" className="text-primary">
                    Terms of Condition
                  </a>
                </label>
              </div>
              <Button>Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
