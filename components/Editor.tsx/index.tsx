"use client";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { Apresentação } from "../Apresentação";
import { Contato } from "../Contato";
import { Experiencia } from "../Experiencia";
import { Educação } from "../Educação";

export function Editor() {
  return (
    <div className="flex-1 min-h-0 border-r overflow-y-auto w-full mx-auto  flex flex-col border-[#ECEAE9]">
      <div className="p-6   pb-20 max-w-6xl w-full mx-auto">
        <div>
          <div className=" mb-8 flex flex-col gap-[2px]">
            <p className="text-[11px] font-inter font-medium text-[#7C706A]">
              EDITOR
            </p>
            <h2 className="text-2xl  font-weight  font-fraunces ">
              Construa seu currículo
            </h2>
          </div>

          <div className="max-w-[620px]">
            <Apresentação />
            <Contato />
            <Experiencia />
            <Educação />
          </div>
        </div>
      </div>
    </div>
  );
}
