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
          <p className="font-body text-xl text-muted-foreground">
            Sua confirmação foi recebida com sucesso. Estamos ansiosos para celebrar esse momento especial com você!
          </p>
          <Heart className="w-6 h-6 text-primary fill-primary/20 mx-auto mt-8" />
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
              { value: 'maybe', label: 'Ainda não sei' },
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
                Número de Acompanhantes
              </Label>
              <Select
              value={String(form.companions)}
              onValueChange={(val) => setForm({ ...form, companions: Number(val) })}>
              
                <SelectTrigger className="bg-background border-border/60 font-body text-base h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4].map((num) =>
                <SelectItem key={num} value={String(num)}>
                      {num === 0 ? 'Nenhum' : num}
                    </SelectItem>
                )}
                </SelectContent>
              </Select>
            </div>
          }

          {/* Dietary */}
          {form.attendance !== 'declined' &&
          <div className="space-y-2">
              <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Restrições Alimentares
              </Label>
              <Input
              value={form.dietary_restrictions}
              onChange={(e) => setForm({ ...form, dietary_restrictions: e.target.value })}
              className="bg-background border-border/60 font-body text-base h-12 focus:border-primary"
              placeholder="Vegetariano, vegano, alergias..." />
            
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