import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-px bg-primary/30" />
          <Heart className="w-4 h-4 text-primary fill-primary/20" />
          <div className="w-16 h-px bg-primary/30" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">Sara & Marcel

        </h2>
        

        

        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mt-8">
          Feito com amor
        </p>
      </div>
    </footer>);

}