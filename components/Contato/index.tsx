import { useContatoStore } from "@/store/useContatoStore";

export function Contato() {
  const {
    localizacao,
    telefone,
    email,
    linkedin,
    setLocalizacao,
    setTelefone,
    setEmail,
    setLinkedin,
  } = useContatoStore();
  return (
    <>
      <div className="flex gap-4 mb-6">
        <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
          2
        </p>

        <div className="flex flex-col gap-1">
          <p className="font-weight text-xl font-medium font-fraunces">
            Contato
          </p>
          <p className="text-xs text-[#958C87] font-medium font-inter">
            Como recrutadores podem te alcançar.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2  gap-4 items-center">
        <div className="w-full">
          <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Digite seu email"
          />
        </div>
        <div className="w-full ">
          <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
            Telefone
          </label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Digite seu telefone"
          />
        </div>

        <div className="w-full">
          <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
            Linkedin
          </label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 text-sm placeholder:text-[#A49C98] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Digite seu LinkedIn"
          />
        </div>
        <div className="w-full ">
          <label className="block font-inter text-[11px] font-semibold text-[#958C87] uppercase mb-2">
            Localização
          </label>
          <input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            className="w-full px-4 py-2  rounded-lg border border-[#E9E6E4] bg-gray-100 text-gray-800 placeholder:text-[#A49C98] text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white"
            placeholder="Digite seu estado e país"
          />
        </div>
      </div>

      <div className="h-px bg-[#ECEAE9] my-8 w-full "></div>
    </>
  );
}
