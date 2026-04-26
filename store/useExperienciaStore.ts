import { create } from "zustand";

type Experiencia = {
  cargo: string;
  empresa: string;
  inicio: string;
  fim: string;
  descricao: string;
};

type Store = {
  experiencias: Experiencia[];

  adicionar: () => void;
  remover: (index: number) => void;
  atualizar: (index: number, campo: keyof Experiencia, valor: string) => void;
  limparExperiencias: () => void;
};

export const useExperienciaStore = create<Store>((set) => ({
  experiencias: [],

  adicionar: () =>
    set((state) => ({
      experiencias: [
        ...state.experiencias,
        {
          cargo: "",
          empresa: "",
          inicio: "",
          fim: "",
          descricao: "",
        },
      ],
    })),

  remover: (index) =>
    set((state) => ({
      experiencias: state.experiencias.filter((_, i) => i !== index),
    })),
  limparExperiencias: () => set({ experiencias: [] }),
  atualizar: (index, campo, valor) =>
    set((state) => ({
      experiencias: state.experiencias.map((exp, i) =>
        i === index ? { ...exp, [campo]: valor } : exp,
      ),
    })),
}));
