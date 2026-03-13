"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, type TeamMember } from "@/lib/data/content";
import { images } from "@/lib/data/images";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const imageConfig =
    images.team[member.id as keyof typeof images.team] || images.team.camilla;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="group"
    >
      <div className="flex flex-col h-full">
        {/* Profile Image - High End Presentation */}
        <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700 bg-secondary/30">
          <Image
            src={imageConfig.src}
            alt={imageConfig.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
          
          {/* Subtle Label */}
          <div className="absolute top-6 left-6">
            <div className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/20">
               <span className="text-[9px] uppercase tracking-widest font-bold text-accent">Psicologa</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start">
          <h3 className="font-serif text-3xl font-medium text-foreground mb-1 group-hover:text-accent transition-colors duration-500">
            {member.name}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-accent/70 mb-6">
            {member.id === 'camilla' || member.id === 'alessandra' ? 'Psicoterapeuta' : 'Psicologa Clinica'}
          </p>

          <p className="text-muted-foreground/80 text-sm leading-relaxed mb-8 max-w-[90%]">
            {member.shortBio}
          </p>

          {/* Specialized Areas */}
          <div className="flex flex-wrap gap-2 mb-8">
            {member.areas.slice(0, 3).map((area) => (
              <span
                key={area}
                className="text-[10px] font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/20"
              >
                {area}
              </span>
            ))}
          </div>
          
          <Button asChild variant="link" className="mt-auto p-0 h-auto text-accent hover:text-accent/80 font-serif italic text-lg group/btn">
            <Link href="/#contatti" className="flex items-center gap-2">
              Conosci meglio {member.name.split(' ')[1]}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="section-spacing bg-background"
      aria-labelledby="team-heading"
    >
      <div className="container-wide">
        {/* Section Header - Editorial Layout */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent">
                Il Nostro Team
              </span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            <h2
              id="team-heading"
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-foreground leading-[1.05] mb-10 text-pretty"
            >
              Professionalità clinica ed una <span className="italic text-accent/90">sensibilità</span> condivisa.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-muted-foreground/80 text-xl max-w-2xl leading-relaxed"
          >
            Siamo tre professioniste che hanno scelto di unire le proprie competenze per creare un centro di eccellenza basato sulla cura e sull'ascolto.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Closing Trust Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-secondary/20 rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-10">
            <GraduationCap className="h-8 w-8 text-accent" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 max-w-2xl">
            Tutte le nostre professioniste sono iscritte all'Albo degli Psicologi e seguono percorsi di aggiornamento continuo.
          </h3>
          <p className="text-muted-foreground/80 max-w-xl mb-10 text-lg">
            La tua sicurezza clinica è la nostra priorità. Ogni intervento segue il codice deontologico e le linee guida nazionali.
          </p>
          <Button asChild size="xl" className="rounded-full px-12">
            <Link href="/#contatti">Contatta lo studio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
