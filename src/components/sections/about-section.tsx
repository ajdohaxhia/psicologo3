"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Heart, Users, Sparkles } from "lucide-react";
import { images } from "@/lib/data/images";

const reasons = [
  {
    icon: Heart,
    title: "Un approccio profondamente umano",
    description:
      "Ogni percorso è costruito attorno alla persona, ai suoi tempi e alle sue esigenze specifiche, in un clima di ascolto non giudicante.",
  },
  {
    icon: Users,
    title: "Sinergia professionale",
    description:
      "Tre psicologhe con competenze diverse e complementari che collaborano per offrire un supporto clinico solido e multidisciplinare.",
  },
  {
    icon: Shield,
    title: "Etica e Riservatezza",
    description:
      "Garantiamo uno spazio protetto dal segreto professionale, dove la privacy e la sicurezza emotiva sono priorità assolute.",
  },
  {
    icon: Sparkles,
    title: "Formazione Permanente",
    description:
      "Aggiornamento scientifico costante per garantire interventi basati sulle evidenze cliniche più recenti.",
  },
];

export function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="section-spacing bg-secondary/10 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/20 -z-0 hidden lg:block" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Content Layer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent">
                La Nostra Visione
              </span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            
            <h2
              id="about-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-10 leading-[1.1]"
            >
              Uno studio clinico <br /><span className="italic text-accent/90">vicino</span> alle persone.
            </h2>
            
            <div className="space-y-6 text-muted-foreground/90 text-lg leading-relaxed mb-12">
              <p>
                Psicologo Di Base nasce dalla volontà di tre colleghe di normalizzare l'accesso al supporto psicologico, rendendolo quotidiano ma non superficiale, professionale ma non freddo.
              </p>
              <p>
                Il nostro approccio integra la solidità della formazione clinica con la sensibilità necessaria per accogliere ogni storia nella sua unicità.
              </p>
            </div>

            {/* Reasons Grid - Refined */}
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
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
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">
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

          {/* Right: Visual Layer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={images.team.group.src}
                alt="Il team di Psicologo Di Base - Dottoresse Camilla, Benedetta e Alessandra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover contrast-[1.05] brightness-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating Editorial Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-background border border-border/40 p-8 md:p-10 rounded-3xl shadow-xl max-w-sm"
            >
              <p className="font-serif text-xl text-foreground italic leading-relaxed mb-4">
                "Promuoviamo una salute mentale accessibile, basata su protocolli scientifici e ascolto partecipe."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent/60" />
                <p className="text-[10px] uppercase font-bold tracking-widest text-accent/80">
                  Missione D'Impresa
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
