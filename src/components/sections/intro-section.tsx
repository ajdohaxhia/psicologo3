"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-px h-10 bg-accent/40 mr-5" />
            <span className="font-serif text-accent/80 text-xs tracking-[0.3em] uppercase font-light">
              Il nostro approccio
            </span>
            <div className="w-px h-10 bg-accent/40 ml-5" />
          </motion.div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.2] mb-8 text-pretty">
            Crediamo che ogni persona possieda le risorse per affrontare le
            proprie difficoltà.
          </h2>
          
          <div className="w-12 h-px bg-border/60 mx-auto mb-8" />

          <p className="text-muted-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
            Il nostro compito è aiutarti a scoprirle, offrendo uno spazio sicuro
            dove <span className="text-foreground/90 font-medium italic">esplorare</span>, 
            <span className="text-foreground/90 font-medium italic mx-1">comprendere</span> e 
            <span className="text-foreground/90 font-medium italic ml-1">crescere</span>. 
            Insieme, con professionalità e profonda attenzione umana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
