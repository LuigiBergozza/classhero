import { Button } from "./button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Best = ({
  name,
  price,
  installment,
  image, // adiciona a propriedade image
}: {
  name: string;
  price: string;
  installment: string;
  image: string; // define o tipo da propriedade image
}) => {
  return (
    <Link to="/produto">
      <div className="relative flex w-full flex-col items-center justify-center gap-4 text-center text-white">
        <img
          className="flex h-full w-full items-center justify-center rounded-2xl object-cover"
          src={image} // usa a propriedade image para definir a imagem
          alt={name}
        />
        <div className="absolute flex h-full w-full items-end justify-center rounded-2xl bg-linear-to-l from-[#507e9d] via-[#9cbace]/70 to-transparent">
          <div className="flex flex-col">
            <div className="mb-5 flex flex-col items-center gap-2">
              <div className="border-b-2 italic">{name}</div>
              <div className="flex flex-col">
                <div className="text-xl font-bold">{price}</div>
                <div className="text-xs">{installment}</div>
              </div>
            </div>
            <div className="absolute top-3 right-3 flex items-center justify-between space-x-2">
              <Button variant="smallRed">Mais vendido</Button>
              <Button variant="favorite">
                <Heart size={15} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
