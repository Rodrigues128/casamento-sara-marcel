import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl text-foreground">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const weddingDate = new Date('2026-05-09T16:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    return {
      dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diff / (1000 * 60)) % 60),
      segundos: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">
          Contagem Regressiva
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16">
          Falta pouco para o grande dia
        </h2>

        <div className="flex justify-center gap-8 md:gap-16">
          <TimeUnit value={timeLeft.dias} label="Dias" />
          <div className="font-display text-4xl md:text-6xl text-primary/30 self-start">:</div>
          <TimeUnit value={timeLeft.horas} label="Horas" />
          <div className="font-display text-4xl md:text-6xl text-primary/30 self-start">:</div>
          <TimeUnit value={timeLeft.minutos} label="Minutos" />
          <div className="font-display text-4xl md:text-6xl text-primary/30 self-start hidden md:block">:</div>
          <div className="hidden md:block">
            <TimeUnit value={timeLeft.segundos} label="Segundos" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}