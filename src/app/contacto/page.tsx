"use client";

import { motion } from "framer-motion";

const schedule = [
  { day: "Segunda-feira", hours: "08:30 - 19:00", open: true },
  { day: "Terça-feira", hours: "08:30 - 19:00", open: true },
  { day: "Quarta-feira", hours: "08:30 - 19:00", open: true },
  { day: "Quinta-feira", hours: "08:30 - 19:00", open: true },
  { day: "Sexta-feira", hours: "08:30 - 19:00", open: true },
  { day: "Sábado", hours: "08:30 - 19:00", open: true },
  { day: "Domingo", hours: "Encerrado", open: false },
];

const trustBadges = [
  {
    icon: "local_shipping",
    title: "Entrega Rápida",
    desc: "Entregas na região de Sintra e arredores",
  },
  {
    icon: "support_agent",
    title: "Aconselhamento Grátis",
    desc: "Ajudamos a escolher o material certo para a sua obra",
  },
  {
    icon: "verified",
    title: "Profissionais de Confiança",
    desc: "Mais de 15 anos ao serviço dos construtores de Sintra",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
            Fale Connosco
          </span>
          <h1 className="font-[var(--font-manrope)] font-black text-5xl md:text-7xl text-on-surface max-w-4xl leading-tight tracking-tighter mt-4">
            Entre em Contacto
          </h1>
          <div className="h-1 w-24 bg-secondary mt-8" />
        </motion.header>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={badge.title}
              className="glow-card ghost-border rounded-xl bg-surface-container p-6 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0 group-hover:bg-secondary-container/40 transition-colors duration-500">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  {badge.icon}
                </span>
              </div>
              <div>
                <h3 className="font-[var(--font-manrope)] font-bold text-on-surface text-base mb-1">
                  {badge.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-light">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
          {/* Drogaria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glow-card ghost-border rounded-xl bg-surface-container p-10 md:p-12 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary-container/20 flex items-center justify-center group-hover:bg-secondary-container/40 transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    storefront
                  </span>
                </div>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  Drogaria VH
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-10 max-w-md">
                O seu parceiro em ferragens, tintas e ferramentas profissionais
                com o aconselhamento técnico que precisa.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <p className="text-xl font-medium">926 010 809</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Localização
                    </p>
                    <p className="text-xl font-medium">
                      Av. Dr. Álvaro de Vasconcelos 8, Sintra
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Horário
                    </p>
                    <p className="text-xl font-medium">
                      Seg-Sab: 08:30 - 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-white font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Fale connosco via WhatsApp
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </motion.div>

          {/* Remodelacoes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glow-card ghost-border rounded-xl bg-surface-container-low p-10 md:p-12 flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary-container/20 flex items-center justify-center group-hover:bg-secondary-container/40 transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    construction
                  </span>
                </div>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  VH Remodelações
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-10 max-w-md">
                Precisa de obras ou remodelações? Fale com a nossa equipa
                especializada.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    phone_iphone
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <p className="text-xl font-medium">936 569 642</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Email
                    </p>
                    <p className="text-xl font-medium">
                      obras@vinculos-harmoniosos.pt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/351936569642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-on-surface font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs ghost-border hover:bg-surface-container-high transition-colors"
              >
                Pedir orçamento de obra
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Horário de Funcionamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
                Quando Estamos Abertos
              </span>
              <h3 className="font-[var(--font-manrope)] font-bold text-3xl text-on-surface tracking-tight mt-3">
                Horário de Funcionamento
              </h3>
            </div>

            <div className="glow-card ghost-border rounded-xl bg-surface-container overflow-hidden">
              {schedule.map((item, i) => {
                const today = new Date().toLocaleDateString("pt-PT", { weekday: "long" });
                const isToday = today.toLowerCase() === item.day.toLowerCase();

                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between px-8 py-4 ${
                      i < schedule.length - 1 ? "border-b border-outline-variant/10" : ""
                    } ${isToday ? "bg-secondary-container/10" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                        </span>
                      )}
                      <span className={`font-[var(--font-manrope)] font-semibold text-sm ${isToday ? "text-secondary" : "text-on-surface"}`}>
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-[10px] uppercase tracking-widest font-bold text-secondary/70">
                            Hoje
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-sm ${
                        item.open ? "text-on-surface-variant" : "text-outline"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* WhatsApp QR suggestion + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          {/* WhatsApp QR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glow-card ghost-border rounded-xl bg-surface-container p-8 md:p-10 text-center h-full flex flex-col justify-center">
              <div className="w-20 h-20 rounded-2xl bg-secondary-container/20 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  qr_code_2
                </span>
              </div>
              <h3 className="font-[var(--font-manrope)] font-bold text-2xl text-on-surface mb-3">
                WhatsApp Direto
              </h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8 max-w-xs mx-auto">
                Envie-nos a sua lista de materiais ou peça um orçamento. Resposta rápida garantida.
              </p>
              <a
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg text-white font-[var(--font-manrope)] font-bold tracking-wider uppercase text-sm"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                926 010 809
              </a>
              <p className="text-on-surface-variant/50 text-xs mt-4">
                Disponível durante o horário de funcionamento
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glow-card ghost-border rounded-xl bg-surface-container p-8 md:p-10">
              <h3 className="font-[var(--font-manrope)] font-bold text-2xl mb-2 tracking-tight">
                Envie-nos uma mensagem
              </h3>
              <p className="text-on-surface-variant text-sm font-light mb-8">
                Preencha o formulário e entraremos em contacto consigo rapidamente.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                      Nome
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 focus:outline-none transition-all duration-300 placeholder:text-outline"
                      placeholder="Seu nome"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 focus:outline-none transition-all duration-300 placeholder:text-outline"
                      placeholder="Seu número"
                      type="tel"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Email (opcional)
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 focus:outline-none transition-all duration-300 placeholder:text-outline"
                    placeholder="Seu email"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Mensagem / Lista de Materiais
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 focus:outline-none transition-all duration-300 resize-none placeholder:text-outline"
                    placeholder="Descreva o que precisa ou envie a sua lista de materiais..."
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full riveted-btn py-4 text-white font-[var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-lg"
                >
                  Enviar Pedido
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden ghost-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12440.36!2d-9.38!3d38.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec5c4b4b3b3b3%3A0x0!2sSintra!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Drogaria VH em Sintra"
            />
            <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md rounded-lg p-4 ghost-border">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">pin_drop</span>
                <div>
                  <p className="font-[var(--font-manrope)] font-bold text-sm text-on-surface">
                    Drogaria VH
                  </p>
                  <p className="text-on-surface-variant text-xs">
                    Av. Dr. Álvaro de Vasconcelos 8, 2710-420 Sintra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
