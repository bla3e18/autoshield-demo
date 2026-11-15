"use client";

import { useEffect, useState } from "react";

type Metric = {
  label: string;
  value: number | string;
  change: string;
  tone: "up" | "down" | "neutral";
};

const FALLBACK: Metric[] = [
  { label: "Заявки сегодня", value: 14, change: "+3 к вчера", tone: "up" },
  { label: "Конверсия в оплату", value: "38%", change: "+5%", tone: "up" },
  { label: "Средний чек", value: "8 400 ₽", change: "+6%", tone: "up" },
  { label: "Среднее время обработки", value: "12 мин", change: "-4 мин", tone: "down" },
];

export default function Dashboard() {
  const [metrics, setMetrics] = useState<Metric[]>(FALLBACK);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/metrics");
        if (!res.ok) return;
        const data = (await res.json()) as Metric[];
        if (active && data?.length) setMetrics(data);
      } catch {
        // keep fallback
      }
    };
    load();
    const id = setInterval(load, 30000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const toneClass = (t: Metric["tone"]) =>
    t === "up" ? "text-emerald-400" : t === "down" ? "text-rose-400" : "text-slate-400";

  return (
    <div className="glass-card animate-fade-in [animation-delay:200ms]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Метрики</h3>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 transition-hover hover:bg-white/10">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{m.label}</div>
            <div className="mt-1 text-lg font-bold text-white">{m.value}</div>
            <div className={`mt-0.5 text-[10px] font-medium ${toneClass(m.tone)}`}>{m.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}