import { motion } from 'motion/react';
import { ArrowRight, HeartHandshake, BrainCircuit, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-widest text-brand-forest/60 mb-4 block">Psiholog Clinician & Psihoterapeut</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Mă consider om,<br />
              <span className="italic text-brand-forest/80">înainte de toate.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-forest/80 max-w-md mb-10 leading-relaxed font-light">
              Un om în căutare, o poveste care nu s-a încheiat, un suflet atent la propriile umbre și lumini. Te invit într-un spațiu sigur și blând.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://ontimeagenda.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-forest text-brand-dust px-8 py-3.5 rounded-full hover:bg-brand-forest/90 transition-colors"
              >
                Programează o ședință
              </a>
              <Link 
                to="/despre" 
                className="inline-flex items-center justify-center gap-2 border border-brand-forest text-brand-forest px-8 py-3.5 rounded-full hover:bg-brand-forest/5 transition-colors"
              >
                Află povestea mea
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-brand-beige rounded-2xl overflow-hidden shadow-sm relative">
              <img 
                src="/portrait.jpg" 
                alt="Elena Fedulov" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-forest/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center text-brand-dust flex-col gap-2 drop-shadow-md">
                <span className="font-serif italic text-3xl">Neutralitate.</span>
                <span className="font-serif italic text-3xl">Compasiune.</span>
                <span className="font-serif italic text-3xl">Autenticitate.</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-brand-mint p-6 rounded-2xl shadow-sm max-w-xs hidden md:block">
              <p className="font-serif italic text-lg leading-snug">"Chemarea mea autentică a fost întotdeauna spre sufletul uman."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-brand-beige py-24 px-6 border-t border-brand-forest/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-serif max-w-md">Servicii & Specializări</h2>
            <Link to="/servicii" className="flex items-center gap-2 border-b border-brand-forest pb-1 mt-6 md:mt-0 hover:opacity-70">
              Vezi toate detaliile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Consiliere Psihologică", desc: "Spațiu sigur pentru a naviga perioade de tranziție și decizii dificile.", icon: HeartHandshake },
              { title: "Psihoterapie Individuală", desc: "Suport profund pentru anxietate, panică, reglare emoțională și traume.", icon: BrainCircuit },
              { title: "Evaluare Psihologică", desc: "Evaluare structurată și clarificarea nevoilor tale specifice.", icon: Users },
            ].map((service, i) => (
              <div key={i} className="bg-brand-dust p-8 rounded-xl border border-brand-forest/10 hover:border-brand-forest/30 transition-colors">
                <service.icon className="w-10 h-10 mb-6 text-brand-forest/70" strokeWidth={1} />
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-brand-forest/80 font-light mb-8">{service.desc}</p>
                <Link to="/servicii" className="text-sm font-medium hover:underline flex items-center gap-2">
                  Află mai multe
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
