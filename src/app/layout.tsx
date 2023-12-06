import type { Metadata } from "next";
import './globals.css';
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "Simple todo app made with nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={sarabun.className}>
        <>{children}</>
      </body>
    </html>
  );
}
