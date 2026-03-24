import { motion } from 'framer-motion';

export default function HeroSection({ heroImage, dividerImage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Decoração floral do convite de casamento"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-8">
          
          Temos a alegria de convidar você para o nosso casamento
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight">
            <span className="block">Sara</span>
            <span className="font-body italic text-3xl md:text-4xl lg:text-5xl text-primary my-2 block">&</span>
            <span className="block">Marcel</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10">
          
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-primary/40" />
            <p className="font-body text-xl md:text-2xl text-foreground/80 tracking-wide">
              15 de Novembro de 2026
            </p>
            <div className="w-16 h-px bg-primary/40" />
          </div>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mt-4">
            São Paulo, Brasil
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12">
          
          <a
            href="#rsvp"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase px-8 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500">
            
            Confirmar Presença
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        
      </motion.div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src={dividerImage} alt="" className="w-full h-12 object-cover opacity-40" />
      </div>
    </section>);

}