import { Link } from "react-router-dom";
import {
  Blocks,
  CircleEllipsis,
  Info,
  House,
  MessageCircle,
} from "lucide-react";

// 1. IMPORTE A IMAGEM NECESSÁRIA NO TOPO DO ARQUIVO
import profileImage from "../assets/5.jpg"; // Ajuste o caminho se necessário (ex: se o arquivo está em 'src/Components', e 'assets' está em 'src/', o caminho é '../assets/5.jpg')

export const SidebarMenu = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="space-y-14">
        <div className="hover:bg-hover/40 flex cursor-pointer flex-col items-center gap-3 transition-all hover:brightness-125">
          <img
            src={profileImage}
            alt="logo"
            className="h-20 w-20 rounded-full object-cover"
          />
          <span className="text-priDark font-semibold">Luigi Bergozza</span>
        </div>
        <div className="space-y-1">
          <Link
            to="/"
            className="hover:bg-hover/40 flex cursor-pointer items-center gap-4 rounded-sm px-3 py-3 brightness-150 transition-all hover:brightness-125"
          >
            <House className="text-priDark size-[21px]" />
            <span className="text-priDark font-semibold">Home</span>
          </Link>
          <Link
            to="/empresa"
            className="hover:bg-hover/40 flex cursor-pointer items-center gap-4 rounded-sm px-3 py-3 transition-all hover:brightness-125"
          >
            <Info className="text-priDark size-[21px]" />
            <span className="text-priDark font-semibold">Class="hero"</span>
          </Link>
          <Link
            to="/produto"
            className="hover:bg-hover/40 flex cursor-pointer items-center gap-4 rounded-sm px-3 py-3 transition-all hover:brightness-125"
          >
            <div className="relative">
              <Blocks className="text-priDark size-[21px]" />
              <div className="text-secondary absolute -top-1.5 -right-1 flex size-[15px] items-center justify-center rounded-full bg-[#F1313E] text-[11px]">
                1
              </div>
            </div>
            <span className="text-priDark font-semibold">Produto</span>
          </Link>
          <Link
            to="/contato"
            className="hover:bg-hover/40 flex cursor-pointer items-center gap-4 rounded-sm px-3 py-3 transition-all hover:brightness-125"
          >
            <MessageCircle className="text-priDark size-[21px]" />
            <span className="text-priDark font-semibold">Contato</span>
          </Link>
          <Link
            to="/more"
            className="hover:bg-hover/40 flex cursor-pointer items-center gap-4 rounded-sm px-3 py-3 transition-all hover:brightness-125"
          >
            <CircleEllipsis className="text-priDark size-[21px]" />
            <span className="text-priDark font-semibold">More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
