import { motion } from 'framer-motion';
import { MapPin, Clock, Church, UtensilsCrossed, Info } from 'lucide-react';

const events = [
  {
    icon: Church,
    title: 'Cerimônia',
    time: '16:00',
    location: 'Mansão das Flores',
    address: 'Rua das Palmeiras, 123 — Jardim Europa, Campo Grande',
  },
  {
    icon: UtensilsCrossed,
    title: 'Recepção',
    time: '18:30',
    location: 'Mansão das Flores',
    address: 'Mesmo local da cerimônia',
  },
];

export default function EventDetailsSection({ dividerImage }) {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Detalhes
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Informações do Evento
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4">
            A cerimônia e a recepção serão realizadas no mesmo local para sua maior comodidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 mb-6">
                <event.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-4">
                {event.title}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary/60" />
                  <span className="font-body text-lg">{event.time}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary/60 flex-shrink-0" />
                  <div>
                    <p className="font-body text-lg text-foreground/80">{event.location}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}