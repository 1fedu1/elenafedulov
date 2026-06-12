import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-brand-dust">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="aspect-[4/5] bg-brand-forest/5 rounded-2xl overflow-hidden shadow-sm relative w-full max-w-md mx-auto lg:mx-0">
               {/* Decorative placeholder for portrait */}
               <div className="absolute inset-0 flex items-center justify-center text-brand-forest/20 flex-col gap-2 p-8 text-center bg-brand-beige">
                 <span className="font-serif italic text-3xl">Elena</span>
                 <p className="text-sm mt-4 font-light">
                   Experiență, compasiune și o bază teoretică solidă în psihoterapie experiențială.
                 </p>
               </div>
            </div>
            
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a href="https://www.instagram.com/elenafedulov_/" target="_blank" rel="noreferrer" className="text-brand-forest/60 hover:text-brand-forest transition-colors text-sm underline underline-offset-4">Instagram</a>
              <a href="https://www.facebook.com/share/1B6LkmB18g/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-brand-forest/60 hover:text-brand-forest transition-colors text-sm underline underline-offset-4">Facebook</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 text-brand-forest">Despre mine.</h1>
              <p className="text-2xl font-serif italic text-brand-forest/80 mb-8 leading-snug">
                "Mă consider om, înainte de toate."
              </p>
              
              <div className="space-y-6 text-brand-forest/80 font-light leading-relaxed text-lg">
                <p>
                  Sunt Elena Fedulov, psiholog clinician și psihoterapeut în formare. Dar mai presus de diplomele agățate pe perete, sunt o prezență umană care stă alături de tine în cabinet. 
                </p>
                <p>
                  Chemarea mea autentică a fost întotdeauna spre sufletul uman. Nu mă văd ca pe un expert desăvârșit care deține toate răspunsurile, ci ca pe un însoțitor în drumul tău. Un om în căutare el însuși, o poveste care încă se scrie, cu propriile umbre și lumini.
                </p>
              </div>
            </div>

            <div className="border-t border-brand-forest/10 pt-12">
              <h2 className="text-3xl font-serif mb-6 text-brand-forest">Parcursul meu profesional</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-pastel flex items-center justify-center font-serif text-xl">1</div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Fundamentele: Terapia ABA</h3>
                    <p className="text-brand-forest/80 font-light">Am lucrat 2 ani în terapia ABA pentru Tulburările de Spectru Autist. Acest background mi-a oferit o disciplină extraordinară în observarea comportamentală și structurarea pașilor intervenției, oferindu-mi o bază solidă, cross-disciplinară.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-mint flex items-center justify-center font-serif text-xl">2</div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Psihoterapie Experiențială</h3>
                    <p className="text-brand-forest/80 font-light">Sunt în formare pe psihoterapie experiențială — o abordare profundă care mută accentul de la "a vorbi despre" la "a trăi și a simți" emoția în corp, în spațiul sigur al cabinetului.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-beige flex items-center justify-center font-serif text-xl">3</div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Educație și Certificări</h3>
                    <ul className="list-disc pl-5 font-light text-brand-forest/80 space-y-2 mt-2">
                      <li>Absolventă a Facultății de Psihologie și Științele Educației "Andrei Șaguna" Constanța.</li>
                      <li>Consilier dezvoltare personală atestat (ANC, din 19.12.2019).</li>
                      <li>Drept de liberă practică: CPR 29651 (Colegiul Psihologilor din România, din 12.12.2022).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-forest text-brand-dust p-10 rounded-2xl mt-12">
              <h2 className="text-2xl font-serif mb-4">Filosofia cabinetului</h2>
              <p className="font-light leading-relaxed opacity-90 mb-6">
                Abordarea mea se bazează pe trei piloni esențiali: Neutralitate, Compasiune și Autenticitate. Nu judec, nu critic. Ofer un mediu cald, securizant, în care poți aduce în fața mea orice fațetă a ta, oricât de dificilă ar fi.
              </p>
              <a href="https://ontimeagenda.com" target="_blank" rel="noreferrer" className="inline-block border border-brand-dust px-6 py-2 rounded-full text-sm hover:bg-brand-dust hover:text-brand-forest transition-colors">
                Începe procesul tău
              </a>
            </div>

          </motion.div>
        
        </div>
      </div>
    </div>
  );
}
