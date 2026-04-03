import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, ExternalLink, Database, Briefcase, Send, ChevronDown, BarChart3, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { usePortfolioData } from '../hooks/usePortfolioData';

const chartData = [
  { name: 'Jan', surveys: 400 },
  { name: 'Fév', surveys: 300 },
  { name: 'Mar', surveys: 500 },
  { name: 'Avr', surveys: 800 },
  { name: 'Mai', surveys: 500 },
  { name: 'Juin', surveys: 900 },
];

const pieData = [
  { name: 'Économie', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Santé', value: 200 },
  { name: 'Environnement', value: 100 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { projects, skills, experiences } = usePortfolioData();

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Analyses', href: '#analyses' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-neutral-950">
                JP
              </div>
              <span className="text-xl font-bold tracking-tight">Jean Paul</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="px-4 py-1.5 bg-emerald-500 text-neutral-950 rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors"
              >
                CV
              </a>
              <Link to="/admin" className="p-2 text-neutral-400 hover:text-white transition-colors" title="Administration">
                <Database size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <a 
                href="#" 
                className="px-4 py-1.5 bg-emerald-500 text-neutral-950 rounded-full text-sm font-bold"
              >
                CV
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-neutral-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-neutral-400 hover:text-emerald-400"
                  >
                    {link.name}
                  </a>
                ))}
                <Link to="/admin" className="block text-lg font-medium text-blue-400">
                  Admin Panel
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center z-10">
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
              Étudiant à l'École Nationale de Statistiques et de Planification (ENSPD) 
              de l'Université de Parakou. Passionné par l'analyse de données 
              et la planification stratégique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 bg-emerald-500 text-neutral-950 hover:bg-emerald-400 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                Voir mes travaux <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all text-neutral-400 hover:text-emerald-400" title="Données">
                  <Database size={20} />
                </a>
                <a href="#" className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all text-neutral-400 hover:text-emerald-400" title="LinkedIn">
                  <Linkedin size={20} />
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
              src="https://picsum.photos/seed/data-viz/1200/600?grayscale" 
              alt="Data Visualization Concept"
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
                <div className="font-bold">Statistique & Analyse</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise Logicielle</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Maîtrise approfondie des outils de traitement, d'analyse et de modélisation 
              statistique pour des prises de décision éclairées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.id} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">{skill.name}</span>
                  <span className="text-emerald-500 font-mono font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
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

      {/* Analyses / Data Viz Section */}
      <section id="analyses" className="py-20 px-4 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Analyses de Données</h2>
            <div className="flex flex-col items-center gap-2">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Visualisation</span>
              <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Area Chart */}
            <div className="bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-8">Volume d'Enquêtes & Précision</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorSurveys" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#737373" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <YAxis 
                      stroke="#737373" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px' }}
                      itemStyle={{ color: '#10b981' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="surveys" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorSurveys)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span>Enquêtes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span>Précision</span>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-8">Répartition des Domaines</h3>
              <div className="h-[300px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {pieData.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                    <span className="text-neutral-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">Projets Phares</h2>
              <p className="text-neutral-400">Une sélection de mes travaux les plus significatifs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-neutral-950">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Parcours</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-[40px] p-8 md:p-16 border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Collaborons.</h2>
            <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
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

      {/* Footer */}
      <footer className="py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-neutral-950 text-xl">
                JP
              </div>
              <div>
                <div className="font-bold text-xl">Jean Paul</div>
                <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Statisticien & Planificateur</div>
              </div>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Database size={20} /> Données
              </a>
              <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-bold">
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-sm font-medium">
            <div>© {new Date().getFullYear()} Jean Paul. Tous droits réservés.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
