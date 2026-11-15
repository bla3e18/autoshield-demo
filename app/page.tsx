import Calculator from "@/components/Calculator";
import Dashboard from "@/components/Dashboard";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 lg:p-24">
      {/* Анимированный фон */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_50%,#1e1b4b,transparent)]" />

      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center animate-fade-in">
          <div className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium border border-white/10 mb-4">
            🚀 AutoShield Enterprise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Будущее <span className="gradient-text">автосервиса</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Интерактивные инструменты для бизнеса нового поколения.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Calculator />
          </div>
          <div className="space-y-8">
            <LeadForm />
            <Dashboard />
          </div>
        </section>
      </div>
    </main>
  );
}