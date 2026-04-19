export function Editor() {
  return (
    <div className="p-6 border-r  w-full flex flex-col border-[#ECEAE9] overflow-y-auto max-h-full">
      <div className="max-w-7xl">
        <div className=" mb-8 flex flex-col gap-[2px]">
          <p className="text-[11px] font-inter font-medium text-[#7C706A]">
            EDITOR
          </p>
          <h2 className="text-2xl  font-weight  font-fraunces ">
            Construa seu currículo
          </h2>
        </div>

        <div className="flex gap-2 mb-2">
          <p className="flex text-xs  font-medium items-center justify-center w-7 h-7 rounded-full text-white font-brains bg-[#1D1816]">
            1
          </p>
        </div>
      </div>
    </div>
  );
}
