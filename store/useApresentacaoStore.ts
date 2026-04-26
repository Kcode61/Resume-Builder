import { create } from "zustand";

type ApresentacaoState = {
  nome: string;
  titulo: string;
  sobre: string;

  setNome: (nome: string) => void;
  setTitulo: (titulo: string) => void;
  setSobre: (sobre: string) => void;
  limparApresetacao: () => void;
};

export const useApresentacaoStore = create<ApresentacaoState>((set) => ({
  nome: "",
  titulo: "",
  sobre: "",
  limparApresetacao: () =>
    set({
      sobre: "",
      titulo: "",
      nome: "",
    }),
  setNome: (nome) => set({ nome }),
  setTitulo: (titulo) => set({ titulo }),
  setSobre: (sobre) => set({ sobre }),
}));
