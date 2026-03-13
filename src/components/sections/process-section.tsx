"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Heart, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "I",
    icon: Phone,
    title: "Incontro iniziale",
    description:
      "Tutto inizia con un contatto. Puoi scriverci o chiamarci per una breve consulenza telefonica gratuita.",
  },
  {
    number: "II",
    icon: MessageCircle,
    title: "Ascolto attivo",
    description:
      "Il primo colloquio in studio serve a conoscerci, esplorare la tua domanda e definire insieme i bisogni.",
  },
  {
    number: "III",
    icon: MapPin,
    title: "Pianificazione",
    description:
      "Definiamo un percorso su misura, stabilendo frequenza e obiettivi in base alla tua situazione.",
  },
  {
    number: "IV",
    icon: Heart,
    title: "Cambiamento",
    description:
      "Ti accompagniamo passo dopo passo verso una nuova consapevolezza, in un ambiente protetto e professionale.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-spacing bg-background relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                Metodologia
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            
            <h2
              id="process-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1] mb-6 text-pretty"
            >
              Come lavoriamo, <span className="italic text-accent/90">insieme</span>.
            </h2>
            
            <p className="text-muted-foreground/80 text-base leading-relaxed mb-8 max-w-sm">
              Trasparenza e professionalità sono le basi su cui costruiamo ogni rapporto terapeutico.
            </p>

            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/40 inline-flex items-center gap-3 group">
               <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-lg shadow-accent/20">
                  <Phone className="h-4 w-4" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-foreground">Pronto per iniziare?</p>
                  <p className="text-xs text-muted-foreground">La prima telefonata è informativa.</p>
               </div>
               <ChevronRight className="h-4 w-4 text-accent ml-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-7 space-y-16 lg:pt-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16 md:pl-24 group"
                >
                  {/* Step Number */}
                  <div className="absolute left-0 top-0 font-serif text-5xl md:text-6xl italic text-accent/5 group-hover:text-accent/10 transition-colors duration-700">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute left-0 top-1 md:top-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/30 flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-700 border border-border/40">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-700">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[19px] md:left-[23px] top-16 md:top-20 bottom-[-48px] w-px bg-gradient-to-b from-border/60 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
