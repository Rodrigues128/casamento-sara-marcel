import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [phoneError, setPhoneError] = useState('');
  
  const initialFormState = {
    guest_name: '',
    phone: '',
    attendance: 'confirmed',
    companions: 1,
    message: ''
  };

  const [form, setForm] = useState(initialFormState);

  const handleReset = () => {
    setSubmitted(false);
    setForm(initialFormState);
    setPhoneError('');
  };

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        handleReset();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setForm({ ...form, phone: formattedValue });
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawPhone = form.phone.replace(/[^\d]/g, '');
    if (rawPhone.length < 10) {
      setPhoneError('Por favor, insira um telefone válido com DDD');
      return;
    }

    setLoading(true);

    // Códigos de URL para os emojis e formatação (Garante que nada quebre)
    const pin = "%F0%9F%93%8D"; // 📌
    const greenHeart = "%F0%9F%92%9A"; // 💚
    const redHeart = "%E2%9D%A4%EF%B8%8F"; // ❤️
    const nl = "%0A"; // Nova linha
    const space = "%20"; // Espaço

    const attendanceText = form.attendance === 'confirmed' ? 'Sim, com alegria!' : 'Infelizmente não poderei comparecer';
    
    // Construção manual da URL para evitar erros de codificação de arquivos
    let message = `${pin}${space}*NOVA%20CONFIRMA%C3%87%C3%83O*${space}${greenHeart}${redHeart}${nl}${nl}`;
    message += `-%20*Nome:*%20${encodeURIComponent(form.guest_name)}${nl}`;
    message += `-%20*Telefone:*%20${encodeURIComponent(form.phone)}${nl}`;
    message += `-%20*Presença:*%20${encodeURIComponent(attendanceText)}${nl}`;
    
    if (form.attendance === 'confirmed') {
      message += `-%20*N%C3%BAmero%20de%20pessoas:*%20${form.companions}${nl}`;
    }
    
    if (form.message) {
      message += `${nl}*Recado:*%20${encodeURIComponent(form.message)}`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=556781437611&text=${message}`;

    window.open(whatsappUrl, '_blank');
    
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
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Obrigado!</h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Sua confirmação foi preparada. Se o WhatsApp não abriu, verifique se há bloqueadores de pop-up.
          </p>
          <Button variant="ghost" onClick={handleReset} className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary">
            Voltar ao formulário agora
          </Button>
          <Heart className="w-6 h-6 text-primary fill-primary/20 mx-auto mt-12" />
        </motion.div>
      </section>);
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">RSVP</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Confirme Sua Presença</h2>
          <p className="font-body text-lg text-muted-foreground">Por favor, confirme até 25 de abril de 2026</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Nome do Representante da Família *</Label>
            <Input required value={form.guest_name} onChange={(e) => setForm({ ...form, guest_name: e.target.value })} className="bg-background border-border/60 font-body text-base h-12 focus:border-primary" placeholder="Exemplo: Paulo Henrique Rodrigues Correa" />
          </div>

          <div className="space-y-2">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Telefone *</Label>
            <Input required type="tel" value={form.phone} onChange={handlePhoneChange} className={`bg-background border-border/60 font-body text-base h-12 focus:border-primary ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`} placeholder="(67) 99999-9999" />
            {phoneError && <p className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{phoneError}</p>}
          </div>

          <div className="space-y-4">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Você poderá comparecer? *</Label>
            <RadioGroup value={form.attendance} onValueChange={(val) => setForm({ ...form, attendance: val })} className="flex flex-col sm:flex-row gap-4">
              {[{ value: 'confirmed', label: 'Sim, com alegria!' }, { value: 'declined', label: 'Infelizmente não' }].map((option) =>
                <label key={option.value} className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-300 ${form.attendance === option.value ? 'border-primary bg-primary/5' : 'border-border/60 hover:border-primary/40'}`}>
                  <RadioGroupItem value={option.value} />
                  <span className="font-body text-base">{option.label}</span>
                </label>
              )}
            </RadioGroup>
          </div>

          {form.attendance !== 'declined' &&
            <div className="space-y-2">
              <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Número de Pessoas</Label>
              <Select value={String(form.companions)} onValueChange={(val) => setForm({ ...form, companions: Number(val) })}>
                <SelectTrigger className="bg-background border-border/60 font-body text-base h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => <SelectItem key={num} value={String(num)}>{num}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          }

          <div className="space-y-2">
            <Label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Mensagem para os Noivos</Label>
            <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-background border-border/60 font-body text-base min-h-[100px] focus:border-primary resize-none" placeholder="Deixe uma mensagem especial..." />
          </div>

          <div className="text-center pt-4">
            <Button type="submit" disabled={loading} className="font-sans text-xs tracking-[0.3em] uppercase px-12 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500">
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Confirmar via WhatsApp
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}