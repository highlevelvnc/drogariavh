"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full relative">
      {/* Gradient separator at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(255, 158, 148, 0.15) 30%, rgba(185, 199, 228, 0.1) 70%, transparent 95%)",
        }}
      />

      <div className="pt-20 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-12 w-full max-w-screen-2xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand column */}
          <motion.div className="md:col-span-1" variants={columnVariants}>
            <div className="text-xl font-bold text-primary uppercase tracking-widest mb-6 font-[var(--font-manrope)]">
              Drogaria VH
            </div>
            <p className="text-on-surface/50 text-sm leading-relaxed mb-6">
              Construímos o futuro com a precisão do presente. Soluções integradas
              de construção e retalho em Sintra.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface/40 hover:text-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface/40 hover:text-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div variants={columnVariants}>
            <h4 className="text-secondary font-semibold text-[11px] uppercase tracking-[0.15em] mb-6">
              Navegação
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="animated-underline text-on-surface/50 hover:text-secondary transition-all duration-300 w-fit inline-block"
                >
                  Drogaria VH
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="animated-underline text-on-surface/50 hover:text-secondary transition-all duration-300 w-fit inline-block"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="animated-underline text-on-surface/50 hover:text-secondary transition-all duration-300 w-fit inline-block"
                >
                  VH Remodelações
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support column */}
          <motion.div variants={columnVariants}>
            <h4 className="text-secondary font-semibold text-[11px] uppercase tracking-[0.15em] mb-6">
              Suporte
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/contacto"
                  className="animated-underline text-on-surface/50 hover:text-secondary transition-all duration-300 w-fit inline-block"
                >
                  Contactos
                </Link>
              </li>
              <li>
                <span className="text-on-surface/50">Sintra, Portugal</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA column */}
          <motion.div variants={columnVariants}>
            <h4 className="text-secondary font-semibold text-[11px] uppercase tracking-[0.15em] mb-6">
              Orçamentos
            </h4>
            <a
              href="https://wa.me/351926010809"
              target="_blank"
              rel="noopener noreferrer"
              className="riveted-btn block text-center py-4 px-6 rounded-lg text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp Direto
            </a>
            <p className="text-on-surface/30 text-xs text-center mt-3">
              Resposta rápida garantida
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="px-8 md:px-12 w-full max-w-screen-2xl mx-auto pt-8 flex flex-col md:flex-row justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(185, 199, 228, 0.06)",
          }}
        >
          <p className="text-on-surface/40 text-xs">
            &copy; 2025 Vínculos Harmoniosos - Construção &amp; Drogaria. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
