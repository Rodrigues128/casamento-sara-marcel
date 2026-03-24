import { motion } from 'framer-motion';
import { MapPin, Clock, Church, Calendar } from 'lucide-react';

const events = [
  {
    icon: Church,
    title: 'Cerimônia',
    time: '16:30',
    location: 'Muralha evento',
    address: 'R. dos Andradas, 668 - Vila Duque de Caxias, Campo Grande - MS',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Muralha+evento+R.+dos+Andradas+668+Campo+Grande'
  }
];

export default function EventDetailsSection() {
  const calendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Sara+&+Marcel&details=Temos+a+alegria+de+convidar+você+para+o+nosso+casamento!&location=Muralha+evento+-+R.+dos+Andradas,+668+-+Vila+Duque+de+Caxias,+Campo+Grande+-+MS&dates=20260509T203000Z/20260510T023000Z";

  return (
    <section className="py-24 md:py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Detalhes
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Informações do Evento
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4">
            A celebração será realizada conforme os detalhes abaixo.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md w-full"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 mb-6">
                <event.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-4">
                {event.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary/60" />
                  <span className="font-body text-lg">{event.time}</span>
                </div>

                <a 
                  href={event.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/60 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="font-body text-lg text-foreground/80 group-hover:text-primary">{event.location}</p>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground mt-1 underline underline-offset-4 decoration-primary/20">{event.address}</p>
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <a 
              href={calendarUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-primary/20 text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all duration-300 rounded-full"
            >
              <Calendar className="w-3 h-3" />
              Salvar na minha Agenda
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
