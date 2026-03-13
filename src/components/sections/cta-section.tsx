"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/content";

export function CTASection() {
  return (
    <section
      className="py-20 md:py-28 bg-charcoal text-background relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full -translate-x-1/2" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-[1.1] text-pretty max-w-3xl mx-auto"
        >
          Ogni grande <span className="italic text-accent">cambiamento</span> inizia con un piccolo passo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-background/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Non aspettare che il peso diventi insostenibile. Inizia oggi a prenderti cura della tua salute mentale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="xl" className="rounded-full group bg-accent text-charcoal hover:bg-accent/90">
            <Link href="/contatti">
              Prenota il primo colloquio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 hover:border-white/60 hover:bg-white/10 text-white">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
              <MessageSquare className="mr-2 h-4 w-4 text-accent" />
              Scrivici per info
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
