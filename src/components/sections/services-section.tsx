"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, User, Heart, Users, Brain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/lib/data/content";

const iconMap = {
  user: User,
  heart: Heart,
  users: Users,
  brain: Brain,
  home: Home,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-6 md:p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-500 flex flex-col items-start border border-transparent hover:border-accent/10">
        {/* Icon */}
        <div className="w-9 h-9 mb-5 flex items-center justify-center rounded-full bg-background/80 text-accent/80 group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground/90 text-sm leading-relaxed mb-6 flex-grow">
          {service.shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-accent/60 group-hover:text-accent transition-colors duration-500">
          <span className="w-4 h-px bg-accent/30" />
          Dettagli
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servizi"
      className="section-spacing bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                I nostri servizi
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]"
            >
              Un supporto strutturato per il tuo <span className="italic text-accent/90">benessere</span>.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-muted-foreground/80 text-base max-w-sm"
          >
            Percorsi clinici personalizzati, fondati sulla competenza e sul rispetto dei tempi di ogni persona.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-muted-foreground font-medium text-center md:text-left text-sm">
            Vuoi approfondire come lavoriamo o hai bisogno di un consiglio iniziale?
          </p>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-secondary/50 transition-all border-accent/20 text-accent">
              <Link href="/contatti">Leggi le FAQ</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/5">
              <Link href="/contatti">
                Contattaci
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
         </div>
        </motion.div>
      </div>
    </section>
  );
}
