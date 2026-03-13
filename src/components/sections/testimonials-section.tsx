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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent">
                Esperienze
              </span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            <h2
              id="testimonials-heading"
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-foreground leading-[1.05]"
            >
              Le parole di chi ha intrapreso questo <span className="italic text-accent/90">viaggio</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:pb-4"
          >
            <p className="text-muted-foreground/60 text-sm max-w-[200px] leading-relaxed italic border-l border-accent/20 pl-6">
              Le testimonianze sono state raccolte nel rispetto dell'anonimato e della privacy.
            </p>
          </motion.div>
        </div>

        {/* Testimonials - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
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
                className="h-10 w-10 text-accent/10 absolute -top-8 -left-4 group-hover:text-accent/20 transition-colors duration-700"
                aria-hidden="true"
              />
              
              <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground/80 mb-10 flex-grow pt-4">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-8 border-t border-border/40">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-2">
                  {testimonial.author}
                </p>
                <div className="flex items-center gap-3">
                   <div className="h-px w-4 bg-muted-foreground/20" />
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
