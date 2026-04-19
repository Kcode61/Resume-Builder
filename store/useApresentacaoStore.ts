import { create } from "zustand";

type ApresentacaoState = {
  nome: string;
  titulo: string;
  sobre: string;

  setNome: (nome: string) => void;
  setTitulo: (titulo: string) => void;
  setSobre: (sobre: string) => void;
};

export const useApresentacaoStore = create<ApresentacaoState>((set) => ({
  nome: "",
  titulo: "",
  sobre: "",

  setNome: (nome) => set({ nome }),
  setTitulo: (titulo) => set({ titulo }),
  setSobre: (sobre) => set({ sobre }),
}));
