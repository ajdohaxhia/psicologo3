"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/content";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="section-spacing bg-secondary/10"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent">
                Supporto & Informazioni
              </span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6"
            >
              Risposte alle tue <span className="italic text-accent/90">domande</span> più comuni.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-muted-foreground/80 text-lg max-w-2xl leading-relaxed"
          >
            Navigare il mondo della psicologia può generare dubbi. Qui trovi le risposte che cerchiamo di dare più spesso ai nostri pazienti.
          </motion.p>
        </div>

        {/* FAQ Accordion - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            aria-label="Domande frequenti"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group bg-background border border-border/40 rounded-3xl px-8 overflow-hidden data-[state=open]:border-accent/40 data-[state=open]:shadow-xl transition-all duration-500"
              >
                <AccordionTrigger className="text-left font-serif text-xl font-medium text-foreground hover:text-accent transition-colors py-7 hover:no-underline">
                  <span className="pr-6">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/80 pb-8 leading-relaxed text-base border-t border-border/20 pt-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4 py-10 border-t border-border/20"
        >
          <p className="text-muted-foreground/60 text-sm font-medium tracking-wide">
            NON HAI TROVATO QUELLO CHE CERCAVI?
          </p>
          <a
            href="/#contatti"
            className="font-serif text-2xl italic text-accent hover:text-accent/80 transition-colors flex items-center gap-3 decoration-accent/20 underline-offset-8 hover:underline"
          >
            Scrivici direttamente per un dubbio specifico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
