import {
  Info,
  CircleEllipsis,
  House,
  MessageCircle,
  ShoppingCart,
  Blocks,
} from "lucide-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-priDark text-pridark text-secondary hidden w-full items-center justify-between gap-4 px-8 py-3 lg:flex">
      <div className="text-2xl">
        <i>
          <b>{`{ ; } class=`}</b>
        </i>
        <span className="text-primary">"hero"</span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          to="/"
          className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 brightness-150 transition-all hover:brightness-125"
        >
          <House className="size-[21px]" />
          <span className="font-semibold">Home</span>
        </Link>
        <Link
          to="/empresa"
          className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all hover:brightness-125"
        >
          <Info className="size-[21px]" />
          <span className="font-semibold">To be Hero</span>
        </Link>
        <Link
          to="/produto"
          className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all hover:brightness-125"
        >
          <div className="relative">
            <Blocks className="size-[21px]" />
            <div className="text-secondary absolute -top-1.5 -right-1 flex size-[15px] items-center justify-center rounded-full bg-amber-700 text-[11px]">
              8
            </div>
          </div>
          <span className="font-semibold">Produto</span>
        </Link>
        <Link
          to="/contato"
          className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all hover:brightness-125"
        >
          <MessageCircle className="size-[21px]" />
          <span className="font-semibold">Contato</span>
        </Link>
        <Link
          to="/more"
          className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all hover:brightness-125"
        >
          <CircleEllipsis className="size-[21px]" />
          <span className="font-semibold">More</span>
        </Link>
      </div>
      <Link to="/cart" className="relative">
        <ShoppingCart />
        <div className="text-secondary absolute -top-1.5 -right-1 flex size-[15px] items-center justify-center rounded-full bg-amber-700 text-[11px]">
          1
        </div>
      </Link>
    </nav>
  );
};
