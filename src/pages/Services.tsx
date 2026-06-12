import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Consiliere Psihologică",
      duration: "50 min",
      price: "200 RON",
      format: "Offline + Online",
      desc: "Un parcurs scurt și mediu pentru a traversa perioade de criză, stres profesional sau momente de cotitură. Aici discutăm despre clarificarea situației prezente și stabilirea unor pași concreți. Este spațiul în care ne uităm la aici și acum.",
    },
    {
      title: "Evaluare Psihologică",
      duration: "90 min",
      price: "300 RON",
      format: "Offline + Online",
      desc: "Folosim instrumente clinice și evaluare structurată pentru a înțelege profunzimea stărilor tale. Aceasta este adesea necesară pentru proceduri specifice, comisii sau pur și simplu pentru a contura un diagnostic corect, care să deschidă calea spre tratamentul eficient.",
    },
    {
      title: "Psihoterapie Individuală",
      duration: "60 min",
      price: "250 RON",
      format: "Offline + Online",
      desc: "Un spațiu profund, de durată medie și lungă, destinat vindecării rănilor emoționale, traumelor și reajustării tiparelor. Metoda experiențială se focusează pe trăire, pe a simți emoția blocată, nu doar a vorbi despre ea intelectual.",
    }
  ];

  return (
    <div className="bg-brand-dust min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        <div className="mb-20 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-brand-forest">Servicii.</h1>
          <p className="text-xl text-brand-forest/80 font-light leading-relaxed">
            Pășește cu încredere. Fie că ai nevoie de consiliere punctuală sau o terapie profundă, procesul este personalizat și centrat exclusiv pe ritmul tău intern.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-beige border border-brand-forest/10 p-10 rounded-2xl flex flex-col"
            >
              <h3 className="text-3xl font-serif mb-4 text-brand-forest">{service.title}</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-brand-dust rounded-full text-xs font-semibold uppercase tracking-wider">{service.format}</span>
                <span className="px-3 py-1 bg-brand-dust rounded-full text-xs font-semibold uppercase tracking-wider">{service.duration}</span>
                <span className="px-3 py-1 bg-brand-dust rounded-full text-xs font-semibold uppercase tracking-wider text-green-800">{service.price}</span>
              </div>
              <p className="text-brand-forest/80 font-light leading-relaxed flex-1 mb-8">
                {service.desc}
              </p>
              <a 
                href="https://ontimeagenda.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center border border-brand-forest rounded-full py-3 hover:bg-brand-forest hover:text-brand-dust transition-colors font-medium text-sm"
              >
                Programează acum
              </a>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-brand-forest/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-6">Arii de Expertiză</h2>
            <ul className="space-y-4 text-brand-forest/80 font-light">
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Anxietate și atacuri de panică</li>
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Traumă și vindecare emoțională</li>
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Conflicte de cuplu și dificultăți relaționale</li>
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Managementul stresului și reglare emoțională</li>
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Tulburări de spectru autist (Background in Terapie ABA 2 ani)</li>
              <li className="flex items-start gap-2"><span className="text-brand-mint shrink-0">✦</span> Dificultăți și identitate sexuală</li>
            </ul>
          </div>
          <div className="bg-brand-mint p-10 rounded-2xl flex flex-col justify-center">
            <h3 className="font-serif text-2xl mb-4 text-brand-forest">Ai întrebări despre format?</h3>
            <p className="text-brand-forest/80 font-light mb-8">
              Decizia asupra tipului de intervenție se ia împreună, în prima ședință de evaluare și cunoaștere. 
            </p>
            <Link to="/contact" className="inline-block bg-brand-forest text-brand-dust px-6 py-3 rounded-full text-sm font-medium w-max hover:bg-brand-forest/90">
              Scrie-mi un mesaj
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
