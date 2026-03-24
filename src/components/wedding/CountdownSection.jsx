import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TimeUnit({ value, label }) {
  return (
    <div className="text-center min-w-[60px] md:min-w-[100px]">
      <div className="font-display text-3xl md:text-6xl text-foreground">
        {String(value).padStart(2, '0')}
      </div>
      <div className="font-sans text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const weddingDate = new Date('2026-05-09T16:30:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const diff = weddingDate.getTime() - new Date().getTime();
    if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    return {
      dias: Math.floor(diff / 86400000),
      horas: Math.floor((diff / 3600000) % 24),
      minutos: Math.floor((diff / 60000) % 60),
      segundos: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-6">
          Contagem Regressiva
        </p>
        <h2 className="font-display text-2xl md:text-4xl text-foreground mb-12 md:mb-16">
          Falta pouco para o grande dia
        </h2>

        <div className="flex justify-center items-start gap-2 md:gap-8">
          <TimeUnit value={timeLeft.dias} label="Dias" />
          <div className="font-display text-2xl md:text-6xl text-primary/30 mt-1 md:mt-0">:</div>
          <TimeUnit value={timeLeft.horas} label="Horas" />
          <div className="font-display text-2xl md:text-6xl text-primary/30 mt-1 md:mt-0">:</div>
          <TimeUnit value={timeLeft.minutos} label="Minutos" />
          <div className="hidden md:flex items-start gap-8">
            <div className="font-display text-6xl text-primary/30">:</div>
            <TimeUnit value={timeLeft.segundos} label="Segundos" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
