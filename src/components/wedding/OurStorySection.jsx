import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const timeline = [
  {
    date: 'Março 2019',
    title: 'Nos Conhecemos',
    description: 'Um encontro casual em uma cafeteria que mudou nossas vidas para sempre. Os olhares se cruzaram e soubemos que algo especial estava começando.'
  },
  {
    date: 'Junho 2020',
    title: 'Primeiro Namoro',
    description: 'Depois de meses de amizade, decidimos dar o próximo passo. Um jantar à luz de velas selou o início da nossa linda história de amor.'
  },
  {
    date: 'Dezembro 2024',
    title: 'O Pedido',
    description: 'Em uma viagem inesquecível, sob um céu estrelado, veio o pedido mais esperado. Ela disse sim! E desde então, planejamos o dia mais feliz de nossas vidas.'
  },
  {
    date: 'Maio 2026',
    title: 'O Grande Dia',
    description: 'O momento que estávamos esperando finalmente chegou. Vamos celebrar o nosso amor com as pessoas mais especiais.'
  },
];

export default function OurStorySection({ coupleImage }) {
  return (
    <section className="py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Nossa Jornada
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Nossa História de Amor
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-2xl mx-auto"
        >
          <div className="relative p-2">
            <div className="absolute inset-0 border border-primary/20" />
            <img
              src={coupleImage}
              alt="Foto do casal"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 top-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className={`pl-10 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary">
                    {item.date}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary/20" />
        </motion.div>
      </div>
    </section>
  );
}
