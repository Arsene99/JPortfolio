import React from 'react';
import { motion } from 'motion/react';
import { BarChart3 } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Layout from '../components/Layout';

export default function Skills() {
  const { skills } = usePortfolioData();

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Expertise Logicielle</h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Maîtrise approfondie des outils de traitement, d'analyse et de modélisation 
              statistique pour des prises de décision éclairées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.id} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">{skill.name}</span>
                  <span className="text-emerald-500 font-mono font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-emerald-500/30 transition-all">
              <div className="text-4xl font-black text-emerald-500 mb-2">15+</div>
              <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm">Projets Réalisés</div>
            </div>
            <div className="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-emerald-500/30 transition-all flex items-center justify-center">
               <BarChart3 size={48} className="text-emerald-500 opacity-50" />
            </div>
            <div className="p-8 bg-emerald-500 rounded-3xl border border-emerald-400 flex flex-col justify-center">
              <div className="text-neutral-950 font-black text-2xl leading-tight">Prêt pour de nouveaux défis.</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
