// 1. IMPORTE TODAS AS IMAGENS NECESSÁRIAS NO TOPO DO ARQUIVO
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";
import image13 from "../assets/13.png";
import image14 from "../assets/14.png";
import image15 from "../assets/15.png";

export const Category = () => {
  return (
    <div className="grid w-full lg:h-110 h-[calc(100svh-300px)] grid-cols-2 gap-4 font-bold lg:grid lg:grid-cols-3">
      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image10'
          src={image10}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Roupas
          </h1>
        </div>
      </div>

      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image11'
          src={image11}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Acessórios
          </h1>
        </div>
      </div>

      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image12'
          src={image12}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Calçados
          </h1>
        </div>
      </div>

      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image13'
          src={image13}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Coleções
          </h1>
        </div>
      </div>

      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image14'
          src={image14}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Esporte
          </h1>
        </div>
      </div>

      <div className="text-secondary relative flex items-center justify-center overflow-hidden rounded-2xl object-cover text-center">
        <img
          // 2. Use a variável importada 'image15'
          src={image15}
          className="flex h-full w-full items-center justify-center object-cover"
          alt="category"
        />
        <div className="absolute flex h-full w-full items-center justify-center bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <h1 className="text-3xl leading-tight font-extralight italic">
            Infantil
          </h1>
        </div>
      </div>
    </div>
  );
};

/*
src=".\src\assets\10.jpg"     
src=".\src\assets\11.avif"
<div className="font-bold">Acessórios</div>  
src=".\src\assets\12.webp"
<div className="font-bold">Calçados</div>    
src=".\src\assets\13.avif"

<div className="font-bold">Coleções</div>    
src=".\src\assets\14.avif"    

<div className="font-bold">Esporte</div>
src=".\src\assets\15.avif"

<div className="font-bold">Infantil</div>*/
