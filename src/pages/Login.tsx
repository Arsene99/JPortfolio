import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication logic for demonstration
    // In a real app, this would verify against a backend/Firebase
    if (email === 'yabiarsene031@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-500/10 rounded-full text-blue-500 mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold">Espace Administrateur</h1>
          <p className="text-neutral-400 text-sm mt-2">Connectez-vous pour gérer votre portfolio</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Mail size={16} /> Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Lock size={16} /> Mot de passe
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
          <Link to="/" className="text-neutral-500 hover:text-white text-sm flex items-center justify-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Retour au portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
