// Varieties.tsx

// 1. IMPORTE TODOS OS VÍDEOS NECESSÁRIOS NO TOPO DO ARQUIVO
import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import videoHome from "../assets/videoHome.mp4";

export const Varieties = () => {
  return (
    <div className="grid h-full grid-cols-2 gap-4 font-bold text-white lg:grid lg:grid-cols-4">
      <div className="relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full rounded-xl object-cover"
          // 2. Use a variável importada 'video1'
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />
        <h1 className="from-priDark absolute text-secondary bottom-0 flex h-full w-full items-center justify-center rounded-xl bg-linear-to-t to-transparent py-1 text-center font-light italic">
          Saúde
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full rounded-xl object-cover"
          // 2. Use a variável importada 'video2'
          src={video2}
          autoPlay
          loop
          muted
          playsInline
        />
        <h1 className="from-priDark absolute text-secondary bottom-0 flex h-full w-full items-center justify-center rounded-xl bg-linear-to-t to-transparent py-1 text-center font-light italic">
          Lazer
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full rounded-xl object-cover"
          // 2. Use a variável importada 'video3'
          src={video3}
          autoPlay
          loop
          muted
          playsInline
        />
        <h1 className="from-priDark absolute text-secondary bottom-0 flex h-full w-full items-center justify-center rounded-xl bg-linear-to-t to-transparent py-1 text-center font-light italic">
          Dia a dia
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <video
          className="w-full h-full rounded-xl object-cover"
          // 2. Use a variável importada 'videoHome'
          src={videoHome}
          autoPlay
          loop
          muted
          playsInline
        />
        <h1 className="from-priDark absolute text-secondary bottom-0 flex h-full w-full items-center justify-center rounded-xl bg-linear-to-t to-transparent py-1 text-center font-light italic">
          Experiência
        </h1>
      </div>
    </div>
  );
};