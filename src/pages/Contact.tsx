import React from 'react';
import { Send } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-[40px] p-8 md:p-16 border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Collaborons.</h1>
            <p className="text-neutral-400 mb-12 max-w-xl mx-auto text-lg">
              Besoin d'une expertise en analyse de données ou en planification ? 
              Je suis ouvert aux opportunités de stage et de collaboration.
            </p>
            
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="Jean Dupont" 
                    className="w-full px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="jean@exemple.com" 
                    className="w-full px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  placeholder="Comment puis-je vous aider ?" 
                  rows={6}
                  className="w-full px-6 py-4 bg-neutral-950 border border-neutral-800 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/20">
                Envoyer le message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
