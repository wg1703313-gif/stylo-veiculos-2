import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stylo Veículos | Encontre seu próximo carro",
  description: "Carros selecionados, atendimento próximo e a melhor negociação. Conheça a Stylo Veículos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
