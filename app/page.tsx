import { Curriculo } from "@/components/Curriculo";
import { Editor } from "@/components/Editor.tsx";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resume Builder",
  description:
    "Uma aplicação para criar currículos personalizados de forma fácil e rápida.",
};
export default function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Editor />

      <Curriculo />
    </div>
  );
}
