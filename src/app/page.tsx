"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "inventory_2",
    title: "Escolha os Produtos",
    desc: "Navegue pelas nossas categorias ou visite-nos em Sintra para ver o nosso stock completo.",
  },
  {
    num: "02",
    icon: "chat",
    title: "Peça via WhatsApp",
    desc: "Envie-nos a sua lista de materiais e receba um orçamento imediato e personalizado.",
  },
  {
    num: "03",
    icon: "local_shipping",
    title: "Entregamos em Sua Casa",
    desc: "Serviço de entrega rápido e seguro em toda a região de Sintra e arredores.",
  },
];

const categories = [
  { title: "Ferramentas", desc: "Elétricas e Manuais de alta performance.", image: "/servicos/servico-03.jpg", span: "md:col-span-3 md:row-span-2" },
  { title: "Tintas e Lixas", desc: "Acabamentos perfeitos para interiores e exteriores.", image: "/servicos/servico-08.jpg", span: "md:col-span-3 md:row-span-1" },
  { title: "Material Elétrico", desc: "", image: "/servicos/servico-12.jpg", span: "md:col-span-1 md:row-span-1" },
  { title: "Canalização", desc: "", image: "/servicos/servico-15.jpg", span: "md:col-span-2 md:row-span-2" },
  { title: "Cimento e Agregados", desc: "", image: "/servicos/servico-18.jpg", span: "md:col-span-2 md:row-span-1" },
  { title: "Equipamento de Proteção", desc: "", image: "/servicos/servico-20.jpg", span: "md:col-span-2 md:row-span-1" },
];

export default function DrogariaHome() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[90vh] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/drogaria/drogaria-loja.jpg"
            alt="Drogaria VH Sintra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface/95" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 pb-24"
        >
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-secondary-container text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 rounded-sm">
              Drogaria VH
            </span>
            <h1 className="font-[var(--font-manrope)] font-extrabold text-5xl md:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-6">
              Drogaria VH - Tudo para a sua Construção
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed mb-10">
              A sua loja de confiança em Sintra. Materiais elétricos,
              ferramentas, tintas e muito mais para profissionais e particulares.
            </p>
            <a
              href="https://wa.me/351926010809"
              target="_blank"
              rel="noopener noreferrer"
              className="riveted-btn flex items-center gap-3 px-8 py-4 rounded-lg text-white font-[var(--font-manrope)] font-extrabold tracking-widest uppercase w-fit"
            >
              Pedir via WhatsApp
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
          </div>
        </motion.div>
      </header>

      {/* Como Funciona */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-[var(--font-manrope)] font-bold text-4xl text-primary tracking-tight mb-4 uppercase">
              Como Funciona
            </h2>
            <div className="h-1 w-24 bg-secondary-container" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-secondary font-[var(--font-manrope)] font-black text-7xl opacity-20 mb-[-2rem] group-hover:opacity-40 transition-opacity">
                  {step.num}
                </div>
                <div className="relative z-10 p-8 bg-surface-container-high rounded-lg ghost-border">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                    {step.icon}
                  </span>
                  <h3 className="font-[var(--font-manrope)] font-bold text-xl text-on-surface mb-4">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias de Produtos - Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-[var(--font-manrope)] font-bold text-4xl text-primary tracking-tight mb-4 uppercase">
                Categorias de Produtos
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                A precisão de um projeto começa com a escolha certa dos
                materiais. Qualidade industrial ao seu alcance.
              </p>
            </div>
            <a
              href="https://wa.me/351926010809"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-[var(--font-manrope)] font-bold tracking-widest uppercase border-b border-secondary/30 hover:border-secondary transition-all pb-1"
            >
              Ver Catálogo Completo
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className={`${cat.span} relative group overflow-hidden rounded-lg`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent p-6 md:p-8 flex flex-col justify-end">
                  <h4 className="font-[var(--font-manrope)] font-extrabold text-xl md:text-2xl text-white">
                    {cat.title}
                  </h4>
                  {cat.desc && (
                    <p className="text-white/70 text-sm mt-1">{cat.desc}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localizacao */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-manrope)] font-extrabold text-5xl text-on-surface mb-8">
              Estamos no coração de Sintra.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-manrope)] font-bold text-lg text-primary">
                    Localização
                  </p>
                  <p className="text-on-surface-variant font-light">
                    Av. Dr. Álvaro de Vasconcelos 8, 2710-420 Sintra
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-manrope)] font-bold text-lg text-primary">
                    Horário
                  </p>
                  <p className="text-on-surface-variant font-light">
                    Segunda - Sábado: 08:30 - 19:00
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://instagram.com/drogariavh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-surface-container-high px-8 py-4 rounded-lg ghost-border hover:bg-surface-bright transition-colors"
                >
                  <span className="material-symbols-outlined text-secondary">
                    photo_camera
                  </span>
                  <span className="font-[var(--font-manrope)] font-bold tracking-tight">
                    Siga-nos no Instagram{" "}
                    <span className="text-secondary">@drogariavh</span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[500px] w-full rounded-lg overflow-hidden ghost-border">
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
          </div>
        </div>
      </section>
    </>
  );
}
