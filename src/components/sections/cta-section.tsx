"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

export function CTASection() {
  return (
    <section
      className="py-32 md:py-48 bg-charcoal text-background relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Editorial Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full -translate-x-1/2" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-background/60">Contatto Prioritario</span>
          </div>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-10 leading-[1.05] text-pretty max-w-4xl mx-auto"
        >
          Ogni grande <span className="italic text-accent">cambiamento</span> inizia con un piccolo passo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-background/60 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Non aspettare che il peso diventi insostenibile. Inizia oggi a prenderti cura della tua salute mentale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button asChild size="xl" className="rounded-full px-12 py-8 text-lg group bg-accent text-charcoal hover:bg-accent/90">
            <Link href="/contatti">
              Prenota il primo colloquio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="xl" className="rounded-full px-12 py-8 text-lg border-white/30 hover:border-white/60 hover:bg-white/10 text-white">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
              <MessageSquare className="mr-3 h-5 w-5 text-accent" />
              Scrivici per info
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale contrast-125"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-[10px] font-bold">24H</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Risposta Veloce</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-[10px] font-bold">100%</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Sicuro & Protetto</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
