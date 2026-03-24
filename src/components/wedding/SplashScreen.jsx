import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onOpen }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => onOpen(), 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={clicked ? { opacity: 0, scale: 1.04 } : { opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer select-none overflow-hidden"
        style={{ backgroundColor: 'hsl(82, 28%, 54%)' }}
        onClick={handleClick}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(82,32%,62%) 0%, hsl(82,28%,48%) 70%)',
          }}
        />

        <div className="relative flex flex-col items-center gap-6 md:gap-10 z-10 w-full px-4">
          {/* Envelope with responsive scaling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative scale-75 md:scale-100"
            style={{ width: 280, height: 200 }}
          >
            <div
              className="absolute inset-0 rounded-sm shadow-2xl"
              style={{ backgroundColor: 'hsl(82, 30%, 58%)' }}
            />

            <div className="absolute inset-0 overflow-hidden">
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: 0,
                borderTop: '100px solid transparent',
                borderBottom: '100px solid transparent',
                borderLeft: '140px solid hsl(82, 26%, 52%)',
              }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0,
                width: 0,
                borderTop: '100px solid transparent',
                borderBottom: '100px solid transparent',
                borderRight: '140px solid hsl(82, 26%, 52%)',
              }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                width: 0,
                borderLeft: '140px solid transparent',
                borderRight: '140px solid transparent',
                borderBottom: '110px solid hsl(82, 26%, 55%)',
              }} />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                width: 0,
                borderLeft: '140px solid transparent',
                borderRight: '140px solid transparent',
                borderTop: '110px solid hsl(82, 24%, 50%)',
              }} />
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full"
              style={{
                width: 72,
                height: 72,
                backgroundColor: 'hsl(82, 32%, 34%)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  inset: 6,
                  border: '1px solid hsl(82, 20%, 50%)',
                  opacity: 0.5,
                }}
              />
              <span
                className="font-display text-base font-semibold relative z-10"
                style={{ color: 'hsl(82, 30%, 72%)', letterSpacing: '0.08em' }}
              >
                S<span className="text-xs opacity-80">&</span>M
              </span>
            </div>
          </motion.div>

          {/* Names with responsive text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <h1
              className="font-display text-3xl md:text-4xl font-medium tracking-wide"
              style={{ color: 'hsl(82, 20%, 22%)' }}
            >
              Sara <span className="font-body italic text-xl md:text-2xl opacity-70">&</span> Marcel
            </h1>
            <p
              className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase mt-2"
              style={{ color: 'hsl(82, 18%, 30%)' }}
            >
              15 de Novembro de 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: 'hsl(82, 18%, 30%)' , opacity: 0.4}} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(82, 18%, 30%)', opacity: 0.5 }} />
            <div className="w-8 md:w-12 h-px" style={{ backgroundColor: 'hsl(82, 18%, 30%)', opacity: 0.4 }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-body italic text-base md:text-lg"
            style={{ color: 'hsl(82, 18%, 28%)' }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              Clique para abrir o convite
            </motion.span>
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
