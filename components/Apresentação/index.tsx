"use client";
import { useApresentacaoStore } from "@/store/useApresentacaoStore";

export function Apresentação() {
  const { nome, titulo, sobre, setNome, setTitulo, setSobre } =
    useApresentacaoStore();
  return (
    <>
      <div className="flex gap-4 mb-6">
        <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
          1
        </p>

        <div className="flex flex-col gap-1">
          <p className="font-weight text-xl font-medium font-fraunces">
            Apresentação
          </p>
          <p className="text-xs text-[#958C87] font-medium font-inter">
            Como você quer ser apresentado.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-full">
            <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
              Nome completo
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="w-full ">
            <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
              Título profissional
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
              placeholder="Digite seu título profissional"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex mb-2 justify-between items-center">
            <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase">
              Sobre Mim
            </label>

            <p className="text-[10px] font-brains  font-semibold text-[#958C87] ">
              {sobre.length} / 400
            </p>
          </div>
          <textarea
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
            className="w-full px-4  h-24 py-2 resize-none  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Digite sua descrição sobre você mesmo"
            id="mensagem"
            maxLength={400}
          />
        </div>
      </div>

      <div className="h-px bg-[#ECEAE9] my-8 w-full "></div>
    </>
  );
}
