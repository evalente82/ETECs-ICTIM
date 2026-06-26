import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollUtils";
import Home from "@/pages/Home";
import ProjectPage from "@/pages/ProjectPage";
import MarcoLegal from "@/pages/MarcoLegal";

/** Carregada sob demanda — só puxa o bundle 3D (three/r3f/drei) ao abrir o modo imersivo. */
const ImmersivePage = lazy(() => import("@/immersive/ImmersivePage"));

function SceneLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#06070d]">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-white/70" />
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Preparando a experiência…</p>
      </div>
    </div>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#06070d]">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/projeto/:slug" element={<Page><ProjectPage /></Page>} />
          <Route
            path="/imersivo/:slug"
            element={
              <Page>
                <Suspense fallback={<SceneLoader />}>
                  <ImmersivePage />
                </Suspense>
              </Page>
            }
          />
          <Route path="/marco-legal" element={<Page><MarcoLegal /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
