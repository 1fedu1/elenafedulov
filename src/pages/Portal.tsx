import { Lock } from 'lucide-react';

export default function Portal() {
  return (
    <div className="bg-brand-dust min-h-[80vh] flex flex-col justify-center items-center py-24 px-6 relative">
       {/* Decorative waves background for the portal specifically */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border border-brand-forest"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-brand-forest absolute"></div>
       </div>

       <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-sm border border-brand-forest/10 relative z-10 text-center">
         <div className="w-16 h-16 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-6 text-brand-forest">
           <Lock className="w-6 h-6" />
         </div>
         <h1 className="text-3xl font-serif text-brand-forest mb-2">Portal Pacienți</h1>
         <p className="text-brand-forest/60 font-light text-sm mb-8">
           Autentifică-te pentru a accesa documentele tale, facturile și notițele terapeutice partajate.
         </p>

         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
           <input type="email" placeholder="Adresa de email" required className="w-full bg-brand-dust border border-brand-forest/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-forest transition-colors" />
           <input type="password" placeholder="Parolă" required className="w-full bg-brand-dust border border-brand-forest/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-forest transition-colors" />
           
           <div className="flex justify-between items-center text-xs text-brand-forest/60 mb-6">
             <label className="flex items-center gap-2 cursor-pointer">
               <input type="checkbox" className="accent-brand-forest" />
               Tine-mă minte
             </label>
             <a href="#" className="hover:underline">Ai uitat parola?</a>
           </div>

           <button type="submit" className="w-full bg-brand-forest text-brand-dust py-3 rounded-lg font-medium hover:bg-brand-forest/90 transition-colors">
             Intră în cont
           </button>
         </form>

         <div className="mt-8 pt-6 border-t border-brand-forest/10 text-sm text-brand-forest/60">
           Nu ai un cont? <a href="https://ontimeagenda.com" className="font-semibold text-brand-forest hover:underline">Programează prima ședință.</a>
         </div>
       </div>
    </div>
  );
}
