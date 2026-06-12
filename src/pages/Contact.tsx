import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Oferiți ședințe de terapie online (Telehealth)?",
      answer: "Da, toate serviciile de consiliere, psihoterapie și anumite evaluări psihologice sunt disponibile și online. Oferim flexibilitate prin platforme video sigure."
    },
    {
      question: "Unde este situat cabinetul?",
      answer: "Cabinetul este situat în Constanța, Aleea Voinicului nr. 6 C E D, un mediu sigur, primitor și confidențial."
    },
    {
      question: "Cum pot anula sau reprograma o ședință?",
      answer: "Te rog să anunți orice modificare sau anulare cu cel puțin 24 de ore înainte, pentru a putea oferi acel spațiu altcuiva. Sedințele anulate în mai puțin de 24 de ore pot fi taxate."
    }
  ];

  return (
    <div className="bg-brand-dust">
      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl md:text-8xl font-serif mb-16 text-brand-forest">Contact.</h1>
          
          <div className="border-t border-brand-forest/20 pt-8 mt-12 mb-12">
            <p className="text-lg text-brand-forest/80 mb-8 font-light">
              Contactează-mă pentru a rezerva o primă ședință sau completează formularul alăturat pentru întrebări specifice.
            </p>
            
            <div className="space-y-2 mb-12 font-medium">
              <p><span className="font-bold mr-2">Email:</span> <a href="mailto:elefedulov@yahoo.com" className="hover:underline">elefedulov@yahoo.com</a></p>
              <p><span className="font-bold mr-2">Telefon:</span> 07676677007</p>
              <p><span className="font-bold mr-2">Program:</span> Luni – Vineri, 10:00 – 19:00</p>
            </div>

            <div className="border-t border-brand-forest/20 pt-8">
              <h3 className="font-bold mb-4">Cabinet:</h3>
              <p className="text-brand-forest/80">Constanța, Aleea Voinicului nr. 6 C E D</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-brand-pastel p-10 md:p-16">
          <h2 className="text-3xl font-serif mb-4">Formular de contact</h2>
          <p className="font-light text-brand-forest/80 mb-12">
            Vă rog să completați formularul. Vă voi răspunde în cel mai scurt timp posibil.
          </p>

          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="Nume *" required className="input-minimal" />
              <input type="text" placeholder="Prenume *" required className="input-minimal" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="email" placeholder="Email *" required className="input-minimal" />
              <input type="tel" placeholder="Telefon *" required className="input-minimal" />
            </div>
            <div>
              <textarea 
                placeholder="Mesajul tău..." 
                rows={3} 
                className="w-full bg-transparent border-b border-brand-forest/30 pb-2 focus:outline-none focus:border-brand-forest transition-colors text-sm resize-none"
              ></textarea>
            </div>
            <div className="flex justify-between items-center pt-8 border-t border-brand-forest/10">
              <button 
                type="button" 
                className="border border-brand-forest rounded-full px-8 py-3 text-sm hover:bg-brand-forest hover:text-brand-dust transition-colors"
                onClick={(e) => { e.preventDefault(); alert("Functionalitate in curand."); }}
              >
                Trimite mesajul
              </button>
              <span className="text-xs text-brand-forest/50">* Toate câmpurile sunt obligatorii</span>
            </div>
          </form>
        </div>
      </section>

      {/* Locations Section (Visual Match) */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-brand-forest/10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="aspect-[4/5] bg-brand-forest/5 rounded-lg overflow-hidden">
             {/* Decorative placeholder for location image */}
             <div className="w-full h-full bg-brand-forest/10 relative">
               <div className="absolute inset-0 flex items-center justify-center text-brand-forest/30 font-serif italic pb-0">Fotografie Cabinet</div>
             </div>
          </div>
          
          <div className="space-y-24">
            {/* Clinic details mimicking screenshot layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-brand-forest/10 pb-16">
              <div>
                <h3 className="text-5xl font-serif mb-6 text-brand-forest">Constanța</h3>
                <p className="text-brand-forest/80 font-light max-w-[200px] mb-8">
                  Aleea Voinicului nr. 6 C E D,
                  <br />Constanța
                </p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 border border-brand-forest rounded-full px-5 py-2 text-sm hover:bg-brand-forest hover:text-brand-dust transition-colors">
                    Vezi harta <ArrowRight className="w-3 h-3 bg-brand-forest text-brand-dust rounded-full p-px" />
                  </a>
                  <a href="https://ontimeagenda.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-brand-mint text-brand-forest rounded-full px-5 py-2 text-sm hover:bg-[#b0e3d0] transition-colors">
                    Programează <ArrowRight className="w-3 h-3 bg-brand-forest text-brand-dust rounded-full p-px" />
                  </a>
                </div>
              </div>
              <div className="space-y-2 text-sm mt-2 md:text-right md:mt-24">
                <p><span className="font-bold">Email:</span> elefedulov@yahoo.com</p>
                <p><span className="font-bold">CPR:</span> 29651</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-brand-beige py-24 px-6 relative border-t border-brand-forest/10">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-forest/20">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-forest/70 transition-colors"
              >
                <span className="text-xl font-light">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-brand-forest/70 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
