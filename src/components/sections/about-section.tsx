"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Heart, Users, Sparkles } from "lucide-react";
import { images } from "@/lib/data/images";

const reasons = [
  {
    icon: Heart,
    title: "Approccio umano",
    description:
      "Ogni percorso è costruito attorno alla persona, ai suoi tempi e alle sue esigenze, in un clima di ascolto non giudicante.",
  },
  {
    icon: Users,
    title: "Sinergia professionale",
    description:
      "Tre psicologhe con competenze complementari che collaborano per un supporto clinico solido e multidisciplinare.",
  },
  {
    icon: Shield,
    title: "Etica e riservatezza",
    description:
      "Uno spazio protetto dal segreto professionale, dove privacy e sicurezza emotiva sono priorità.",
  },
  {
    icon: Sparkles,
    title: "Formazione permanente",
    description:
      "Aggiornamento scientifico costante per interventi basati sulle evidenze cliniche più recenti.",
  },
];

export function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="section-spacing bg-secondary/10 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                La nostra visione
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            
            <h2
              id="about-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-[1.1]"
            >
              Uno studio clinico <br /><span className="italic text-accent/90">vicino</span> alle persone.
            </h2>
            
            <div className="space-y-4 text-muted-foreground/90 text-base leading-relaxed mb-10">
              <p>
                Psicologo Di Base nasce dalla volontà di tre colleghe di normalizzare l'accesso al supporto psicologico, rendendolo quotidiano ma non superficiale, professionale ma non freddo.
              </p>
              <p>
                Il nostro approccio integra la solidità della formazione clinica con la sensibilità necessaria per accogliere ogni storia nella sua unicità.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.team.group.src}
                alt="Il team di Psicologo Di Base — Dottoresse Camilla, Benedetta e Alessandra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover contrast-[1.05] brightness-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 md:-left-8 bg-background border border-border/40 p-6 md:p-8 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="font-serif text-lg text-foreground italic leading-relaxed mb-3">
                "Promuoviamo una salute mentale accessibile, basata su scienza e ascolto partecipe."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-accent/60" />
                <p className="text-xs uppercase font-semibold tracking-widest text-accent/80">
                  La nostra missione
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
