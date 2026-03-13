"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Shield,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/data/content";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  return (
    <section
      id="contatti"
      className="section-spacing bg-background relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-accent">
                Contatti & Sede
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            
            <h2
              id="contact-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.08] mb-6 text-pretty"
            >
              Iniziamo insieme il tuo <span className="italic text-accent/90">percorso</span>.
            </h2>
            
            <p className="text-muted-foreground/80 text-base max-w-xl mb-10 leading-relaxed">
              Siamo a tua disposizione per chiarimenti, prime consulenze o per fissare un appuntamento presso il nostro studio.
            </p>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex flex-col gap-3 p-5 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium mb-0.5">Telefono</h4>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium mb-0.5">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium mb-0.5">Sede</h4>
                  <p className="text-sm text-muted-foreground">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium mb-0.5">Orari</h4>
                  <p className="text-sm text-muted-foreground">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden group shadow-lg border border-border/30">
               <iframe
                 src="https://www.openstreetmap.org/export/embed.html?bbox=12.48%2C41.89%2C12.52%2C41.92&layer=mapnik&marker=41.9028%2C12.4964"
                 width="100%"
                 height="100%"
                 style={{ border: 0, position: "absolute", inset: 0 }}
                 allowFullScreen
                 loading="lazy"
                 title="Mappa dello studio Psicologo Di Base"
               />
               <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md px-4 py-3 rounded-xl flex items-center justify-between shadow-md">
                 <div className="flex items-center gap-2">
                   <MapPin className="h-3.5 w-3.5 text-accent" />
                   <span className="text-sm font-medium text-foreground/80">{siteConfig.contact.address}</span>
                 </div>
                 <a href={`https://maps.google.com?q=${siteConfig.contact.address}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors whitespace-nowrap ml-3">Indicazioni →</a>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-8 text-center bg-secondary/20 rounded-2xl border border-accent/10"
              >
                <div className="w-14 h-14 rounded-full bg-accent text-background flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  Richiesta Inviata
                </h3>
                <p className="text-muted-foreground/80 text-base max-w-sm mb-8 leading-relaxed">
                  Abbiamo ricevuto il tuo messaggio. Ti ricontatteremo entro 48 ore lavorative.
                </p>
                <Button variant="outline" size="lg" className="rounded-full" onClick={() => setIsSubmitted(false)}>
                  Invia un nuovo messaggio
                </Button>
              </motion.div>
            ) : (
              <div className="bg-secondary/10 p-6 md:p-10 rounded-2xl border border-border/40">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">Scrivici un messaggio</h3>
                    <p className="text-sm text-muted-foreground">Risponderemo nel più breve tempo possibile.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase font-semibold tracking-widest text-muted-foreground ml-1">Nome e Cognome</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Nome completo"
                        className="rounded-xl bg-background border-border/40 focus:border-accent py-5 h-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs uppercase font-semibold tracking-widest text-muted-foreground ml-1">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="La tua email"
                        className="rounded-xl bg-background border-border/40 focus:border-accent py-5 h-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase font-semibold tracking-widest text-muted-foreground ml-1">Telefono (Opzionale)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Il tuo numero"
                      className="rounded-xl bg-background border-border/40 focus:border-accent py-5 h-auto"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase font-semibold tracking-widest text-muted-foreground ml-1">Come possiamo aiutarti?</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Raccontaci brevemente il motivo del tuo contatto..."
                      className="rounded-xl bg-background border-border/40 focus:border-accent min-h-[140px] p-4 h-auto resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 py-1">
                    <Checkbox id="privacy" required className="mt-1 rounded-sm border-accent/40 data-[state=checked]:bg-accent" />
                    <Label htmlFor="privacy" className="text-xs text-muted-foreground/80 leading-relaxed cursor-pointer select-none">
                      Accetto il trattamento dei dati personali secondo la <a href="/privacy" className="text-accent hover:underline font-medium">Privacy Policy</a> per la gestione della richiesta.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    className="w-full rounded-xl text-base font-medium shadow-lg shadow-primary/5 transition-all hover:translate-y-[-1px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                        Invio in corso...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Invia Richiesta
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground/40">
                  <Shield className="h-3 w-3" />
                  Connessione sicura e protetta
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
