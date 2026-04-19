import { useEducaçãoStore } from "@/store/useEducaçãoStore";
import { Plus, Trash } from "lucide-react";

export function Educação() {
  const { Educações, adicionarEducação, removerEducação, atualizarEducação } =
    useEducaçãoStore();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
            4
          </p>

          <div className="flex flex-col gap-1">
            <p className="font-weight text-xl font-medium font-fraunces">
              Educação
            </p>
            <p className="text-xs text-[#958C87] font-medium font-inter">
              Formação acadêmica.
            </p>
          </div>
        </div>
        <button
          onClick={adicionarEducação}
          className="text-xs hover:bg-[#E3E0DD]/60 cursor-pointer py-2 px-4 flex gap-4 items-center border border-[#E3E0DD] rounded-lg text-[#2F2A28]"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>
      {Educações.map((edu, index) => (
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
                onClick={() => removerEducação(index)}
                className="text-xs hover:bg-[#E3E0DD]/60 cursor-pointer py-2 px-4 flex gap-4 items-center border border-[#E3E0DD] rounded-lg text-[#2F2A28]"
              >
                <Trash size={16} />
                Remover
              </button>
            )}
          </div>
          <div className="grid grid-cols-2  gap-4 items-center">
            <div className="w-full">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Instituição
              </label>
              <input
                type="text"
                value={edu.Instituição}
                onChange={(e) =>
                  atualizarEducação(index, "Instituição", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Digite sua instituição de ensino"
              />
            </div>
            <div className="w-full ">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Curso / Grau
              </label>
              <input
                type="text"
                value={edu.CursoGrau}
                onChange={(e) =>
                  atualizarEducação(index, "CursoGrau", e.target.value)
                }
                className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="nome do curso ou grau"
              />
            </div>

            <div className="w-full">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Início
              </label>
              <input
                type="text"
                value={edu.inicio}
                onChange={(e) =>
                  atualizarEducação(index, "inicio", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Data de início"
              />
            </div>
            <div className="w-full ">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Fim
              </label>
              <input
                value={edu.fim}
                onChange={(e) =>
                  atualizarEducação(index, "fim", e.target.value)
                }
                type="text"
                className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Presente ou data de saída"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
