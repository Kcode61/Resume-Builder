import { Curriculo } from "@/components/Curriculo";
import { Editor } from "@/components/Editor.tsx";

export default function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Editor />
      <Curriculo />
    </div>
  );
}
