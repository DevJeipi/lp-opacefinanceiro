import "./globals.css";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Pace Financeiro | Invista com segurança',
  description: 'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
  openGraph: {
    title: 'O Pace Financeiro | Invista com segurança',
    description: 'Aprenda a investir sem riscos utilizando o método Pace Financeiro, e adquira sua independência financeira.',
    images: ['...']//Adicionar URL da imagem
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
