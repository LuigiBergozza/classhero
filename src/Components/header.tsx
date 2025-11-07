import { HorarioBrasilia } from "./horario";
import { LocalizacaoUsuario } from "./localizacao";
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex w-full flex-row gap-10 items-center justify-between">
        <LocalizacaoUsuario />
        <HorarioBrasilia />
      </div>
      <div className="flex items-center justify-between gap-4">
        <input
          className="py-2 w-full px-4 rounded-2xl bg-secondary border-3 border-primary/50 text-text"
          type="search"
          placeholder="Busque por produtos">            
        </input>
        <Link to="/cart" className="relative">
          <ShoppingCart className="text-primary" />
          <div className="absolute -top-1.5 -right-1 flex size-[15px] items-center justify-center rounded-full text-[11px] text-secondary bg-[#F1313E]">
            1
          </div>
        </Link>
      </div>
    </div>
  );
};
