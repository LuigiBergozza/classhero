//import a img como um módulo para que o Vite processe o caminho corretamente.
//caminhos estáticos de arquivo não funcionam
import p1Image from "../assets/p1.avif";

export const Cupom = () => {
  return (
    <div className="text-secondary relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#7495ab] object-cover text-center lg:w-1/2">
      <img
        className="flex h-full w-full items-center justify-center overflow-hidden object-cover"
        src={p1Image}
        alt="{name}"
      />
      <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl leading-tight font-extralight italic">
              Cupom
            </h1>
            <h1 className="text-2xl font-bold">do DIA</h1>
          </div>
          <p className="flexitems-center bg-tertiary text-secondary justify-between rounded-md px-3 py-2 text-xs font-bold">
            CUPOM2025
          </p>
        </div>
      </div>
    </div>
  );
};

/*export const Cupom = () => {
  return (
    <div className="rounded-2xl text-secondary bg-purple-800 flex items-center text-center justify-center overflow-hidden">
      <img className="w-full object-cover " src=".\src\assets\1.png" alt="{name}"/>
    </div>
  );
};*/
