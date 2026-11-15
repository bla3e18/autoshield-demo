import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoShield — Калькулятор стоимости автосервиса",
  description: "Интерактивный калькулятор, форма заявки и мини-дашборд для автосервиса.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}