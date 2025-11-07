import video4 from "../assets/4.mp4";
export const Sale = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-2xl">
      <video
        className="h-full w-full rounded-2xl object-cover"
        /*src="./src/assets/4.mp4"*/
        autoPlay
        loop
        muted
        playsInline
      >
      <source src={video4} type="video/mp4" />
      </video>
      <div className="from-priDark via-priDark/50 text-secondary to-primary absolute flex h-full w-full flex-col items-center justify-center rounded-2xl bg-linear-to-r text-center">
        <div className="absolute space-y-4 lg:left-10">
          <div className="flex flex-col">
            <h1 className="text-2xl leading-tight font-extralight italic lg:text-lg">
              Energia natural
            </h1>
            <h1 className="text-md font-bold lg:text-lg">
              para você usar em qualquer dia
            </h1>
          </div>
          <hr></hr>
          <div>
            <h1 className="font-bold">Air Jordan 1 High OG</h1>
            <h2>Shattered Backboard</h2>
            <p className="text-2xl font-bold">R$ 1599,99</p>
            <p className="text-sm">10x R$ 159,99 sem juros</p>
          </div>
        </div>
      </div>
    </div>
  );
};
