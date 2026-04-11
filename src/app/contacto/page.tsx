"use client";

import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="font-[var(--font-manrope)] font-black text-5xl md:text-7xl text-on-surface max-w-4xl leading-tight tracking-tighter">
            Entre em Contacto
          </h1>
          <div className="h-1 w-24 bg-secondary mt-8" />
        </motion.header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/10 rounded-xl overflow-hidden mb-24">
          {/* Drogaria */}
          <div className="bg-surface-container p-12 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  storefront
                </span>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  Drogaria VH
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                O seu parceiro em ferragens, tintas e ferramentas profissionais
                com o aconselhamento tecnico que precisa.
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
                      Localizacao
                    </p>
                    <p className="text-xl font-medium">
                      Av. Dr. Alvaro de Vasconcelos 8, Sintra
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Horario
                    </p>
                    <p className="text-xl font-medium">
                      Seg-Sab: 08:30 - 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all"
              >
                Fale connosco via WhatsApp{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Remodelacoes */}
          <div className="bg-surface-container-low p-12 flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  construction
                </span>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  VH Remodelacoes
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                Precisa de obras ou remodelacoes? Fale com a nossa equipa
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
            <div className="mt-12">
              <a
                href="https://wa.me/351936569642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all"
              >
                Pedir orcamento de obra{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-[var(--font-manrope)] font-bold text-2xl mb-8 tracking-tight text-center">
            Envie-nos uma mensagem
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Nome
              </label>
              <input
                className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Seu nome"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Telefone / WhatsApp
              </label>
              <input
                className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Seu numero"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Mensagem / Lista de Materiais
              </label>
              <textarea
                className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Descreva o que precisa..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full riveted-btn py-4 text-on-secondary font-[var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-lg hover:scale-[1.02] transition-transform"
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
