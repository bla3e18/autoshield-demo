import { NextResponse } from "next/server";

type Metric = {
  label: string;
  value: number | string;
  change: string;
  tone: "up" | "down" | "neutral";
};

// Deterministic pseudo-random based on time — keeps demo data fresh without a DB.
function seededMetrics(): Metric[] {
  const day = Math.floor(Date.now() / (1000 * 60 * 30));
  const r = (n: number) => ((day * 9301 + 49297) % 233280) / 233280;
  const leadsToday = 14 + Math.floor(r(0) * 6);
  const conv = 35 + Math.floor(r(1) * 15);
  const avgCheck = 8400 + Math.floor(r(2) * 1200);
  const handling = 12 - Math.floor(r(3) * 5);

  return [
    { label: "Заявки сегодня", value: leadsToday, change: `+${Math.floor(r(4) * 4)} к вчера`, tone: "up" },
    { label: "Конверсия в оплату", value: `${conv}%`, change: `+${Math.floor(r(5) * 7)}%`, tone: "up" },
    { label: "Средний чек", value: `${avgCheck.toLocaleString("ru-RU")} ₽`, change: `+${Math.floor(r(6) * 8)}%`, tone: "up" },
    { label: "Среднее время обработки", value: `${handling} мин`, change: `-${Math.floor(r(7) * 4)} мин`, tone: "down" },
  ];
}

export function GET() {
  return NextResponse.json(seededMetrics());
}