"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/data/images";
import { siteConfig } from "@/lib/data/content";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-background/90 md:bg-background/80 lg:bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-accent/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent leading-none">
              Iniziativa di Psicologia Clinica
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-8 text-pretty"
          >
            Uno spazio per
            <br />
            <span className="italic text-accent/90">ascoltarsi</span>,
            <br />
            capirsi, crescere.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-xl leading-relaxed mb-10 text-balance"
          >
            Psicologo Di Base accompagna le persone in percorsi di benessere emotivo e consapevolezza. Uno studio fondato sul valore dell'ascolto, della competenza clinica e dell'umanità.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button asChild size="xl" className="rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-lg shadow-primary/5 group">
              <Link href="/contatti">
                Prenota un colloquio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/60 hover:bg-secondary/50 backdrop-blur-sm transition-all"
            >
              <Link href="/servizi">Scopri i nostri servizi</Link>
            </Button>
          </motion.div>

          {/* Contact line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-14 pt-8 border-t border-border/30 flex flex-wrap items-center gap-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase font-sans tracking-widest text-muted-foreground/50 mb-1">Contatti Diretti</span>
              <div className="flex gap-6">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors group"
                >
                  <Phone className="h-4 w-4 text-accent/60 group-hover:text-accent transition-colors" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors group"
                >
                  <Mail className="h-4 w-4 text-accent/60 group-hover:text-accent transition-colors" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 hidden lg:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground/40 [writing-mode:vertical-lr]">
            Scorri
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-accent/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
