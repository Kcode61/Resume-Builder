import { Download, FileText, RotateCcw } from "lucide-react";

export function Header({ exportarPdf }: { exportarPdf: () => void }) {
  return (
    <header className="flex justify-between items-center bg-white border-b border-[#ECEAE9] p-4">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-lg bg-[#1D1816] text-white flex items-center justify-center ">
          <FileText size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-fraunces font-medium text-[#1D1816] ">
            Resume Builder
          </span>
          <span className="text-[10px] font-inter text-[#7C706A]">
            Currículos profissionais em minutos
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="py-2 px-4 rounded-lg flex gap-4 font-medium cursor-pointer hover:scale-95 hover:gap-3 ease duration-500 text-xs hover:text-white items-center font-inter text-[#A19995] hover:bg-orange-400 transition-all">
          <RotateCcw size={16} />
          Limpar
        </button>
        <button
          onClick={exportarPdf}
          className="py-2 px-4 rounded-lg font-medium flex gap-3 hover:bg-black/90 cursor-pointer ease duration-500 text-xs  items-center font-inter text-white bg-black transition-all"
        >
          <Download size={16} />
          Baixar PDF
        </button>
      </div>
    </header>
  );
}
