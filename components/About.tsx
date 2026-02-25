import React from 'react';
import { Briefcase, GraduationCap, Heart, Quote } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import { SectionId } from '../types';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-12 px-6 bg-background relative overflow-hidden">
        {/* Background - Plain and Simple */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface/40 via-background to-background"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
          <div className="space-y-8">
            
            {/* Casual Headshot Frame */}
            <div className="relative w-24 h-24 group">
               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                  <img 
                    src="https://i.ibb.co/pBj9kt61/Gemini-Generated-Image-4u4a3k4u4a3k4u4a.png" 
                    alt="Arian Naidu" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
               </div>
            </div>

            <h2 className="text-4xl font-bold">More Than A Designer</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            
            <div className="prose prose-invert text-textMuted text-lg leading-relaxed space-y-4">
              <p>
                My journey has been defined by adaptation, observation, and a relentless curiosity about how people interact with the world around them.
              </p>
              <p>
                I am a recent graduate from <strong className="text-white">Simon Fraser University</strong>, completing a double minor in Interactive Arts & Technology and Communications. My design philosophy is grounded in understanding human behavior.
              </p>
              <p>
                When I'm not in Figma or After Effects, I'm analyzing film cinematography, exploring nature, or finding the perfect coffee shop in the city. I believe that good design doesn't just look good, it feels inevitable.
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-surfaceHighlight rounded-2xl border-l-4 border-primary/50 backdrop-blur-sm bg-opacity-80">
              <Quote size={32} className="text-primary/50 shrink-0" />
              <div>
                <p className="text-lg font-medium text-white italic mb-2">"Good design is obvious. Great design is transparent."</p>
                <p className="text-sm text-textMuted uppercase tracking-widest">- Joe Sparano</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[500px] mt-12">
            {/* Item 1: Large (2x2) */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
              <img src="https://i.ibb.co/BdKMN2z/IMG-0628.jpg" alt="Process" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            {/* Item 2: Top Right (1x1) */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
              <img src="https://i.ibb.co/j98H4JCy/IMG-0625.jpg" alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

             {/* Item 3: Middle Right (1x1) - Filling the gap */}
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
              <img src="https://i.ibb.co/0V83sj10/IMG-9308.jpg" alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Item 4: Bottom Right (1x1) */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
               <img src="https://i.ibb.co/PGjNzVJH/IMG-1740.jpg" alt="Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Item 5: Filling Bottom Row Left */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
               <img src="https://i.ibb.co/60PP9pSy/IMG-0645.jpg" alt="Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Item 6: Filling Bottom Row Right */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
               <img src="https://i.ibb.co/rRvgVpdf/IMG-6793.png" alt="Inspiration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
              <Briefcase className="text-primary" /> Experience
            </h3>
            <div className="space-y-8 relative">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative flex items-start group">
                  <div className="absolute left-0 mt-1.5 ml-1 h-3 w-3 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors"></div>
                  <div className="ml-10">
                    <span className="text-sm font-bold text-primary tracking-wider">{exp.period}</span>
                    <h4 className="text-xl font-bold text-white mt-1">{exp.role}</h4>
                    <p className="text-slate-400 font-medium mb-2">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-textMuted text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Values */}
          <div className="space-y-12">
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
                <GraduationCap className="text-secondary" /> Education
              </h3>
              <div className="bg-surfaceHighlight/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-secondary/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Simon Fraser University</h4>
                  <span className="text-sm text-textMuted bg-white/5 px-2 py-1 rounded">2021 - 2025</span>
                </div>
                <p className="text-secondary font-medium mb-4">Double Minor in Interactive Arts & Technology & Communications</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/30 rounded text-xs text-slate-300 border border-white/5">4.33 Transfer CGPA</span>
                  <span className="px-3 py-1 bg-black/30 rounded text-xs text-slate-300 border border-white/5">Entrance Summit Scholarship</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
                <Heart className="text-pink-500" /> Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['User-Centricity', 'Accessibility', 'Storytelling', 'Collaboration'].map((val) => (
                  <div key={val} className="p-4 bg-surfaceHighlight/80 backdrop-blur-sm border border-white/5 rounded-xl text-center hover:bg-white/5 transition-colors">
                    <span className="font-medium text-slate-200">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};