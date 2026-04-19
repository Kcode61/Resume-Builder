import { create } from "zustand";

type ContatoState = {
  localizacao: string;
  telefone: string;
  email: string;
  linkedin: string;

  setLocalizacao: (localizacao: string) => void;
  setTelefone: (telefone: string) => void;
  setEmail: (email: string) => void;
  setLinkedin: (linkedin: string) => void;
};

export const useContatoStore = create<ContatoState>((set) => ({
  localizacao: "",
  telefone: "",
  email: "",
  linkedin: "",

  setLocalizacao: (localizacao) => set({ localizacao }),
  setTelefone: (telefone) => set({ telefone }),
  setEmail: (email) => set({ email }),
  setLinkedin: (linkedin) => set({ linkedin }),
}));
