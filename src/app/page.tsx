"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ────────────────────────── DATA ────────────────────────── */

const categories = [
  {
    title: "Ferramentas Elétricas",
    desc: "Rebarbadoras, berbequins, lixadeiras, martelos perfuradores.",
    image: "/servicos/servico-03.jpg",
    icon: "construction",
  },
  {
    title: "Tintas e Vernizes",
    desc: "Interior, exterior, primários, vernizes. CIN, Robbialac, Dyrup.",
    image: "/servicos/servico-08.jpg",
    icon: "format_paint",
  },
  {
    title: "Lixas e Abrasivos",
    desc: "Lixas de água, ferro, discos de corte e lixa para rebarbadora.",
    image: "/servicos/servico-12.jpg",
    icon: "carpenter",
  },
  {
    title: "Material Elétrico",
    desc: "Cabos, tomadas, disjuntores, quadros elétricos, LED.",
    image: "/servicos/servico-15.jpg",
    icon: "electrical_services",
  },
  {
    title: "Canalização",
    desc: "Tubos PPR, acessórios PVC, torneiras, válvulas, sifões.",
    image: "/servicos/servico-18.jpg",
    icon: "plumbing",
  },
  {
    title: "Cimento e Argamassas",
    desc: "Cimento Portland, argamassa, betão pronto, gesso, cal.",
    image: "/servicos/servico-20.jpg",
    icon: "foundation",
  },
  {
    title: "Ferramentas Manuais",
    desc: "Chaves, alicates, martelos, fitas métricas, níveis.",
    image: "/servicos/servico-25.jpg",
    icon: "handyman",
  },
  {
    title: "Equipamento de Proteção",
    desc: "Capacetes, luvas, botas, óculos, arneses, coletes.",
    image: "/servicos/servico-30.jpg",
    icon: "health_and_safety",
  },
];

const featuredProducts = [
  {
    name: "Rebarbadora Bosch 125mm",
    desc: "720W, disco 125mm. Corte e desbaste profissional.",
    image: "/servicos/servico-03.jpg",
    tag: "Mais Vendido",
  },
  {
    name: "Tinta CIN Nova Interior 15L",
    desc: "Alta cobertura, acabamento mate. Paredes interiores.",
    image: "/servicos/servico-08.jpg",
    tag: "Popular",
  },
  {
    name: "Lixadeira Orbital Makita",
    desc: "Base velcro, aspiração de pó integrada. Profissional.",
    image: "/servicos/servico-12.jpg",
    tag: "Novidade",
  },
  {
    name: "Kit Ferramentas 108 Peças",
    desc: "Mala completa: chaves, alicates, pontas e acessórios.",
    image: "/servicos/servico-25.jpg",
    tag: "Destaque",
  },
];

const trustPoints = [
  { icon: "support_agent", title: "Aconselhamento Técnico", desc: "Equipa com experiência em obra." },
  { icon: "local_shipping", title: "Entregas em Sintra", desc: "Entrega rápida na região." },
  { icon: "savings", title: "Preços Profissionais", desc: "Condições especiais para empresas." },
  { icon: "warehouse", title: "Stock Imediato", desc: "Milhares de referências em armazém." },
];

const WA = "https://wa.me/351926010809";

/* ────────────────────────── COMPONENT ────────────────────────── */

export default function DrogariaHome() {
  return (
    <>
      {/* ═══════════ HERO — Mobile-first, compacto ═══════════ */}
      <header className="relative min-h-[85vh] md:min-h-screen w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/drogaria/drogaria-loja.jpg"
            alt="Drogaria VH Sintra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full px-5 md:px-8 pb-8 md:pb-20 max-w-screen-2xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-container/80 text-white text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase rounded-full mb-4 md:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Loja Aberta em Sintra
          </span>

          <h1 className="font-[var(--font-manrope)] font-extrabold text-3xl sm:text-5xl md:text-7xl text-on-surface leading-[1.1] tracking-tighter mb-3 md:mb-6 max-w-3xl">
            Materiais de{" "}
            <span className="text-gradient">Construção</span>
          </h1>

          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mb-6 md:mb-8">
            Ferramentas, tintas, material elétrico e canalização.
            A drogaria dos profissionais em Sintra.
          </p>

          {/* CTAs — stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="riveted-btn flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedir via WhatsApp
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-on-surface font-bold tracking-wider uppercase text-xs ghost-border hover:bg-surface-container-high/50 transition-all"
            >
              Ver Produtos
              <span className="material-symbols-outlined text-base">expand_more</span>
            </a>
          </div>
        </motion.div>
      </header>

      {/* ═══════════ TRUST BAR — Faixa compacta ═══════════ */}
      <section className="bg-surface-container-low border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-5 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {trustPoints.map((p) => (
              <div key={p.title} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-xl md:text-2xl shrink-0">
                  {p.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-[var(--font-manrope)] font-bold text-on-surface text-xs md:text-sm leading-tight truncate">
                    {p.title}
                  </p>
                  <p className="text-on-surface-variant text-[10px] md:text-xs leading-tight hidden sm:block">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CATEGORIAS — Grid mobile-first tipo loja ═══════════ */}
      <section id="produtos" className="py-10 md:py-20 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-6 md:mb-12">
            <div>
              <span className="text-secondary text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                Categorias
              </span>
              <h2 className="font-[var(--font-manrope)] font-bold text-2xl md:text-4xl text-on-surface tracking-tight mt-1">
                O Que Vendemos
              </h2>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex animated-underline text-secondary font-bold text-sm uppercase tracking-wider pb-1"
            >
              Catálogo Completo
            </a>
          </div>

          {/* Category grid — 2 cols on mobile, 4 on tablet, bento on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`relative group overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient — always visible, not fighting with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 via-[#000]/30 to-transparent" />

                {/* Content — always at bottom, clear and readable */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3">
                    <span className="material-symbols-outlined text-white text-base md:text-xl">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className={`font-[var(--font-manrope)] font-bold text-white leading-tight ${
                    i === 0 ? "text-lg sm:text-xl md:text-2xl" : "text-sm sm:text-base md:text-lg"
                  }`}>
                    {cat.title}
                  </h3>
                  <p className={`text-white/60 leading-snug mt-1 ${
                    i === 0 ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs hidden sm:block"
                  }`}>
                    {cat.desc}
                  </p>
                  {/* WhatsApp arrow — visible on hover desktop, always on mobile */}
                  <div className="flex items-center gap-1 mt-2 md:mt-3">
                    <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      Pedir
                    </span>
                    <span className="material-symbols-outlined text-secondary text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden riveted-btn flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-bold uppercase tracking-wider text-xs mt-6"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </section>

      {/* ═══════════ PRODUTOS DESTAQUE — Cards horizontais no mobile ═══════════ */}
      <section className="py-10 md:py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-6 md:mb-12">
            <div>
              <span className="text-secondary text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                Mais Vendidos
              </span>
              <h2 className="font-[var(--font-manrope)] font-bold text-2xl md:text-4xl text-on-surface tracking-tight mt-1">
                Produtos em Destaque
              </h2>
            </div>
          </div>

          {/* Products — horizontal scroll on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-5 px-5 md:mx-0 md:px-0">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="min-w-[260px] md:min-w-0 snap-start ghost-border rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 md:flex-shrink group"
              >
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                  {/* Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-secondary-container/90 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                    {product.tag}
                  </span>
                </div>
                {/* Info */}
                <div className="p-4 md:p-5">
                  <h4 className="font-[var(--font-manrope)] font-bold text-sm md:text-base text-on-surface mb-1.5 leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-on-surface-variant text-xs leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="riveted-btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-bold uppercase text-[10px] md:text-xs tracking-wider"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Encomendar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMO FUNCIONA — Compacto ═══════════ */}
      <section className="py-10 md:py-20 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8">
          <h2 className="font-[var(--font-manrope)] font-bold text-2xl md:text-4xl text-on-surface tracking-tight mb-8 md:mb-12 text-center">
            Como Comprar
          </h2>

          <div className="grid grid-cols-3 gap-3 md:gap-8">
            {[
              { num: "1", icon: "inventory_2", label: "Escolha" },
              { num: "2", icon: "chat", label: "WhatsApp" },
              { num: "3", icon: "local_shipping", label: "Entrega" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-secondary text-xl md:text-3xl">
                    {step.icon}
                  </span>
                </div>
                <p className="font-[var(--font-manrope)] font-bold text-xs md:text-sm text-on-surface">
                  {step.label}
                </p>
                <p className="text-on-surface-variant text-[10px] md:text-xs mt-0.5 hidden md:block">
                  {i === 0 && "Navegue pelas categorias"}
                  {i === 1 && "Envie a sua lista"}
                  {i === 2 && "Receba em casa"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LOCALIZAÇÃO — Compacto no mobile ═══════════ */}
      <section className="py-10 md:py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Info */}
            <div>
              <h2 className="font-[var(--font-manrope)] font-bold text-2xl md:text-4xl text-on-surface tracking-tight mb-6 md:mb-10">
                Visite-nos em Sintra
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  { icon: "location_on", label: "Morada", value: "Av. Dr. Álvaro de Vasconcelos 8, Sintra" },
                  { icon: "schedule", label: "Horário", value: "Seg-Sáb: 08:30 – 19:00" },
                  { icon: "call", label: "Telefone", value: "926 010 809" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-lg md:text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-[var(--font-manrope)] font-medium text-on-surface text-sm md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6 md:mt-8">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="riveted-btn flex items-center gap-2 px-5 py-3 rounded-xl text-white font-bold uppercase text-[10px] md:text-xs tracking-wider"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/drogariavh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl ghost-border hover:bg-surface-container-high/50 transition-all text-on-surface font-bold uppercase text-[10px] md:text-xs tracking-wider"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">photo_camera</span>
                  Instagram
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[280px] md:h-[450px] w-full rounded-2xl overflow-hidden ghost-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-9.3817!3d38.7976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edab2ae1e5c7b%3A0x10f54c41bc4f6402!2sSintra!5e0!3m2!1spt-PT!2spt!4v1"
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
        </div>
      </section>
    </>
  );
}
