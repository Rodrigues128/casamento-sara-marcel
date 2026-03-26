import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-20 px-6 text-center bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Sara & Marcel
          </h2>
          <div className="flex items-center justify-center gap-2 text-primary mb-12">
            <div className="w-8 h-px bg-primary/30" />
            <Heart className="w-4 h-4 fill-primary/20" />
            <div className="w-8 h-px bg-primary/30" />
          </div>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 • Feito por PAGH Tecnologias
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
