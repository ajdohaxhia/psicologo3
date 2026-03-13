"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Heart,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

const footerLinks = {
  servizi: [
    { name: "Colloqui individuali", href: "/servizi" },
    { name: "Sostegno psicologico", href: "/servizi" },
    { name: "Percorsi di ascolto", href: "/servizi" },
    { name: "Supporto famiglie", href: "/servizi" },
  ],
  informazioni: [
    { name: "Chi siamo", href: "/chi-siamo" },
    { name: "Il nostro team", href: "/chi-siamo" },
    { name: "Domande frequenti", href: "/contatti" },
    { name: "Contatti", href: "/contatti" },
  ],
  legale: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-charcoal text-background pt-16 pb-8 relative overflow-hidden"
      role="contentinfo"
    >
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-lg bg-background/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Psicologo Di Base Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-background">
                Psicologo Di Base
              </span>
            </Link>
            
            <p className="text-background/60 text-base leading-relaxed max-w-md">
              Uno studio clinico fondato sulla professionalità scientifica e l'accoglienza umana. Accompagniamo le persone verso una salute mentale consapevole.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-background/40">
                <Shield className="h-3 w-3 text-accent" />
                <span>Segreto Deontologico</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-background/40">
                <Heart className="h-3 w-3 text-accent" />
                <span>Salute Etica</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
                Navigazione
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.informazioni.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background/50 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
                Servizi
              </h3>
              <ul className="space-y-3" role="list">
                {footerLinks.servizi.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background/50 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6 bg-background/5 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent">
              Riferimenti
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-background/70 leading-relaxed font-medium">
                  {siteConfig.contact.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-background/70 hover:text-background transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-background/70 hover:text-background transition-colors font-medium">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
            
            <div className="pt-5 border-t border-white/5">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                 <span className="text-xs font-semibold text-background/40 uppercase tracking-widest">Studio Attivo oggi</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-background/30 font-medium">
              © {currentYear} Psicologo Di Base. Studio di Psicologia e Psicoterapia.
            </p>
            <p className="text-[11px] text-background/20 font-semibold uppercase tracking-widest">
              Titolari: Camilla, Benedetta, Alessandra
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {footerLinks.legale.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-background/30 hover:text-background transition-colors font-medium uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-background group"
              aria-label="Torna su"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
