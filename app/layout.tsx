import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetSpace - Cuide Melhor do Seu Pet",
  description: "A plataforma completa para gerenciar a saúde, bem-estar e felicidade do seu melhor amigo",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}