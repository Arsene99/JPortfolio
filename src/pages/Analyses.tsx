import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Layout from '../components/Layout';

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

export default function Analyses() {
  const { analyses } = usePortfolioData();

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Analyses Statistiques</h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Visualisations et rapports détaillés sur divers domaines d'étude.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                    <XAxis dataKey="name" stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px' }} itemStyle={{ color: '#10b981' }} />
                    <Area type="monotone" dataKey="surveys" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorSurveys)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-8">Répartition des Domaines</h3>
              <div className="h-[300px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyses.map((analysis) => (
              <motion.div 
                key={analysis.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">
                    {analysis.category}
                  </span>
                  <span className="text-xs text-neutral-500">{analysis.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{analysis.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{analysis.summary}</p>
                <button className="text-emerald-500 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Lire l'analyse complète <ExternalLink size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
