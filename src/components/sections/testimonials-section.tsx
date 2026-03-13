"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section
      className="section-spacing bg-secondary/10 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                Esperienze
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            <h2
              id="testimonials-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.08]"
            >
              Le parole di chi ha intrapreso questo <span className="italic text-accent/90">viaggio</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:pb-2"
          >
            <p className="text-muted-foreground/60 text-sm max-w-[200px] leading-relaxed italic border-l border-accent/20 pl-4">
              Le testimonianze sono state raccolte nel rispetto dell'anonimato e della privacy.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full relative group"
            >
              <Quote
                className="h-8 w-8 text-accent/10 absolute -top-6 -left-3 group-hover:text-accent/20 transition-colors duration-700"
                aria-hidden="true"
              />
              
              <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed text-foreground/80 mb-8 flex-grow pt-3">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-border/40">
                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-1">
                  {testimonial.author}
                </p>
                <div className="flex items-center gap-2">
                   <div className="h-px w-3 bg-muted-foreground/20" />
                   <p className="text-xs text-muted-foreground/60 font-medium">
                     {testimonial.role}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
