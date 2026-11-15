"use client";

import { useMemo, useState } from "react";

export type ServiceType = "basic" | "premium" | "express";

export default function Calculator() {
  const [service, setService] = useState<ServiceType>("basic");
  const [hours, setHours] = useState(2);

  const price = useMemo(() => {
    const rates = { basic: 1500, premium: 3500, express: 5000 };
    return rates[service] * hours;
  }, [service, hours]);

  return (
    <div className="glass-card animate-fade-in">
      <h2 className="text-2xl font-bold text-white">Калькулятор</h2>
      <p className="text-sm text-slate-400 mt-1">Оцените стоимость в реальном времени</p>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "basic", label: "Базовый" },
            { id: "premium", label: "Премиум" },
            { id: "express", label: "Экспресс" },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setService(s.id as ServiceType)}
              className={`rounded-2xl border p-4 text-center transition-all ${
                service === s.id
                  ? "border-indigo-500 bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <div className="font-semibold">{s.label}</div>
            </button>
          ))}
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Время: {hours} ч.</label>
          <input
            type="range" min={1} max={72} value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full mt-2 accent-indigo-500 cursor-pointer"
          />
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/5 flex items-center justify-between">
          <span className="text-slate-400">Итого:</span>
          <span className="text-3xl font-bold gradient-text">{price.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  );
}