import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// 1. IMPORTE TODOS OS VÍDEOS NECESSÁRIOS NO TOPO DO ARQUIVO
import video22 from "../assets/22.mp4";
import video23 from "../assets/23.mp4";
import video24 from "../assets/24.mp4";
import video25 from "../assets/25.mp4";

// 2. CRIE UM ARRAY DE DADOS COM OS VÍDEOS
const carouselVideos = [
  {
    id: 1,
    src: video22,
    classNameDiv: "bg-priDark h-screen w-full",
  },
  {
    id: 2,
    src: video23,
    classNameDiv: "bg-priDark h-screen w-full",
  },
  {
    id: 3,
    src: video24,
    classNameDiv: "bg-priDark h-screen w-full",
  },
  {
    id: 4,
    src: video25,
    // Notei que este último tinha uma classe diferente (lg:h-full), então mantive.
    classNameDiv: "bg-priDark h-screen w-full lg:h-full", 
  },
];


export const Carrossel = () => {
  // O objeto 'responsive' permanece o mesmo.
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    quadHD: {
      breakpoint: { max: 3840, min: 1920 },
      items: 1,
    },
  };

  return (
    <Carousel
      className="h-full w-full rounded-2xl"
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
    >
      {/* 3. MAPEIE O ARRAY PARA RENDERIZAR OS SLIDES */}
      {carouselVideos.map((video) => (
        <div key={video.id} className={video.classNameDiv}>
          <video
            className="h-full w-full object-cover"
            src={video.src} // Use a variável importada!
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      ))}
    </Carousel>
  );
};