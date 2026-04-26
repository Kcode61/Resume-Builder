import { create } from "zustand";

type Habilidade = {
  nome: string;
  ano: string;
  key: string;
};

type Store = {
  habilidades: Habilidade[];
  limparHabilidades: () => void;
  adicionar: () => void;
  remover: (index: number) => void;
  atualizar: (index: number, campo: keyof Habilidade, valor: string) => void;
};

export const useHabilidadesStore = create<Store>((set) => ({
  habilidades: [],
  limparHabilidades: () => set({ habilidades: [] }),

  adicionar: () =>
    set((state) => ({
      habilidades: [
        ...state.habilidades,
        {
          key: crypto.randomUUID(),
          nome: "",
          ano: "",
        },
      ],
    })),

  remover: (index) =>
    set((state) => ({
      habilidades: state.habilidades.filter((_, i) => i !== index),
    })),

  atualizar: (index, campo, valor) =>
    set((state) => ({
      habilidades: state.habilidades.map((exp, i) =>
        i === index ? { ...exp, [campo]: valor } : exp,
      ),
    })),
}));
