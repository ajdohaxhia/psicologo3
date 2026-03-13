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

    // Simulate form submission
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
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Side: Editorial Content & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent">
                Contatti & Sede
              </span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            
            <h2
              id="contact-heading"
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-foreground leading-[1.05] mb-10 text-pretty"
            >
              Iniziamo insieme il tuo <span className="italic text-accent/90">percorso</span> di crescita.
            </h2>
            
            <p className="text-muted-foreground/80 text-xl max-w-xl mb-16 leading-relaxed">
              Siamo a tua disposizione per chiarimenti, prime consulenze o per fissare un appuntamento presso il nostro studio.
            </p>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-10 mb-16">
              <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">Telefono</h4>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-accent transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">Sede</h4>
                  <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-secondary/20 hover:bg-secondary/30 transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-accent shadow-sm">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">Orari</h4>
                  <p className="text-muted-foreground">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Integration - Refined */}
            <div className="relative h-64 rounded-[2.5rem] overflow-hidden group shadow-lg border border-border/30">
               <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.655039748781!2d${siteConfig.contact.mapCoordinates.lng}!3d${siteConfig.contact.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzEwLjEiTiAxMsKwMjknNDcuMCJF!5e0!3m2!1sit!2sit!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0, filter: "grayscale(1) contrast(0.8) brightness(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa dello studio Psicologo Di Base"
                />
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8 bg-background/80 backdrop-blur-md px-6 py-3 rounded-full flex items-center justify-between shadow-sm">
                  <span className="text-xs font-medium text-foreground/80">Raggiungibile con Metro A (Porta Furba)</span>
                  <a href={`https://maps.google.com?q=${siteConfig.contact.address}`} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">Ottieni indicazioni</a>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
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
                className="h-full flex flex-col items-center justify-center p-12 text-center bg-secondary/20 rounded-[3rem] border border-accent/10"
              >
                <div className="w-20 h-20 rounded-full bg-accent text-background flex items-center justify-center mb-8 shadow-xl shadow-accent/20">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                  Richiesta Inviata
                </h3>
                <p className="text-muted-foreground/80 text-lg max-w-sm mb-10 leading-relaxed">
                  Abbiamo ricevuto il tuo messaggio. Una delle nostre dottoresse ti ricontatterà entro 48 ore lavorative.
                </p>
                <Button variant="outline" size="xl" className="rounded-full px-10" onClick={() => setIsSubmitted(false)}>
                  Invia un nuovo messaggio
                </Button>
              </motion.div>
            ) : (
              <div className="bg-secondary/10 p-10 md:p-16 rounded-[3rem] border border-border/40">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-foreground">Scrivici un messaggio</h3>
                    <p className="text-sm text-muted-foreground">Risponderemo nel più breve tempo possibile.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Nome e Cognome</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Nome completo"
                        className="rounded-2xl bg-background border-border/40 focus:border-accent py-6 h-auto"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="La tua email"
                        className="rounded-2xl bg-background border-border/40 focus:border-accent py-6 h-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Telefono (Opzionale)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Il tuo numero"
                      className="rounded-2xl bg-background border-border/40 focus:border-accent py-6 h-auto"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Come possiamo aiutarti?</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Raccontaci brevemente il motivo del tuo contatto..."
                      className="rounded-2xl bg-background border-border/40 focus:border-accent min-h-[160px] p-5 h-auto resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <Checkbox id="privacy" required className="mt-1 rounded-sm border-accent/40 data-[state=checked]:bg-accent" />
                    <Label htmlFor="privacy" className="text-xs text-muted-foreground/80 leading-relaxed cursor-pointer select-none">
                      Accetto il trattamento dei dati personali secondo la <a href="/privacy" className="text-accent hover:underline font-medium">Privacy Policy</a> per la gestione della richiesta.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    className="w-full rounded-2xl py-8 text-lg font-medium shadow-lg shadow-primary/5 transition-all hover:translate-y-[-2px]"
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

                <div className="mt-8 flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">
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
