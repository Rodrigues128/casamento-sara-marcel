import { useState } from 'react';
import { motion } from 'framer-motion';
import { apiClient } from '@/api/apiClient';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Heart, Loader2 } from 'lucide-react';

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    guest_name: '',
    email: '',
    phone: '',
    attendance: 'confirmed',
    companions: 0,
    dietary_restrictions: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await apiClient.entities.RSVP.create(form);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 md:py-32 px-6 bg-secondary/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center">
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Obrigado!
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Sua confirmação foi recebida com sucesso. Estamos ansiosos para celebrar esse momento especial com você!
          </p>
          
          <a 
            href="https://chat.whatsapp.com/CenBUSd322L4Hwgs2P3B6l" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 rounded-full shadow-lg"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.015 12.03c0 2.12.553 4.189 1.606 6.006L0 24l6.135-1.61a11.803 11.803 0 005.911 1.586h.005c6.637 0 12.032-5.398 12.032-12.03.001-3.214-1.252-6.234-3.522-8.509z"/>
            </svg>
            Entrar no Grupo do Casamento
          </a>

          <Heart className="w-6 h-6 text-primary fill-primary/20 mx-auto mt-12" />
        </motion.div>
      </section>);
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">
            RSVP
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Confirme Sua Presença
          </h2>
          <p className="font-body text-lg text-muted-foreground">Por favor, confirme até 25 de abril de 2026

          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8">
          
          {/* Name */}
          <div className="space-y-2">
            <Label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Nome da família *

            </Label>
            <Input
              required
              value={form.guest_name}
              onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
              className="bg-background border-border/60 font-body text-base h-12 focus:border-primary"
              placeholder="Seu nome completo" />
            
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            










            
            <div className="space-y-2">
              <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Telefone
              </Label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-background border-border/60 font-body text-base h-12 focus:border-primary"
                placeholder="(11) 99999-9999" />
              
            </div>
          </div>

          {/* Attendance */}
          <div className="space-y-4">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Você poderá comparecer? *
            </Label>
            <RadioGroup
              value={form.attendance}
              onValueChange={(val) => setForm({ ...form, attendance: val })}
              className="flex flex-col sm:flex-row gap-4">
              
              {[
              { value: 'confirmed', label: 'Sim, com alegria!' },
              { value: 'declined', label: 'Infelizmente não' }].
              map((option) =>
              <label
                key={option.value}
                className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 ${
                form.attendance === option.value ?
                'border-primary bg-primary/5' :
                'border-border/60 hover:border-primary/40'}`
                }>
                
                  <RadioGroupItem value={option.value} />
                  <span className="font-body text-base">{option.label}</span>
                </label>
              )}
            </RadioGroup>
          </div>

          {/* Companions */}
          {form.attendance !== 'declined' &&
          <div className="space-y-2">
              <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Número de Pessoas
              </Label>
              <Select
              value={String(form.companions || 1)}
              onValueChange={(val) => setForm({ ...form, companions: Number(val) })}>
              
                <SelectTrigger className="bg-background border-border/60 font-body text-base h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) =>
                <SelectItem key={num} value={String(num)}>
                      {num}
                    </SelectItem>
                )}
                </SelectContent>
              </Select>
            </div>
          }

          {/* Message */}
          <div className="space-y-2">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Mensagem para os Noivos
            </Label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-background border-border/60 font-body text-base min-h-[100px] focus:border-primary resize-none"
              placeholder="Deixe uma mensagem especial..." />
            
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="font-sans text-xs tracking-[0.3em] uppercase px-12 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500">
              
              {loading ?
              <Loader2 className="w-4 h-4 animate-spin mr-2" /> :
              null}
              {loading ? 'Enviando...' : 'Enviar Confirmação'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>);

}