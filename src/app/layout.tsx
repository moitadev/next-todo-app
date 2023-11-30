import type { Metadata } from "next";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo List",
  description: "Todo list nextjs app",
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
