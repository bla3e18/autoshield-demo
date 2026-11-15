"use client";

import { FormEvent, useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", car: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card animate-fade-in border-emerald-500/30 bg-emerald-500/10 text-center py-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl font-bold mb-3">
          ✓
        </div>
        <h3 className="text-lg font-bold text-white">Заявка принята!</h3>
        <p className="mt-1 text-sm text-slate-300">Менеджер свяжется с вами в течение 15 минут.</p>
      </div>
    );
  }

  return (
    <div className="glass-card animate-fade-in [animation-delay:100ms]">
      <h3 className="text-lg font-bold text-white">Оставить заявку</h3>
      <p className="text-sm text-slate-400 mt-1">Перезвоним и уточним детали</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <input
            className="input-modern"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            className="input-modern"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            className="input-modern"
            placeholder="Марка авто (например, BMW X5)"
            value={form.car}
            onChange={(e) => setForm({ ...form, car: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        >
          {status === "loading" ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>
    </div>
  );
}