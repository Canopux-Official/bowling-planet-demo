import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { QuoteCartDrawer } from "./QuoteCartDrawer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <QuoteCartDrawer />
    </div>
  );
}
