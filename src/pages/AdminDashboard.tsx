import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, LayoutDashboard, Briefcase, Database, LogOut, ArrowLeft, Menu, X, BarChart3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { Project, Skill, Experience } from '../lib/data';

export default function AdminDashboard() {
  const { projects, skills, experiences, updateProjects, updateSkills, updateExperiences } = usePortfolioData();
  const [activeTab, setActiveTab] = React.useState<'projects' | 'skills' | 'experience'>('projects');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

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
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <LayoutDashboard className="text-blue-500" /> Admin
        </h1>
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-neutral-400">
          <X size={20} />
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <button 
          onClick={() => { setActiveTab('projects'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}
        >
          <BarChart3 size={18} /> Projets
        </button>
        <button 
          onClick={() => { setActiveTab('skills'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'skills' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}
        >
          <Database size={18} /> Logiciels
        </button>
        <button 
          onClick={() => { setActiveTab('experience'); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'experience' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}
        >
          <Briefcase size={18} /> Expérience
        </button>
      </nav>
      <div className="p-4 border-t border-neutral-800 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-2 text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={18} /> Retour au site
        </Link>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
        >
          <LogOut size={18} /> Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden h-16 border-b border-neutral-800 flex items-center justify-between px-4 sticky top-0 bg-neutral-950 z-40">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <LayoutDashboard className="text-blue-500" size={20} /> Admin
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
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold capitalize">
              {activeTab === 'skills' ? 'Logiciels & Outils' : activeTab === 'experience' ? 'Parcours Professionnel' : 'Projets & Études'}
            </h2>
            <button 
              onClick={activeTab === 'projects' ? addProject : activeTab === 'skills' ? addSkill : addExperience}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              <Plus size={18} /> Ajouter
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid gap-6">
              {projects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  className="bg-neutral-900 p-4 md:p-6 rounded-2xl border border-neutral-800 space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-500 uppercase font-bold">Titre</label>
                      <input 
                        value={project.title}
                        onChange={(e) => editProject(project.id, 'title', e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-500 uppercase font-bold">Image URL</label>
                      <input 
                        value={project.image}
                        onChange={(e) => editProject(project.id, 'image', e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase font-bold">Description</label>
                    <textarea 
                      value={project.description}
                      onChange={(e) => editProject(project.id, 'description', e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none transition-colors"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="text-red-500 hover:text-red-400 flex items-center gap-1 text-sm font-medium p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} /> Supprimer
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div 
                  layout
                  key={skill.id} 
                  className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center">
                    <input 
                      value={skill.name}
                      onChange={(e) => updateSkills(skills.map(s => s.id === skill.id ? { ...s, name: e.target.value } : s))}
                      className="bg-transparent border-none outline-none focus:text-blue-400 font-medium"
                    />
                    <button onClick={() => deleteSkill(skill.id)} className="text-neutral-500 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>Niveau</span>
                      <span>{skill.level}%</span>
                    </div>
                    <input 
                      type="range"
                      min="0"
                      max="100"
                      value={skill.level}
                      onChange={(e) => updateSkills(skills.map(s => s.id === skill.id ? { ...s, level: parseInt(e.target.value) } : s))}
                      className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="grid gap-6">
              {experiences.map((exp) => (
                <motion.div 
                  layout
                  key={exp.id} 
                  className="bg-neutral-900 p-4 md:p-6 rounded-2xl border border-neutral-800 space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-500 uppercase font-bold">Poste</label>
                      <input 
                        value={exp.role}
                        onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, role: e.target.value } : ex))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-500 uppercase font-bold">Entreprise</label>
                      <input 
                        value={exp.company}
                        onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, company: e.target.value } : ex))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-500 uppercase font-bold">Description</label>
                    <textarea 
                      value={exp.description}
                      onChange={(e) => updateExperiences(experiences.map(ex => ex.id === exp.id ? { ...ex, description: e.target.value } : ex))}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                      rows={2}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button onClick={() => deleteExperience(exp.id)} className="text-red-500 hover:text-red-400 p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

