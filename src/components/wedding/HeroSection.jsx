import { motion } from "framer-motion";

export default function HeroSection({ heroImage, dividerImage }) {
  const scrollToRSVP = (e) => {
    e.preventDefault();
    const element = document.getElementById('rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Convite de Casamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 py-20 w-full max-w-[90vw] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary mb-8 font-bold leading-relaxed"
        >
          Temos a alegria de convidar você para o nosso casamento
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground/80 leading-[1.1]">
            <span className="block">Sara</span>
            <span className="font-body italic text-2xl md:text-4xl lg:text-5xl text-primary my-2 block">
              &
            </span>
            <span className="block">Marcel</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-3 md:gap-4">
            <div className="w-8 md:w-16 h-px bg-primary/40" />
            <p className="font-body text-lg md:text-2xl text-foreground tracking-wide font-bold whitespace-nowrap">
              9 de Maio de 2026
            </p>
            <div className="w-8 md:w-16 h-px bg-primary/40" />
          </div>
          <p className="font-sans text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground mt-4 font-bold">
            Campo Grande, MS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#rsvp"
            onClick={scrollToRSVP}
            className="inline-block font-sans text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase px-6 md:px-8 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-bold"
          >
            Confirmar Presença
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToRSVP}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <img
          src={dividerImage}
          alt=""
          className="w-full h-8 md:h-12 object-cover opacity-40"
        />
      </div>
    </section>
  );
}
