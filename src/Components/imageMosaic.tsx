import { Asterisk } from "lucide-react";
import { Waves } from "lucide-react";

// 1. IMPORTE AS IMAGENS NECESSÁRIAS NO TOPO DO ARQUIVO
import imageP1 from "../assets/p1.avif";
import imageP2 from "../assets/p2.avif";
import imageP3 from "../assets/p3.avif";
import imageP4 from "../assets/p4.avif";

export const ImageMosaic = () => {
  return (
    <div className="4k:scale-250 relative md:scale-90 lg:scale-100">
      <div className="border-secondary/20 h-50 w-70 rounded-4xl border-2 p-4 text-center text-3xl font-bold md:h-70 md:w-110">
        <Waves className="text-tertiary absolute bottom-53 left-50 size-8 animate-pulse md:bottom-75 md:left-80 md:size-10" />
        <Asterisk
          className="text-tertiary absolute top-50 right-48 size-20 animate-spin md:top-70 md:right-75 md:size-35"
          style={{ animationDuration: "3s" }}
        />

        <div className="absolute right-23 bottom-30 flex h-35 w-25 items-center justify-center rounded-2xl md:right-35 md:bottom-45 md:h-50 md:w-40">
          <img
            className="object-end flex h-full w-full items-center justify-center rounded-2xl object-cover transition-all duration-500 hover:rounded-4xl"
            // 2. Use a variável importada 'imageP2'
            src={imageP2}
            alt="{name}"
          />
        </div>
        <div className="absolute bottom-7 left-55 flex h-35 w-25 items-center justify-center rounded-2xl md:bottom-10 md:left-90 md:h-50 md:w-40">
          <img
            className="object-end flex h-full w-full items-center justify-center rounded-2xl object-cover transition-all duration-500 hover:rounded-4xl"
            // 2. Use a variável importada 'imageP3'
            src={imageP3}
            alt="{name}"
          />
        </div>
        <div className="absolute right-55 bottom-7 flex h-35 w-25 items-center justify-center rounded-2xl md:right-90 md:bottom-10 md:h-50 md:w-40">
          <img
            className="object-end flex h-full w-full items-center justify-center rounded-2xl object-cover transition-all duration-500 hover:rounded-4xl"
            // 2. Use a variável importada 'imageP4'
            src={imageP4}
            alt="{name}"
          />
        </div>
        <div className="absolute top-30 right-23 flex h-35 w-25 items-center justify-center rounded-2xl md:top-45 md:right-35 md:h-50 md:w-40">
          <img
            className="object-end flex h-full w-full items-center justify-center rounded-2xl object-cover transition-all duration-500 hover:rounded-4xl"
            // 2. Use a variável importada 'imageP1'
            src={imageP1}
            alt="{name}"
          />
        </div>
      </div>
    </div>
  );
};
