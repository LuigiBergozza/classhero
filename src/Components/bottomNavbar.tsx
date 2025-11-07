import { Link } from "react-router-dom";

export const BottomNavbar = () => {
  return (
    <div className="rounded-xl lg:space-y-3">
      <div className="hover:bg-hover/40 flex cursor-pointer items-center justify-center gap-5 rounded-sm brightness-150 transition-all hover:brightness-125">
        <Link to="/" className="text-secondary text-xs font-semibold">
          <span className="font-semibold">Home</span>
        </Link>
        <Link to="/empresa" className="text-secondary text-xs font-semibold">
          <span className="font-semibold">To be Hero</span>
        </Link>
        <Link to="/produto" className="text-secondary text-xs font-semibold">
          <span className="font-semibold">Produto</span>
        </Link>
        <Link to="/contato" className="text-secondary text-xs font-semibold">
          <span className="font-semibold">Contato</span>
        </Link>
        <Link to="/more" className="text-secondary text-xs font-semibold">
          <span className="font-semibold">More</span>
        </Link>
      </div>
      <hr className="text-secondary hidden lg:flex" />
      <div className="hidden justify-between gap-1 text-center lg:flex">
        <Link to="/" className="text-secondary text-xs">
              <span> © <b>{`{ ; } class=`}</b>"hero" |</span>
              <span> 2025, All rights reserved.</span>
            </Link>
        <p className="text-secondary text-xs">
          CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim,
          Osasco/SP - CEP 06233-903
        </p>
      </div>
    </div>
  );
};
