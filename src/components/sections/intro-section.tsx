"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/data/images";

export function IntroSection() {
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Immersive background elements - subtle and atmospheric */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -z-0 opacity-50" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Refined Brand Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="w-px h-12 bg-accent/40 mr-6" />
            <span className="font-serif text-accent/80 text-sm tracking-[0.4em] uppercase font-light">
              Il nostro approccio
            </span>
            <div className="w-px h-12 bg-accent/40 ml-6" />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2] mb-10 text-pretty">
            Crediamo che ogni persona possieda le risorse per affrontare le
            proprie difficoltà.
          </h2>
          
          <div className="w-16 h-px bg-border/60 mx-auto mb-10" />

          <p className="text-muted-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
            Il nostro compito è aiutarti a scoprirle, offrendo uno spazio sicuro
            dove <span className="text-foreground/90 font-medium italic">esplorare</span>, 
            <span className="text-foreground/90 font-medium italic mx-1.5">comprendere</span> e 
            <span className="text-foreground/90 font-medium italic ml-1.5">crescere</span>. 
            Insieme, con professionalità e profonda attenzione umana.
          </p>
        </motion.div>
      </div>

      {/* Subtle floating imagery */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-96 rounded-2xl overflow-hidden grayscale contrast-125"
      >
        <Image
          src={images.atmospheric.light.src}
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
