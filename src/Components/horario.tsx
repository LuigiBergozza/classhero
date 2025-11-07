import { Clock } from "lucide-react";
import { useState, useEffect } from 'react';

export const HorarioBrasilia = () => {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    const atualizarHorario = () => {
      const data = new Date();
      const offset = -3; // Brasília é UTC-3
      const hora = data.getUTCHours() + offset;
      const minutos = data.getUTCMinutes();
      const segundos = data.getUTCSeconds();

      const horario = `${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

      setHorario(horario);
    };

    atualizarHorario();
    const intervalId = setInterval(atualizarHorario, 1000); // Atualiza o horário a cada segundo

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-[#7495ab]  bg-[#9cbace]/50 backdrop-blur-md rounded-xl px-4 py-1 gap-2 text-sm flex font-semibold">
      <Clock className="text-[#7495ab] text-xs" />
      {horario}
    </p>
  );
};