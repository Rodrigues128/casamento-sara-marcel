import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const timeline = [
  {
    date: '24 de Fevereiro de 2024',
    title: 'O Primeiro Olhar (e um UNO)',
    description: 'Nos conhecemos em um aniversário, apresentados por um primo. A conversa foi breve, mas memorável: uma acusação bem-humorada de "você roubou, né?" durante um jogo de UNO foi o suficiente para despertar nossa curiosidade.'
  },
  {
    date: 'Fevereiro de 2024',
    title: 'Propósitos que se Cruzam',
    description: 'Um "follow" no Instagram no dia seguinte abriu as portas para conversas profundas. Descobrimos afinidades, encontros na igreja e, acima de tudo, o mesmo desejo de servir a Deus. Decidimos orar, entregando nossos caminhos ao Senhor antes de qualquer passo.'
  },
  {
    date: '16 de Março de 2024',
    title: 'O Sim para o Namoro',
    description: 'Com o coração acelerado e diante da família na casa dela, o pedido de namoro foi oficializado. Entre o nervosismo e a emoção, o "sim" veio com a certeza de que ali começava algo eterno, já com o olhar voltado para o altar.'
  },
  {
    date: '05 de Maio de 2025',
    title: 'O Noivado Surpresa',
    description: 'Após um ano e um mês de caminhada, o grande passo. Em uma surpresa emocionante que reuniu nossas famílias, o pedido de casamento foi feito. Deus confirmou mais uma vez que fomos feitos um para o outro.'
  },
  {
    date: '09 de Maio de 2026',
    title: 'O Grande Dia',
    description: 'O momento de selar nossa união diante de Deus e dos homens. O que começou com uma jogada de cartas termina com a promessa de uma vida inteira de amor e fidelidade.'
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

                <div className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'
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
