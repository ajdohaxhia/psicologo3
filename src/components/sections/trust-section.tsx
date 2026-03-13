"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Heart, Users, Award, BookOpen } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "Albo Professionale",
    description: "Iscrizione Ordine Psicologi Lazio",
  },
  {
    icon: Shield,
    title: "Riservatezza Assoluta",
    description: "Tutela del segreto professionale",
  },
  {
    icon: Heart,
    title: "Etica Clinica",
    description: "Protocolli basati sull'evidenza",
  },
  {
    icon: Clock,
    title: "Presenza & Online",
    description: "Flessibilità di spazio e tempo",
  },
  {
    icon: Users,
    title: "Equipe Dedicata",
    description: "Sinergia di tre professioniste",
  },
  {
    icon: BookOpen,
    title: "Formazione Ecm",
    description: "Aggiornamento scientifico continuo",
  },
];

export function TrustSection() {
  return (
    <section
      className="py-16 md:py-24 bg-secondary/10 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="container-wide">
        <h2 id="trust-heading" className="sr-only">
          I nostri capisaldi professionali
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="max-w-xs lg:border-r border-border/40 lg:pr-12"
           >
              <p className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent mb-4">
                Garanzia Clinica
              </p>
              <p className="font-serif text-2xl italic text-foreground leading-snug">
                Un impegno costante per la tua salute psicologica.
              </p>
           </motion.div>

           <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-4 md:gap-12 w-full">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  <div className="w-10 h-10 mb-4 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-4 w-4 text-accent/80" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-sm font-medium text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 leading-relaxed font-bold">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
           </div>
        </div>
      </div>
    </section>
  );
}
