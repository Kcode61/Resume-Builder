"use client";

import { useExperienciaStore } from "@/store/useExperienciaStore";
import { Plus, Trash } from "lucide-react";

export function Experiencia() {
  const { experiencias, adicionar, remover, atualizar } = useExperienciaStore();
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
            3
          </p>

          <div className="flex flex-col gap-1">
            <p className="font-weight text-xl font-medium font-fraunces">
              Experiência profissional
            </p>
            <p className="text-xs text-[#958C87] font-medium font-inter">
              Suas principais passagens.
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
      {experiencias.map((exp, index) => (
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
          <div className="grid grid-cols-2  gap-4 items-center">
            <div className="w-full">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Cargo
              </label>
              <input
                type="text"
                value={exp.cargo}
                onChange={(e) => atualizar(index, "cargo", e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Digite seu cargo"
              />
            </div>
            <div className="w-full ">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Empresa
              </label>
              <input
                type="text"
                value={exp.empresa}
                onChange={(e) => atualizar(index, "empresa", e.target.value)}
                className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="nome da empresa"
              />
            </div>

            <div className="w-full">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Início
              </label>
              <input
                type="text"
                value={exp.inicio}
                onChange={(e) => atualizar(index, "inicio", e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Data de início"
              />
            </div>
            <div className="w-full ">
              <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
                Fim
              </label>
              <input
                type="text"
                value={exp.fim}
                onChange={(e) => atualizar(index, "fim", e.target.value)}
                className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
                placeholder="Presente ou data de saída"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <label className="block  font-inter text-[11px] font-semibold text-[#958C87] uppercase ">
                Descrição
              </label>
              <p className="text-[10px] font-brains  font-semibold text-[#958C87] ">
                {exp.descricao.length} / 400
              </p>
            </div>
            <textarea
              value={exp.descricao}
              onChange={(e) => atualizar(index, "descricao", e.target.value)}
              className="w-full px-4  h-24 py-2 resize-none  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
              placeholder="Principais responsabilidades e conquistas..."
              id="descrição-experiencia"
              maxLength={400}
            />
          </div>
        </div>
      ))}
      <div className="h-px bg-[#ECEAE9] my-8 w-full "></div>
    </>
  );
}
