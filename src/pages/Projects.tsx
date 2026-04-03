import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Database } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Layout from '../components/Layout';

export default function Projects() {
  const { projects } = usePortfolioData();

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mes Projets</h1>
            <p className="text-neutral-400 text-lg max-w-2xl">
              Une sélection de mes travaux les plus significatifs en statistique, 
              analyse de données et planification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-emerald-500/50 transition-all shadow-xl"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex gap-6">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400">
                      Consulter l'étude <ExternalLink size={14} />
                    </a>
                    <a href={project.dataUrl} className="flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white">
                      Données & Scripts <Database size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
