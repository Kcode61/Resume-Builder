import { Header } from "@/components/Header";
import "./globals.css";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

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
        <Header />
        <main className="flex-1 overflow-hidden min-h-0 ">{children}</main>
      </body>
    </html>
  );
}
