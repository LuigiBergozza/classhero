import { SidebarMenu } from "../Components/sidebarMenu";
import { Sale } from "../Components/sale";
import { BestSeller } from "../Components/bestSeller";
import { Recommended } from "../Components/recommended";
import { Varieties } from "../Components/varieties";
import { Category } from "../Components/category";
import { SupportSection } from "../Components/supportSection";
import { Qualities } from "../Components/qualities";
import { Cupom } from "../Components/cupom";
import { Header } from "../Components/header";
import { NavBarMobile } from "../Components/navBarMobile";
import { Link } from "react-router-dom";
import { BottomNavbar } from "../Components/bottomNavbar";
import bannerImage from "../assets/banner.jpg";
import { useRef, useEffect, useState, useCallback } from "react";

export const Home = () => {
  // 1. Tipagem Corrigida para o elemento DOM (<main>)
  const recommendedRef = useRef<HTMLDivElement | null>(null);
  
  // 2. Tipagem Corrigida para o ID da animação (requestAnimationFrame retorna um number)
  const animationRef = useRef<number | null>(null); 
  
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true); 

  // A função que realiza o scroll suave e contínuo
  const autoScroll = useCallback(() => {
    // 3. Tipagem manual do container para HTMLDivElement para usar propriedades como scrollTop
    const container = recommendedRef.current as HTMLDivElement | null;

    if (container && shouldAutoScroll) {
      const scrollAmount = 1; // Velocidade de rolagem (1px por quadro)
      // const duration = 15000; // VARIÁVEL REMOVIDA OU COMENTADA, POIS NÃO ESTÁ EM USO
      
      // Verifica se já estamos no fundo
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
        setShouldAutoScroll(false); // Para a animação se chegar ao final
        return;
      }

      // Realiza o scroll suave
      container.scrollTop += scrollAmount;

      // Agenda a próxima chamada (animationRef agora aceita number)
      animationRef.current = requestAnimationFrame(autoScroll);
    }
  }, [shouldAutoScroll]);

  useEffect(() => {
    if (shouldAutoScroll) {
      // animationRef.current agora aceita number
      animationRef.current = requestAnimationFrame(autoScroll);
    }

    // Função de limpeza
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null; // Garante que o ref seja resetado
      }
    };
  }, [autoScroll, shouldAutoScroll]);
  
  return (
    <body className="bg-secondary dark:bg-secondary relative max-h-dvh max-w-dvw">
      <div className="relative h-dvh w-full lg:grid lg:grid-cols-[1.5fr_5fr_3fr]">
        <header className="relative flex justify-center">
          <NavBarMobile />
          <nav className="hidden lg:block">
            <SidebarMenu />
          </nav>
        </header>

        <section className="flex h-dvh flex-col items-center justify-between gap-4 p-4 md:p-8">
          <div className="w-full">
            <Header />
          </div>

          <div className="flex h-full w-full flex-col justify-between gap-4 overflow-hidden">
            <div className="flex h-1/2 w-full flex-col gap-4 lg:min-h-35 lg:flex-row">
              <img
                className="flex h-full w-full overflow-hidden rounded-2xl bg-amber-800 object-cover"
                src={bannerImage}
                alt="{name}"
              />
              <Cupom />
            </div>
            <Link
              to="/produto"
              className="relative h-full overflow-hidden rounded-2xl bg-amber-800"
            >
              <Sale />
            </Link>
          </div>
        </section>

        <main
          className="hidden lg:block lg:overflow-hidden lg:overflow-y-auto"
          ref={recommendedRef}
          onMouseEnter={() => setShouldAutoScroll(false)}
          onMouseLeave={() => setShouldAutoScroll(true)}
        >
          <Recommended />
        </main>
      </div>

      <div>
        <main className="h-full p-4 md:p-8 lg:hidden">
          <Recommended />
        </main>
      </div>

      <div className="flex h-dvh flex-col items-center gap-8 justify-start p-4 md:p-8 lg:px-45">
        <div className="hidden lg:flex">
          <BestSeller />
        </div>
        <div className="h-dvh">
          <Varieties />
        </div>
      </div>

      <footer className="bg-priDark h-dvh gap-6 flex md:gap-4 flex-col p-4 md:p-8 lg:px-45">
        <div className="flex w-full h-full justify-center items-center lg:flex-row">
          <Category />
          <Qualities />
        </div>
        <div className="h-full lg:h-25 gap-6 flex justify-end flex-col">
          <SupportSection />
          <BottomNavbar />
        </div>
      </footer>
    </body>
  );
};