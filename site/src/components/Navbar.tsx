import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Início", end: true },
  ...PROJECTS.map((p) => ({ to: `/projeto/${p.slug}`, label: p.shortTitle, end: false })),
  { to: "/marco-legal", label: "Marco Legal", end: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled ? "glass-strong shadow-lg shadow-black/40" : "border border-transparent"
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5 pl-1">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 via-indigo-500 to-amber-400 opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-[3px] rounded-[6px] bg-[#06070d]" />
            <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-emerald-300 via-indigo-400 to-amber-300" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            ETECs<span className="text-white/40">·</span>ICTIM
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  isActive ? "text-white" : "text-white/55 hover:text-white/90"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute top-[68px] mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
