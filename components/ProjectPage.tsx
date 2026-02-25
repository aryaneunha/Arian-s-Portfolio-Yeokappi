import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Layers, Users, PenTool, Award } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Button } from './Button';
import { DouglasRoyalsProject } from './DouglasRoyalsProject';
import { UXWasHereProject } from './UXWasHereProject';
import { FriendlyPharmacistsProject } from './FriendlyPharmacistsProject';
import { DeepSeatedHistoryProject } from './DeepSeatedHistoryProject';

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Custom Case Study Routes
  if (id === 'p3') {
    return <DouglasRoyalsProject />;
  }
  
  if (id === 'p2') {
    return <UXWasHereProject />;
  }

  if (id === 'p1') {
    return <FriendlyPharmacistsProject />;
  }

  if (id === 'p4') {
    return <DeepSeatedHistoryProject />;
  }

  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/">
          <Button icon={<ArrowLeft size={18} />}>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Navbar Placeholder / Back Button */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
            AN<span className="text-primary">.</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-textMuted hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
           <div className="mb-8 animate-fade-in">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">{project.subtitle}</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">{project.title}</h1>
           </div>
           
           <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-16 animate-slide-up">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             {/* Left Column: Narrative */}
             <div className="lg:col-span-2 space-y-12">
               
               <section>
                 <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                   <Layers className="text-primary" /> Overview
                 </h3>
                 <p className="text-lg text-textMuted leading-relaxed">
                   {project.overview}
                 </p>
               </section>

               <section>
                 <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                   <Users className="text-primary" /> The Problem
                 </h3>
                 <div className="p-6 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl">
                   <p className="text-lg text-slate-300 italic">"{project.problem}"</p>
                 </div>
               </section>

               <section>
                 <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                   <PenTool className="text-primary" /> Process
                 </h3>
                 <div className="space-y-6">
                   {project.process.map((step, idx) => (
                     <div key={idx} className="flex gap-4 group">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-lg font-bold text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                         {idx + 1}
                       </div>
                       <div className="pt-2">
                         <p className="text-slate-300 text-lg">{step}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </section>

             </div>

             {/* Right Column: Meta Info */}
             <div className="space-y-8">
               <div className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5 sticky top-24">
                 
                 <div className="mb-8">
                   <h4 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Role</h4>
                   <p className="text-xl font-bold text-white">{project.role}</p>
                 </div>

                 <div className="mb-8">
                   <h4 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Tools</h4>
                   <div className="flex flex-wrap gap-2">
                     {project.tools.map(tool => (
                       <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-primary border border-primary/20">
                         {tool}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div className="mb-8">
                   <h4 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2 flex items-center gap-2">
                     <Award size={14} /> Key Outcomes
                   </h4>
                   <ul className="space-y-3">
                     {project.outcomes.map((outcome, idx) => (
                       <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                         <span className="text-green-500 mt-1">✓</span> {outcome}
                       </li>
                     ))}
                   </ul>
                 </div>

                 {project.link && (
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block w-full text-center py-4 bg-primary text-black font-bold rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                   >
                     View Live Project <ExternalLink size={16} className="inline ml-1" />
                   </a>
                 )}

               </div>
             </div>
           </div>
        </div>
      </div>
      
      {/* Next Project Teaser (Simple Loop) */}
       <div className="max-w-7xl mx-auto px-6 mt-16 pt-16 border-t border-white/5">
         <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">More Projects</h3>
            <Link to="/" className="text-primary hover:underline">View All</Link>
         </div>
       </div>
    </div>
  );
};