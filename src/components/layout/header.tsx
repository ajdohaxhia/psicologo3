"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/servizi" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 relative z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Psicologo Di Base Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-none">
              Psicologo Di Base
            </span>
            <span className="hidden md:block text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 mt-0.5 font-sans">
              Professionalità · Ascolto · Cura
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 text-foreground/60 hover:text-foreground hover:bg-secondary/50 rounded-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="h-5 w-px bg-border/60 mx-1" />
          <Button asChild variant="default" size="sm" className="rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm transition-all hover:translate-y-[-1px]">
            <Link href="/contatti">Prenota un colloquio</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden relative z-[60]">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="p-2 text-foreground/70 hover:text-foreground bg-secondary/50 rounded-full transition-colors"
            aria-label="Chiama ora"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed inset-0 z-50 bg-background flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl font-medium text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Button
                  asChild
                  size="xl"
                  className="w-full rounded-full shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contatti">Prenota un colloquio</Link>
                </Button>
                <div className="flex flex-col gap-1.5 items-center text-muted-foreground">
                  <p className="text-xs font-medium uppercase tracking-widest opacity-60">Contatti</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-lg font-medium text-foreground">{siteConfig.contact.phone}</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
