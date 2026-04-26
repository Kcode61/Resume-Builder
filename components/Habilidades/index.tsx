import { useHabilidadesStore } from "@/store/useHabilidadesStore";
import { Plus, Trash } from "lucide-react";

export function Habilidades() {
  const { habilidades, adicionar, remover, atualizar } = useHabilidadesStore();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
            5
          </p>

          <div className="flex flex-col gap-1">
            <p className="font-weight text-xl font-medium font-fraunces">
              Habilidades
            </p>
            <p className="text-xs text-[#958C87] font-medium font-inter">
              Adicione suas principais habilidades.
            </p>
          </div>
        </div>
        <button
          onClick={adicionar}
          className="text-xs hover:bg-[#E3E0DD]/60 cursor-pointer py-2 px-4 flex gap-4 items-center border border-[#E3E0DD] rounded-lg text-[#2F2A28]"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>
      {habilidades.map((habilidade, index) => (
        <div
          key={index}
          className="p-4 border border-[#ECE9E7] rounded-lg flex flex-col gap-4 mb-6"
        >
          <div className="flex justify-between">
            <p className="font-brains text-xs font-medium text-[#958B86]">
              #{String(index + 1).padStart(2, "0")}
            </p>

            {index > 0 && (
              <button
                onClick={() => remover(index)}
                className="text-xs hover:bg-[#E3E0DD]/60 cursor-pointer py-2 px-4 flex gap-4 items-center border border-[#E3E0DD] rounded-lg text-[#2F2A28]"
              >
                <Trash size={16} />
                Remover
              </button>
            )}
          </div>
          <div className="flex  gap-4 items-center">
            <div className="w-full ">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Habilidade
              </label>
              <input
                type="text"
                value={habilidade.nome}
                onChange={(e) => atualizar(index, "nome", e.target.value)}
                className="w-full px-4 py-2 rounded-lg  border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Digite sua habilidade"
              />
            </div>
            <div className="w-full">
              <label className="block  font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Experiência (anos)
              </label>
              <input
                type="number"
                value={habilidade.ano}
                onChange={(e) => atualizar(index, "ano", e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Ex: 2 anos"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="h-px bg-[#ECEAE9] my-8 w-full "></div>
    </>
  );
}
