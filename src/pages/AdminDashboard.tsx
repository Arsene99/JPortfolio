import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, LayoutDashboard, Briefcase, Database, LogOut, ArrowLeft, Menu, X, BarChart3, FileText, User, Mail, Globe, Phone, MapPin, Pencil, Save } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { Project, Skill, Experience, Analysis, Profile, Contact } from '../lib/data';

export default function AdminDashboard() {
  const { 
    projects, skills, experiences, analyses, profile, contact,
    updateProjects, updateSkills, updateExperiences, updateAnalyses, updateProfile, updateContact 
  } = usePortfolioData();
  const [activeTab, setActiveTab] = React.useState<'projects' | 'analyses' | 'skills' | 'experience' | 'profile' | 'contact'>('projects');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState<string | null>(null);
  const [editingItem, setEditingItem] = React.useState<{ type: string, id: string } | null>(null);
  const navigate = useNavigate();

  const showSaveConfirmation = (message: string) => {
    setSaveStatus(message);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/login');
  };

  // Project Handlers
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'Nouveau Projet',
      description: 'Description du projet',
      image: 'https://picsum.photos/seed/new/800/600',
      tags: ['Analyse'],
      link: '#',
      dataUrl: '#'
    };
    updateProjects([...projects, newProject]);
  };

  const deleteProject = (id: string) => {
    updateProjects(projects.filter(p => p.id !== id));
  };

  const editProject = (id: string, field: keyof Project, value: any) => {
    updateProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  // Analysis Handlers
  const addAnalysis = () => {
    const newAnalysis: Analysis = {
      id: Date.now().toString(),
      title: 'Nouvelle Analyse',
      summary: 'Résumé de l\'analyse',
      content: 'Contenu détaillé...',
      date: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
      category: 'Statistique'
    };
    updateAnalyses([...analyses, newAnalysis]);
  };

  const deleteAnalysis = (id: string) => {
    updateAnalyses(analyses.filter(a => a.id !== id));
  };

  const editAnalysis = (id: string, field: keyof Analysis, value: any) => {
    updateAnalyses(analyses.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  // Skill Handlers
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: 'Nouvelle Compétence',
      category: 'statistics',
      level: 80
    };
    updateSkills([...skills, newSkill]);
  };

  const deleteSkill = (id: string) => {
    updateSkills(skills.filter(s => s.id !== id));
  };

  // Experience Handlers
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: 'Nouvelle Entreprise',
      role: 'Poste occupé',
      period: '2024 - Présent',
      description: 'Description des missions'
    };
    updateExperiences([...experiences, newExp]);
  };

  const deleteExperience = (id: string) => {
    updateExperiences(experiences.filter(e => e.id !== id));
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-neutral-900/50 backdrop-blur-xl">
      <div className="p-8 border-b border-neutral-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <LayoutDashboard className="text-neutral-950" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Dashboard</h1>
            <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Administration</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-6 space-y-2 overflow-y-auto custom-scrollbar">
        <div className="pb-2 px-2 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em]">Contenu</div>
        <button 
          onClick={() => { setActiveTab('projects'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'projects' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <BarChart3 size={18} /> Projets
        </button>
        <button 
          onClick={() => { setActiveTab('analyses'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'analyses' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <FileText size={18} /> Analyses
        </button>
        <button 
          onClick={() => { setActiveTab('skills'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'skills' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <Database size={18} /> Logiciels
        </button>
        <button 
          onClick={() => { setActiveTab('experience'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'experience' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <Briefcase size={18} /> Expérience
        </button>
        
        <div className="pt-6 pb-2 px-2 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em]">Configuration</div>
        <button 
          onClick={() => { setActiveTab('profile'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'profile' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <User size={18} /> Profil
        </button>
        <button 
          onClick={() => { setActiveTab('contact'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === 'contact' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
        >
          <Mail size={18} /> Contact
        </button>
      </nav>
      <div className="p-6 border-t border-neutral-800/50 space-y-3">
        <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-500 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Voir le site
        </Link>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut size={16} /> Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden h-16 border-b border-neutral-800 flex items-center justify-between px-4 sticky top-0 bg-neutral-950 z-40">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <LayoutDashboard className="text-emerald-500" size={20} /> Admin
        </h1>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-neutral-400">
          <Menu size={24} />
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-neutral-800 flex-col sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-neutral-950 border-r border-neutral-800 z-[60] lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Notification Toast */}
        <AnimatePresence>
          {saveStatus && (
            <motion.div 
              initial={{ opacity: 0, y: -20, x: '-50%' }}
              animate={{ opacity: 1, y: 20, x: '-50%' }}
              exit={{ opacity: 0, y: -20, x: '-50%' }}
              className="fixed top-0 left-1/2 z-[100] px-6 py-3 bg-emerald-500 text-neutral-950 font-bold rounded-2xl shadow-2xl flex items-center gap-2"
            >
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <Plus size={12} className="rotate-45" />
              </div>
              {saveStatus}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-4 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                {activeTab === 'skills' ? 'Logiciels & Outils' : 
                 activeTab === 'experience' ? 'Parcours Pro' : 
                 activeTab === 'projects' ? 'Projets & Études' :
                 activeTab === 'analyses' ? 'Analyses Stats' :
                 activeTab === 'profile' ? 'Mon Profil' : 'Mes Contacts'}
              </h2>
              <p className="text-neutral-500 font-medium mt-1">Gérez vos informations en temps réel.</p>
            </div>
            {(activeTab === 'projects' || activeTab === 'skills' || activeTab === 'experience' || activeTab === 'analyses') && (
              <button 
                onClick={() => {
                  if (activeTab === 'projects') addProject();
                  else if (activeTab === 'skills') addSkill();
                  else if (activeTab === 'experience') addExperience();
                  else addAnalysis();
                  showSaveConfirmation('Élément ajouté avec succès');
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-neutral-950 hover:bg-emerald-400 rounded-2xl font-black transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
              >
                <Plus size={20} /> Ajouter
              </button>
            )}
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid gap-4">
              {projects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-bold text-lg line-clamp-1">{project.title}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-1">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => setEditingItem({ type: 'project', id: project.id })}
                      className="p-2 text-neutral-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all"
                      title="Modifier"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => { deleteProject(project.id); showSaveConfirmation('Projet supprimé'); }}
                      className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Analyses Tab */}
          {activeTab === 'analyses' && (
            <div className="grid gap-4">
              {analyses.map((analysis) => (
                <motion.div 
                  layout
                  key={analysis.id} 
                  className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-bold text-lg line-clamp-1">{analysis.title}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-1">{analysis.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => setEditingItem({ type: 'analysis', id: analysis.id })}
                      className="p-2 text-neutral-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all"
                      title="Modifier"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => { deleteAnalysis(analysis.id); showSaveConfirmation('Analyse supprimée'); }}
                      className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid gap-4">
              {skills.map((skill) => (
                <motion.div 
                  layout
                  key={skill.id} 
                  className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex-1 min-w-0 pr-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 font-bold">
                      {skill.level}%
                    </div>
                    <div>
                      <h3 className="font-bold text-lg line-clamp-1">{skill.name}</h3>
                      <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold line-clamp-1">{skill.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => setEditingItem({ type: 'skill', id: skill.id })}
                      className="p-2 text-neutral-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all"
                      title="Modifier"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => { deleteSkill(skill.id); showSaveConfirmation('Compétence supprimée'); }}
                      className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="grid gap-4">
              {experiences.map((exp) => (
                <motion.div 
                  layout
                  key={exp.id} 
                  className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="font-bold text-lg line-clamp-1">{exp.role}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-1">{exp.company} • {exp.period}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => setEditingItem({ type: 'experience', id: exp.id })}
                      className="p-2 text-neutral-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all"
                      title="Modifier"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => { deleteExperience(exp.id); showSaveConfirmation('Expérience supprimée'); }}
                      className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-neutral-900 p-6 md:p-10 rounded-[32px] border border-neutral-800 shadow-2xl space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Nom Complet</label>
                  <input 
                    value={profile.name}
                    onChange={(e) => updateProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Titre Professionnel</label>
                  <input 
                    value={profile.title}
                    onChange={(e) => updateProfile({ ...profile, title: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Avatar URL</label>
                <input 
                  value={profile.avatar}
                  onChange={(e) => updateProfile({ ...profile, avatar: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Section "À Propos"</label>
                <textarea 
                  value={profile.about}
                  onChange={(e) => updateProfile({ ...profile, about: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                  rows={8}
                />
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => showSaveConfirmation('Profil mis à jour avec succès')}
                  className="w-full py-5 bg-emerald-500 text-neutral-950 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <Database size={20} /> Enregistrer les modifications
                </button>
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-neutral-900 p-6 md:p-10 rounded-[32px] border border-neutral-800 shadow-2xl space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </label>
                  <input 
                    value={contact.email}
                    onChange={(e) => updateContact({ ...contact, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 flex items-center gap-2">
                    <Phone size={14} /> Téléphone
                  </label>
                  <input 
                    value={contact.phone}
                    onChange={(e) => updateContact({ ...contact, phone: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 flex items-center gap-2">
                    <Globe size={14} /> LinkedIn URL
                  </label>
                  <input 
                    value={contact.linkedin}
                    onChange={(e) => updateContact({ ...contact, linkedin: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 flex items-center gap-2">
                    <BarChart3 size={14} /> GitHub/Données URL
                  </label>
                  <input 
                    value={contact.github}
                    onChange={(e) => updateContact({ ...contact, github: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 flex items-center gap-2">
                  <MapPin size={14} /> Adresse
                </label>
                <input 
                  value={contact.address}
                  onChange={(e) => updateContact({ ...contact, address: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => showSaveConfirmation('Contacts mis à jour avec succès')}
                  className="w-full py-5 bg-emerald-500 text-neutral-950 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <Database size={20} /> Enregistrer les contacts
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-[32px] shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
                <h3 className="text-xl font-bold">Modifier l'élément</h3>
                <button 
                  onClick={() => setEditingItem(null)}
                  className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {editingItem.type === 'project' && (
                  <div className="space-y-6">
                    {projects.filter(p => p.id === editingItem.id).map(project => (
                      <div key={project.id} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Titre</label>
                            <input 
                              value={project.title}
                              onChange={(e) => editProject(project.id, 'title', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Image URL</label>
                            <input 
                              value={project.image}
                              onChange={(e) => editProject(project.id, 'image', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Description</label>
                          <textarea 
                            value={project.description}
                            onChange={(e) => editProject(project.id, 'description', e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all resize-none"
                            rows={4}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Lien Étude</label>
                            <input 
                              value={project.link}
                              onChange={(e) => editProject(project.id, 'link', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Lien Données</label>
                            <input 
                              value={project.dataUrl}
                              onChange={(e) => editProject(project.id, 'dataUrl', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {editingItem.type === 'analysis' && (
                  <div className="space-y-6">
                    {analyses.filter(a => a.id === editingItem.id).map(analysis => (
                      <div key={analysis.id} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Titre</label>
                            <input 
                              value={analysis.title}
                              onChange={(e) => editAnalysis(analysis.id, 'title', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Catégorie</label>
                            <input 
                              value={analysis.category}
                              onChange={(e) => editAnalysis(analysis.id, 'category', e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Résumé</label>
                          <textarea 
                            value={analysis.summary}
                            onChange={(e) => editAnalysis(analysis.id, 'summary', e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all resize-none"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Contenu (Markdown)</label>
                          <textarea 
                            value={analysis.content}
                            onChange={(e) => editAnalysis(analysis.id, 'content', e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all font-mono text-sm"
                            rows={8}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {editingItem.type === 'skill' && (
                  <div className="space-y-6">
                    {skills.filter(s => s.id === editingItem.id).map(skill => (
                      <div key={skill.id} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Nom du Logiciel</label>
                          <input 
                            value={skill.name}
                            onChange={(e) => updateSkills(skills.map(s => s.id === skill.id ? { ...s, name: e.target.value } : s))}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Niveau de Maîtrise</label>
                            <span className="text-emerald-500 font-black">{skill.level}%</span>
                          </div>
                          <input 
                            type="range"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => updateSkills(skills.map(s => s.id === skill.id ? { ...s, level: parseInt(e.target.value) } : s))}
                            className="w-full h-2 bg-neutral-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {editingItem.type === 'experience' && (
                  <div className="space-y-6">
                    {experiences.filter(e => e.id === editingItem.id).map(exp => (
                      <div key={exp.id} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Poste</label>
                            <input 
                              value={exp.role}
                              onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, role: e.target.value } : ex))}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Entreprise</label>
                            <input 
                              value={exp.company}
                              onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, company: e.target.value } : ex))}
                              className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Période</label>
                          <input 
                            value={exp.period}
                            onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, period: e.target.value } : ex))}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1">Description</label>
                          <textarea 
                            value={exp.description}
                            onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, description: e.target.value } : ex))}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-3 focus:border-emerald-500 outline-none transition-all resize-none"
                            rows={4}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 bg-neutral-900 border-t border-neutral-800">
                <button 
                  onClick={() => { setEditingItem(null); showSaveConfirmation('Modifications enregistrées'); }}
                  className="w-full py-4 bg-emerald-500 text-neutral-950 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
                >
                  <Save size={20} /> Terminer l'édition
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

