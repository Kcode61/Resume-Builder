"use client";
import { useApresentacaoStore } from "@/store/useApresentacaoStore";
import { useContatoStore } from "@/store/useContatoStore";
import { useEducaçãoStore } from "@/store/useEducaçãoStore";
import { useExperienciaStore } from "@/store/useExperienciaStore";
import { useHabilidadesStore } from "@/store/useHabilidadesStore";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { useRef } from "react";

export function Curriculo() {
  const curriculoRef = useRef(null);
  const { nome, titulo, sobre } = useApresentacaoStore();
  const { email, telefone, linkedin, localizacao } = useContatoStore();
  const { Educações } = useEducaçãoStore();
  const { experiencias } = useExperienciaStore();
  const { habilidades } = useHabilidadesStore();
  return (
    <div className="flex-1 bg-[#F7F6F4] min-h-0  overflow-y-auto w-full mx-auto  flex flex-col ">
      <div className="py-3 pb-20 w-full mx-auto">
        <div className="p-4 border-b bg-[#FAF8F7] border-[#ECEAE7] flex justify-between items-center">
          <h2 className=" uppercase text-[11px] font-inter font-medium text-[#7C706A]">
            Prévia em tempo real
          </h2>
        </div>
        <div
          ref={curriculoRef}
          id="curriculo"
          className="flex max-w-3xl mx-auto bg-white flex-col gap-2 p-[56px]"
        >
          <h1 className="font-fraunces text-3xl text-black font-bold">
            {nome}
          </h1>
          <p
            className={`text-xs uppercase tracking-[0.2em] font-inter mb-2 font-medium text-[#7C706A]  ${titulo ? "block" : "hidden"}`}
          >
            {titulo}
          </p>
          <div className="flex gap-4 items-center">
            <div
              className={`flex gap-2 text-[#444444]  items-center leading-none  text-sm font-inter ${email ? "block" : "hidden"}`}
            >
              <Mail size={13} className="relative top-[0.5px]" />
              <p className="text-[11px] font-inter">{email}</p>
            </div>
            <div
              className={`flex gap-2 text-[#444444]  items-center leading-none  text-sm font-inter ${telefone ? "block" : "hidden"}`}
            >
              <Phone size={13} className="relative top-[0.5px]" />
              <p className="text-[11px] font-inter">{telefone}</p>
            </div>
            <div
              className={`flex gap-2 text-[#444444]  items-center leading-none  text-sm font-inter ${linkedin ? "block" : "hidden"}`}
            >
              <User size={13} className="relative top-[0.5px]" />

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-inter "
              >
                Linkedin
              </a>
            </div>
            <div
              className={`flex gap-2 text-[#444444] items-center text-sm font-inter ${localizacao ? "block" : "hidden"}`}
            >
              <MapPin size={13} className="relative top-[0.5px]" />

              <p className="text-[11px] font-inter">{localizacao}</p>
            </div>
          </div>
          <div className="w-full h-[2px] mb-4 mt-4 bg-black"></div>

          <div
            className={`flex flex-col mb-4 gap-3 ${sobre ? "flex" : "hidden"}`}
          >
            <p className="tracking-[0.2em] uppercase text-[11px] font-inter font-medium text-[#7C706A]">
              Perfil
            </p>

            <p className="text-[11px] font-inter font-medium text-[#333333]">
              {sobre}
            </p>
          </div>
          <div
            className={`flex flex-col mb-4 gap-3 ${experiencias.length > 0 ? "flex" : "hidden"}`}
          >
            <p className="tracking-[0.2em] uppercase text-[11px] font-inter font-medium text-[#7C706A]">
              Experiencia
            </p>

            {experiencias.map((exp, index) => (
              <div key={index} className={`flex justify-between`}>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[12px] font-inter font-medium text-black">
                    {exp.cargo}{" "}
                    <span className="text-[#555555]">· {exp.empresa}</span>
                  </h2>
                  <p className="text-[#555555] text-[11px] font-inter font-medium">
                    {exp.descricao}
                  </p>
                </div>

                <p className="font-brains text-[10px] text-[#8B8F8F]">
                  {exp.inicio} - {exp.fim}
                </p>
              </div>
            ))}
          </div>
          <div
            className={` flex-col mb-4 gap-3  ${Educações.length > 0 ? "flex" : "hidden"}`}
          >
            <p className="tracking-[0.2em] uppercase text-[11px] font-inter font-medium text-[#7C706A]">
              Educação
            </p>

            {Educações.map((edu, index) => (
              <div key={index} className="">
                <div className="flex flex-col gap-1">
                  <p className="text-[12px] font-inter font-medium text-black">
                    {edu.CursoGrau}
                  </p>
                  <p className="text-[#555555] text-[11px] font-inter font-medium">
                    {edu.Instituição}
                  </p>
                </div>

                <p className="font-brains text-[10px] text-[#8B8F8F]">
                  {edu.inicio} - {edu.fim}
                </p>
              </div>
            ))}
          </div>
          <div
            className={`flex-col mb-4 gap-2 ${
              habilidades.length > 0 ? "flex" : "hidden"
            }`}
          >
            <p className="tracking-[0.2em] uppercase text-[11px] font-inter font-medium text-[#7C706A]">
              Habilidades
            </p>

            <div className="grid grid-cols-3 gap-x-4 gap-y-1">
              {habilidades.map((hab) => (
                <div
                  key={hab.key}
                  className="text-[11px] font-inter text-[#333]"
                >
                  <span className="font-medium">{hab.nome}</span>
                  {hab.ano && <span className="text-[#777]"> {hab.ano}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
