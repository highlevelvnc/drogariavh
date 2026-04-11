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
  {
    title: "Ferramentas Elétricas",
    desc: "Rebarbadoras, berbequins, lixadeiras, martelos perfuradores. Marcas profissionais.",
    image: "/servicos/servico-03.jpg",
    span: "md:col-span-4 md:row-span-2",
    large: true,
  },
  {
    title: "Tintas e Vernizes",
    desc: "Tintas de interior e exterior, primários, vernizes, diluentes. CIN, Robbialac, Dyrup.",
    image: "/servicos/servico-08.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
  {
    title: "Lixas e Abrasivos",
    desc: "Lixas de água, lixas de ferro, discos de corte, discos de lixa para rebarbadora.",
    image: "/servicos/servico-12.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
  {
    title: "Material Elétrico",
    desc: "Cabos, tomadas, disjuntores, quadros elétricos, iluminação LED.",
    image: "/servicos/servico-15.jpg",
    span: "md:col-span-2 md:row-span-2",
    large: false,
  },
  {
    title: "Canalização",
    desc: "Tubos PPR, acessórios PVC, torneiras, válvulas, sifões, cola para tubos.",
    image: "/servicos/servico-18.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
  {
    title: "Cimento e Argamassas",
    desc: "Cimento Portland, argamassa de reboco, betão pronto, gesso, cal.",
    image: "/servicos/servico-20.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
  {
    title: "Ferramentas Manuais",
    desc: "Chaves de fenda, alicates, martelos, fitas métricas, níveis, esquadros.",
    image: "/servicos/servico-25.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
  {
    title: "Equipamento de Proteção",
    desc: "Capacetes, luvas, botas de segurança, óculos, arneses, coletes.",
    image: "/servicos/servico-30.jpg",
    span: "md:col-span-2 md:row-span-1",
    large: false,
  },
];

const featuredProducts = [
  {
    name: "Rebarbadora Bosch 125mm",
    desc: "Potência de 720W, disco de 125mm. Ideal para corte e desbaste em obra.",
    image: "/servicos/servico-03.jpg",
  },
  {
    name: "Tinta CIN Nova Interior 15L",
    desc: "Tinta plástica de alta cobertura para paredes interiores. Acabamento mate.",
    image: "/servicos/servico-08.jpg",
  },
  {
    name: "Lixadeira Orbital Makita",
    desc: "Lixadeira orbital profissional, base de velcro, aspiração de pó integrada.",
    image: "/servicos/servico-12.jpg",
  },
  {
    name: "Kit Ferramentas Profissional 108 peças",
    desc: "Mala completa com chaves, alicates, pontas e acessórios para todo o tipo de trabalho.",
    image: "/servicos/servico-25.jpg",
  },
];

const trustPoints = [
  {
    icon: "support_agent",
    title: "Aconselhamento Técnico Especializado",
    desc: "Equipa com experiência em obra para o ajudar a escolher o material certo.",
  },
  {
    icon: "local_shipping",
    title: "Entregas na Região de Sintra",
    desc: "Serviço de entrega rápida para obras e particulares na zona de Sintra.",
  },
  {
    icon: "savings",
    title: "Preços Competitivos para Profissionais",
    desc: "Condições especiais para empresas de construção e profissionais regulares.",
  },
  {
    icon: "warehouse",
    title: "Stock Disponível para Entrega Imediata",
    desc: "Milhares de referências em armazém prontas a levantar ou entregar.",
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

export default function DrogariaHome() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <header className="relative min-h-screen w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/drogaria/drogaria-loja.jpg"
            alt="Drogaria VH Sintra"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/20 to-surface" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/70 via-transparent to-transparent" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 pb-28"
        >
          <div className="max-w-4xl">
            {/* Animated badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary-container/80 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full border border-secondary/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                </span>
                Loja Física em Sintra
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[var(--font-manrope)] font-extrabold text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.0] tracking-tighter mb-6"
            >
              Tudo para a sua{" "}
              <span className="text-gradient">Construção</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-on-surface-variant text-lg md:text-2xl max-w-2xl font-normal leading-relaxed mb-10"
            >
              Ferramentas, tintas, materiais elétricos e de canalização.
              A drogaria de confiança dos profissionais em Sintra.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn flex items-center gap-3 px-8 py-4 rounded-lg text-white font-[var(--font-manrope)] font-extrabold tracking-widest uppercase text-sm"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Pedir via WhatsApp
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
              <a
                href="#categorias"
                className="flex items-center gap-3 px-8 py-4 rounded-lg text-on-surface font-[var(--font-manrope)] font-bold tracking-widest uppercase text-sm ghost-border hover:bg-surface-container-high/50 transition-all"
              >
                Ver Produtos
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.3em] font-bold">
            Explorar
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="material-symbols-outlined text-secondary text-xl"
          >
            keyboard_arrow_down
          </motion.span>
        </motion.div>
      </header>

      {/* ───────── Como Funciona ───────── */}
      <section className="py-28 bg-surface-container-low section-divider">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
              Simples e Rápido
            </span>
            <h2 className="font-[var(--font-manrope)] font-bold text-4xl md:text-5xl text-on-surface tracking-tight mt-4 mb-4">
              Como Funciona
            </h2>
            <div className="h-1 w-24 bg-secondary-container mx-auto" />
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent -translate-y-4 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="group relative z-10"
              >
                <div className="text-secondary font-[var(--font-manrope)] font-black text-8xl opacity-[0.06] mb-[-2.5rem] group-hover:opacity-25 transition-opacity duration-500 text-center">
                  {step.num}
                </div>
                <div className="relative z-10 p-8 md:p-10 bg-surface-container-high rounded-xl glow-card ghost-border text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary-container/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-container/50 transition-colors duration-500">
                    <span className="material-symbols-outlined text-secondary text-3xl">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-manrope)] font-bold text-xl text-on-surface mb-4">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant font-normal leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 translate-y-2 z-20">
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
                      className="material-symbols-outlined text-secondary/40 text-2xl"
                    >
                      arrow_forward
                    </motion.span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Categorias de Produtos ───────── */}
      <section id="categorias" className="py-28 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
                O Que Vendemos
              </span>
              <h2 className="font-[var(--font-manrope)] font-bold text-4xl md:text-5xl text-on-surface tracking-tight mt-4 mb-4">
                Categorias de Produtos
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                A precisão de um projeto começa com a escolha certa dos
                materiais. Qualidade profissional ao seu alcance.
              </p>
            </motion.div>
            <a
              href="https://wa.me/351926010809"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline text-secondary font-[var(--font-manrope)] font-bold tracking-widest uppercase text-sm pb-1 shrink-0"
            >
              Ver Catálogo Completo
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-[220px] md:auto-rows-[250px]">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`${cat.span} relative group overflow-hidden rounded-xl glow-card`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Default gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-container/95 via-surface/80 to-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Default content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <h4 className={`font-[var(--font-manrope)] font-extrabold text-white ${cat.large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                    {cat.title}
                  </h4>
                  {cat.large && (
                    <p className="text-white/70 text-sm mt-2 max-w-md">{cat.desc}</p>
                  )}
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                  <h4 className={`font-[var(--font-manrope)] font-extrabold text-white ${cat.large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} mb-2`}>
                    {cat.title}
                  </h4>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-secondary font-[var(--font-manrope)] font-bold text-sm uppercase tracking-wider">
                    Pedir via WhatsApp
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Produtos Mais Procurados ───────── */}
      <section className="py-28 bg-surface-container-low section-divider">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
              Mais Vendidos
            </span>
            <h2 className="font-[var(--font-manrope)] font-bold text-4xl md:text-5xl text-on-surface tracking-tight mt-4 mb-4">
              Produtos Mais Procurados
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Os produtos que os profissionais de Sintra mais escolhem para as suas obras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group glow-card ghost-border rounded-xl overflow-hidden bg-surface-container"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-[var(--font-manrope)] font-bold text-lg text-on-surface mb-2 leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-5">
                    {product.desc}
                  </p>
                  <a
                    href="https://wa.me/351926010809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="riveted-btn flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-white font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Encomendar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Porque Escolher a Drogaria VH ───────── */}
      <section className="py-28 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
              A Nossa Garantia
            </span>
            <h2 className="font-[var(--font-manrope)] font-bold text-4xl md:text-5xl text-on-surface tracking-tight mt-4 mb-4">
              Porque Escolher a Drogaria VH?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glow-card ghost-border rounded-xl bg-surface-container p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-container/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-container/40 transition-colors duration-500">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    {point.icon}
                  </span>
                </div>
                <h4 className="font-[var(--font-manrope)] font-bold text-on-surface text-lg mb-3 leading-tight">
                  {point.title}
                </h4>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Localização ───────── */}
      <section className="py-28 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-[11px] font-bold tracking-[0.3em] uppercase">
                Visite-nos
              </span>
              <h2 className="font-[var(--font-manrope)] font-extrabold text-4xl md:text-5xl text-on-surface mt-4 mb-10 leading-tight tracking-tighter">
                Estamos no coração de Sintra.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-secondary-container/30 transition-colors duration-500">
                    <span className="material-symbols-outlined text-secondary text-2xl">
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
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-secondary-container/30 transition-colors duration-500">
                    <span className="material-symbols-outlined text-secondary text-2xl">
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
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-secondary-container/30 transition-colors duration-500">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      call
                    </span>
                  </div>
                  <div>
                    <p className="font-[var(--font-manrope)] font-bold text-lg text-primary">
                      WhatsApp / Telefone
                    </p>
                    <p className="text-on-surface-variant font-light">
                      926 010 809
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/351926010809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="riveted-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-lg text-white font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    Fale Connosco
                  </a>
                  <a
                    href="https://instagram.com/drogariavh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-surface-container-high px-6 py-3.5 rounded-lg ghost-border hover:bg-surface-bright transition-colors font-[var(--font-manrope)] font-bold tracking-wider uppercase text-xs text-on-surface"
                  >
                    <span className="material-symbols-outlined text-secondary text-base">
                      photo_camera
                    </span>
                    @drogariavh
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[520px] w-full rounded-xl overflow-hidden ghost-border">
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
              {/* Address overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md rounded-lg p-4 ghost-border">
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
