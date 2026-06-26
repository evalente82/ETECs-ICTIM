import { Link } from "react-router-dom";
import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#070810]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 via-indigo-500 to-amber-400" />
                <span className="absolute inset-[3px] rounded-[6px] bg-[#070810]" />
                <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-emerald-300 via-indigo-400 to-amber-300" />
              </span>
              <span className="font-display text-base font-semibold text-white">
                ETECs · ICTIM
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Três propostas de Encomendas Tecnológicas em IA Generativa e LLM da{" "}
              <span className="text-white/80">VCorp Sistem</span> para o ecossistema de inovação de
              Maricá, RJ.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://vcorpsistem.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/25 hover:text-white"
              >
                <Globe size={13} /> vcorpsistem.com
              </a>
              <a
                href="https://www.linkedin.com/in/endrigo-valente-3357a635/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/25 hover:text-white"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href="https://github.com/evalente82/ETECs-ICTIM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/25 hover:text-white"
              >
                <Github size={13} /> Repositório
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Propostas
            </h4>
            <ul className="mt-4 space-y-2.5">
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/projeto/${p.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {p.number} · {p.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/marco-legal"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  Marco Legal das ETECs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contato direto
            </h4>
            <p className="mt-4 text-sm font-medium text-white/80">Endrigo Valente</p>
            <p className="text-xs text-white/40">Fundador & CEO · VCorp Sistem</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:+5521993593760"
                  className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"
                >
                  <Phone size={13} /> (21) 99359-3760
                </a>
              </li>
              <li>
                <a
                  href="mailto:endrigo@vcorpsistem.com"
                  className="inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"
                >
                  <Mail size={13} /> endrigo@vcorpsistem.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/30">
              Comercial (AtendIA): (21) 99029-7098
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} VCorp Sistem · CNPJ 28.988.813/0001-50</p>
          <p>Maricá · Rio de Janeiro · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
