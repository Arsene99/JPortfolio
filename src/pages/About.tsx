import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, BarChart3, Database, Facebook, MessageCircle, Briefcase } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function About() {
  const { profile, contact, experiences } = usePortfolioData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -45, 0],
              x: [0, -80, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-400/15 blur-[100px] rounded-full"
          />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 blur-[80px] rounded-full"
          />
          
          {/* Pulsing Grid Lines - Layer 1 */}
          <motion.div 
            animate={{ 
              opacity: [0.05, 0.2, 0.05] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)', 
              backgroundSize: '60px 60px' 
            }}
          />
          {/* Pulsing Grid Lines - Layer 2 (Offset) */}
          <motion.div 
            animate={{ 
              opacity: [0, 0.1, 0] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)', 
              backgroundSize: '120px 120px' 
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              L'Art de la <span className="text-emerald-500">Statistique</span> <br />
              au service du <span className="text-emerald-500">Développement</span>.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              {profile.about}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/projets"
                className="group px-8 py-3 bg-emerald-500 text-neutral-950 hover:bg-emerald-400 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                Voir mes travaux <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </Link>
              <div className="flex gap-3">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all text-neutral-400 hover:text-emerald-400" title="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all text-neutral-400 hover:text-emerald-400" title="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Featured Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl shadow-emerald-500/10"
          >
            <img 
              src={profile.avatar} 
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="w-full h-auto opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 p-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                <BarChart3 size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Expertise</div>
                <div className="font-bold">{profile.title}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-neutral-950">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Mon Parcours</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-2 border-neutral-800"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="mb-2 text-sm text-emerald-500 font-black uppercase tracking-widest">{exp.period}</div>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <div className="text-neutral-400 font-bold mb-4">{exp.company}</div>
                <p className="text-neutral-500 max-w-3xl leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
