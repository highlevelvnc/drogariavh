import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-12 w-full max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-bold text-primary uppercase tracking-widest mb-6 font-[var(--font-manrope)]">
            Drogaria VH
          </div>
          <p className="text-on-surface/50 text-sm leading-relaxed">
            Construimos o futuro com a precisao do presente. Solucoes integradas
            de construcao e retalho em Sintra.
          </p>
        </div>

        <div>
          <h4 className="text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            Navegacao
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/"
                className="text-on-surface/50 hover:text-secondary transition-all"
              >
                Drogaria VH
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-on-surface/50 hover:text-secondary transition-all"
              >
                Contacto
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-on-surface/50 hover:text-secondary transition-all"
              >
                VH Remodelacoes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            Suporte
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/contacto"
                className="text-on-surface/50 hover:text-secondary transition-all"
              >
                Contactos
              </Link>
            </li>
            <li>
              <span className="text-on-surface/50">Sintra, Portugal</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-6">
            Orcamentos
          </h4>
          <a
            href="https://wa.me/351926010809"
            target="_blank"
            rel="noopener noreferrer"
            className="riveted-btn block text-center py-3 rounded-lg text-white font-bold text-xs uppercase tracking-widest"
          >
            WhatsApp Direto
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 px-8 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <p className="text-on-surface/50 text-xs">
          &copy; 2025 Vinculos Harmoniosos - Construcao &amp; Drogaria. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
