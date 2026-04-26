import { create } from "zustand";

type Educação = {
  Instituição: string;
  CursoGrau: string;
  inicio: string;
  fim: string;
};

type Store = {
  Educações: Educação[];

  adicionarEducação: () => void;
  removerEducação: (index: number) => void;
  atualizarEducação: (
    index: number,
    campo: keyof Educação,
    valor: string,
  ) => void;
  limparEducação: () => void;
};

export const useEducaçãoStore = create<Store>((set) => ({
  Educações: [],

  adicionarEducação: () =>
    set((state) => ({
      Educações: [
        ...state.Educações,
        {
          Instituição: "",
          CursoGrau: "",
          inicio: "",
          fim: "",
        },
      ],
    })),
  limparEducação: () => set({ Educações: [] }),

  removerEducação: (index) =>
    set((state) => ({
      Educações: state.Educações.filter((_, i) => i !== index),
    })),

  atualizarEducação: (index, campo, valor) =>
    set((state) => ({
      Educações: state.Educações.map((edu, i) =>
        i === index ? { ...edu, [campo]: valor } : edu,
      ),
    })),
}));
