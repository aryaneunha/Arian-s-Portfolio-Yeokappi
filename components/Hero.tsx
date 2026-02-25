import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { Button } from './Button';
import { SKILLS_DESIGN, SKILLS_SOFTWARE } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById(SectionId.WORK)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const RESUME_LINK = "https://drive.google.com/file/d/1tflWmJkv79d5yZDDlLzgoslKLhTi7HS0/view?usp=sharing";

  return (
    <section id={SectionId.HERO} className="min-h-screen pt-24 pb-12 px-6 flex flex-col justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceHighlight border border-white/10 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to full-time roles
          </div>
          
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Arian Naidu</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
              UX/UI Designer & Digital Media Specialist
            </h2>
            <div className="flex items-center text-textMuted gap-2 mb-6">
              <MapPin size={18} />
              <span>Based in Vancouver, BC</span>
            </div>
            <p className="text-lg text-textMuted max-w-lg leading-relaxed">
              I blend creative storytelling with functional design to create immersive digital experiences. 
              Recent SFU Graduate specialized in interaction design and visual communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToWork} icon={<ArrowRight size={18} />}>
              View My Work
            </Button>
            <Button variant="outline" onClick={() => window.open(RESUME_LINK, '_blank')} icon={<Download size={18} />}>
              Resume
            </Button>
            <Button variant="ghost" onClick={scrollToContact} icon={<Mail size={18} />}>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          
          {/* Chart for Design Skills */}
          <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-6">Design Expertise</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SKILLS_DESIGN} layout="vertical" margin={{ left: 40 }}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    width={100}
                    tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {SKILLS_DESIGN.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#06b6d4' : '#6366f1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Software Skills Progress Bars */}
          <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-6">Software Toolkit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {SKILLS_SOFTWARE.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};