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
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                Supporto & Informazioni
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight mb-4"
            >
              Risposte alle tue <span className="italic text-accent/90">domande</span> più comuni.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-muted-foreground/80 text-base max-w-2xl leading-relaxed"
          >
            Navigare il mondo della psicologia può generare dubbi. Qui trovi le risposte che diamo più spesso ai nostri pazienti.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
            aria-label="Domande frequenti"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group bg-background border border-border/40 rounded-2xl px-6 overflow-hidden data-[state=open]:border-accent/40 data-[state=open]:shadow-lg transition-all duration-500"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:text-accent transition-colors py-5 hover:no-underline">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/80 pb-6 leading-relaxed text-sm border-t border-border/20 pt-4">
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
          className="mt-10 flex flex-col items-center gap-3 py-8 border-t border-border/20"
        >
          <p className="text-muted-foreground/60 text-sm font-medium tracking-wide uppercase">
            Non hai trovato quello che cercavi?
          </p>
          <a
            href="/contatti"
            className="font-serif text-xl italic text-accent hover:text-accent/80 transition-colors flex items-center gap-2 decoration-accent/20 underline-offset-8 hover:underline"
          >
            Scrivici direttamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
