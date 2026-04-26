"use client";
import { Header } from "@/components/Header";
import "./globals.css";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useApresentacaoStore } from "@/store/useApresentacaoStore";
import { useContatoStore } from "@/store/useContatoStore";
import { useEducaçãoStore } from "@/store/useEducaçãoStore";
import { useExperienciaStore } from "@/store/useExperienciaStore";
import { useHabilidadesStore } from "@/store/useHabilidadesStore";

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { limparApresetacao } = useApresentacaoStore();
  const { limparContato } = useContatoStore();
  const { limparEducação } = useEducaçãoStore();
  const { limparExperiencias } = useExperienciaStore();
  const { limparHabilidades } = useHabilidadesStore();
  const exportarPDF = async () => {
    const element = document.getElementById("curriculo");

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save("curriculo.pdf");
  };

  function limparpdf() {
    limparApresetacao();
    limparContato();
    limparEducação();
    limparExperiencias();
    limparHabilidades();
  }
  return (
    <html
      lang="pt-br"
      className={` ${fraunces.variable}
          ${inter.variable}
          ${jetbrainsMono.variable}h-full antialiased`}
      cz-shortcut-listen="true"
    >
      <body
        cz-shortcut-listen="true"
        className="h-screen flex flex-col overflow-hidden"
      >
        <Header LimparPDF={limparpdf} exportarPdf={exportarPDF} />
        <main className="flex-1 overflow-hidden min-h-0 ">{children}</main>
      </body>
    </html>
  );
}
