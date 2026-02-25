import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, PenTool, Layout, Users, Heart, Zap, MessageSquare, Search, Accessibility, ArrowRight, Play, CheckCircle, Monitor, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { Navbar } from './Navbar';

// Utility component for scroll animations
const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export const FriendlyPharmacistsProject: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-primary selection:text-black font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-6 px-6 pt-24 overflow-hidden">
        {/* Background Image Parallax Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40 z-10"></div>
          <img 
            src="https://i.ibb.co/nqwhLrTY/Untitled-design-36.png" 
            alt="The Friendly Pharmacists Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <RevealOnScroll>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              2025 – Present
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              The Friendly Pharmacists: <br/>
              <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 block mt-2 tracking-wide">Medication Education Powered by <br/> Visual Storytelling & AI</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed mb-12">
              Bridging the gap between complex medical information and patient understanding through accessible, AI-narrated video content.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Role</h3>
                  <p className="text-white font-medium">Digital Media & AI Content Design Assistant</p>
               </div>
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Focus</h3>
                  <p className="text-white font-medium">Video Production, AI Avatars</p>
               </div>
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Context</h3>
                  <p className="text-white font-medium">Health Tech Startup</p>
               </div>
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Outcome</h3>
                  <p className="text-green-400 font-bold">15+ Videos Produced</p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-12 px-6 bg-surface relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                   <h2 className="text-3xl font-bold mb-6 text-white">The Mission</h2>
                   <p className="text-lg text-textMuted leading-relaxed">
                      The Friendly Pharmacists is a startup dedicated to democratizing medication education. Using AI avatars, we create scalable video content to help patients understand treatment plans and support pharmacists by reducing repetitive counselling.
                   </p>
                </div>
                <div>
                   <h2 className="text-3xl font-bold mb-6 text-white">My Contribution</h2>
                   <p className="text-lg text-textMuted leading-relaxed">
                      As the Digital Media & AI Content Design Assistant, I am responsible for the end-to-end production of our educational library. I translate clinical scripts into engaging visual narratives and utilize Synthesia for AI narration to ensure brand consistency and clarity.
                   </p>
                </div>
             </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <RevealOnScroll delay={0} className="group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-lg relative mb-3">
                   <img src="https://i.ibb.co/R4k4k9kZ/8.png" alt="Video Still 1" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-xs text-textMuted">Video Still 1</p>
             </RevealOnScroll>
             <RevealOnScroll delay={100} className="group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-lg relative mb-3">
                   <img src="https://i.ibb.co/4wWKdkr9/7.png" alt="Video Still 2" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-xs text-textMuted">Video Still 2</p>
             </RevealOnScroll>
             <RevealOnScroll delay={200} className="group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-lg relative mb-3">
                   <img src="https://i.ibb.co/HDvSPDJN/4.png" alt="Video Still 3" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-xs text-textMuted">Video Still 3</p>
             </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="py-12 px-6 bg-background">
         <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
                <div className="max-w-3xl mb-8">
                    <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
                    <p className="text-xl text-textMuted">
                        Healthcare communication faces a "triple constraint": dense concepts, overwhelmed patients, and limited pharmacist time.
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <RevealOnScroll delay={0} className="p-6 bg-surfaceHighlight rounded-xl border border-white/5 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-white mb-2">Cognitive Overload</h3>
                    <p className="text-sm text-textMuted flex-grow">Patients forget 80% of verbal info immediately. Visuals are key.</p>
                </RevealOnScroll>
                <RevealOnScroll delay={100} className="p-6 bg-surfaceHighlight rounded-xl border border-white/5 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-white mb-2">Scalability</h3>
                    <p className="text-sm text-textMuted flex-grow">Filming humans is slow. AI offers rapid updates at scale.</p>
                </RevealOnScroll>
                <RevealOnScroll delay={200} className="p-6 bg-surfaceHighlight rounded-xl border border-white/5 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-white mb-2">Accessibility</h3>
                    <p className="text-sm text-textMuted flex-grow">Content must serve diverse abilities and languages.</p>
                </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 5. CONTENT AREAS */}
      <section className="py-12 px-6 bg-background">
         <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
                <h2 className="text-4xl font-bold mb-6 text-center">Content Library</h2>
                <p className="text-textMuted text-center max-w-2xl mx-auto mb-8">
                   I have produced over 15+ educational videos covering a wide spectrum of health topics. Each series requires a unique visual approach tailored to the sensitivity and complexity of the subject.
                </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <RevealOnScroll delay={0} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-surfaceHighlight">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img src="https://i.ibb.co/7t0LtvBY/1.png" alt="Vaccines" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-white font-bold">Vaccines</h3>
                            <p className="text-xs text-textMuted">Educational Series</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={50} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-surfaceHighlight">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img src="https://i.ibb.co/rBb20pw/2.png" alt="Contraceptives" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-white font-bold">Contraceptives</h3>
                            <p className="text-xs text-textMuted">Educational Series</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={100} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-surfaceHighlight">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img src="https://i.ibb.co/KpBC4cpz/3.png" alt="Menopause" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-white font-bold">Menopause</h3>
                            <p className="text-xs text-textMuted">Educational Series</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={150} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-surfaceHighlight">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img src="https://i.ibb.co/vpGrxx4/5.png" alt="Men's Health" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-white font-bold">Men's Health</h3>
                            <p className="text-xs text-textMuted">Educational Series</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll delay={200} className="group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-surfaceHighlight">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img src="https://i.ibb.co/27N2DGmR/4.png" alt="Pharmacy Services" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-white font-bold">Pharmacy Services</h3>
                            <p className="text-xs text-textMuted">Educational Series</p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 6. PRODUCTION PROCESS */}
      <section className="py-12 px-6 bg-surface">
         <div className="max-w-7xl mx-auto">
             <RevealOnScroll>
                 <h2 className="text-4xl font-bold mb-12 text-center">The Production Pipeline</h2>
             </RevealOnScroll>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <RevealOnScroll className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                     <div className="text-green-400 font-mono text-xl font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
                     <h3 className="text-xl font-bold text-white mb-3">Script & Simplification</h3>
                     <p className="text-textMuted leading-relaxed">Translating approved clinical scripts into engaging, accessible visual narratives.</p>
                 </RevealOnScroll>

                 <RevealOnScroll delay={100} className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                     <div className="text-blue-400 font-mono text-xl font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
                     <h3 className="text-xl font-bold text-white mb-3">Synthesia Generation</h3>
                     <p className="text-textMuted leading-relaxed">Generating AI avatars with human-like pacing and emphasis for a friendly delivery.</p>
                 </RevealOnScroll>

                 <RevealOnScroll delay={200} className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                     <div className="text-purple-400 font-mono text-xl font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">03</div>
                     <h3 className="text-xl font-bold text-white mb-3">Visual Enhancement</h3>
                     <p className="text-textMuted leading-relaxed">Adding custom overlays and kinetic typography in After Effects to reinforce key information.</p>
                 </RevealOnScroll>
             </div>
         </div>
      </section>

      {/* 7. ACCESSIBILITY */}
      <section className="py-12 px-6 bg-surfaceHighlight">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             <RevealOnScroll>
                 <h2 className="text-4xl font-bold mb-6">Designed for Everyone</h2>
                 <p className="text-lg text-textMuted mb-8">
                     Health information is a right, not a privilege. We prioritize accessibility in every frame.
                 </p>
                 <div className="space-y-4">
                     <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-white/5">
                         <Monitor className="text-green-400 mt-1" size={24} />
                         <div>
                             <h4 className="text-white font-bold">Subtitles & Captions</h4>
                             <p className="text-sm text-textMuted">Hard-coded, high-contrast subtitles ensure content is accessible without sound.</p>
                         </div>
                     </div>
                     <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-white/5">
                         <Accessibility className="text-green-400 mt-1" size={24} />
                         <div>
                             <h4 className="text-white font-bold">Cognitive Ease</h4>
                             <p className="text-sm text-textMuted">Clean backgrounds and paced delivery reduce anxiety and improve focus.</p>
                         </div>
                     </div>
                 </div>
             </RevealOnScroll>
             <RevealOnScroll delay={200} className="flex justify-center">
                 <div className="w-3/4 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                     <img src="https://i.ibb.co/FTQT8gk/Untitled-design-35.png" alt="Accessibility Demo" className="w-full h-full object-cover" />
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-1 rounded-lg text-white font-medium text-sm border border-white/20 shadow-lg w-[90%] text-center">
                        [Please keep this  medication at room temperature in a cool, dry place, like a bedroom drawer.]
                     </div>
                 </div>
             </RevealOnScroll>
         </div>
      </section>

      {/* 8. BRANDING */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-4xl font-bold mb-6 text-center">Brand Consistency</h2>
              </RevealOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <RevealOnScroll className="space-y-4">
                      <div className="h-32 bg-[#459ab8] rounded-2xl flex items-end p-4 shadow-lg">
                          <span className="text-white font-mono text-xs">#459ab8</span>
                      </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={100} className="space-y-4">
                      <div className="h-32 bg-[#c7e7fe] rounded-2xl flex items-end p-4 shadow-lg">
                          <span className="text-black font-mono text-xs">#c7e7fe</span>
                      </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={200} className="space-y-4">
                       <div className="h-32 bg-surfaceHighlight border border-white/10 rounded-2xl flex items-center justify-center p-4 shadow-lg">
                          <span className="text-white font-sans text-3xl font-bold">Aa</span>
                       </div>
                       <p className="text-center text-xs text-textMuted">Clean Sans-Serif</p>
                  </RevealOnScroll>
                  <RevealOnScroll delay={300} className="space-y-4">
                       <div className="h-32 bg-surfaceHighlight border border-white/10 rounded-2xl overflow-hidden shadow-lg">
                          <img src="https://i.ibb.co/3918DThm/Untitled-Instagram-Post-45.png" alt="Friendly Icons" className="w-full h-full object-cover" />
                       </div>
                       <p className="text-center text-xs text-textMuted">Friendly Icons</p>
                  </RevealOnScroll>
              </div>
          </div>
      </section>

      {/* 9. IMPACT */}
      <section className="py-12 px-6 bg-surface relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
              <RevealOnScroll>
                  <h2 className="text-4xl font-bold mb-8 text-center">The Impact</h2>
              </RevealOnScroll>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="p-8 bg-surfaceHighlight rounded-2xl border border-white/5 text-center">
                      <div className="text-5xl font-bold text-green-400 mb-2">15+</div>
                      <p className="text-textMuted">Videos Produced</p>
                  </div>
                  <div className="p-8 bg-surfaceHighlight rounded-2xl border border-white/5 text-center">
                      <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
                      <p className="text-textMuted">Pharmacist Validated</p>
                  </div>
                  <div className="p-8 bg-surfaceHighlight rounded-2xl border border-white/5 text-center">
                      <div className="text-5xl font-bold text-purple-400 mb-2">Growth</div>
                      <p className="text-textMuted">Scalable Asset Library</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 10. WEBSITE REF */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-5xl mx-auto text-center">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold mb-6">Context in Action</h2>
                  <p className="text-textMuted mb-8">For additional context on the platform's mission and scope, you can visit the official landing page.</p>
                  <a href="https://thefriendlypharmacists.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" icon={<ExternalLink size={18} />}>Visit Live Website</Button>
                  </a>
              </RevealOnScroll>
          </div>
      </section>

      {/* 12. CHALLENGES & LEARNINGS */}
      <section className="py-12 px-6 bg-surfaceHighlight">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8">Reflections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                          <h3 className="text-lg font-bold text-white mb-3">Challenges Faced</h3>
                          <p className="text-textMuted text-sm leading-relaxed">
                              Learning to simplify medical language without losing clinical accuracy was a steep learning curve. Frequent feedback loops with pharmacists were essential to ensure every script met medical standards while remaining accessible to laypeople.
                          </p>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-white mb-3">Results</h3>
                          <p className="text-textMuted text-sm leading-relaxed">
                              Working in a startup environment taught me to be agile. Using AI tools like Synthesia allowed us to pivot content strategies quickly compared to traditional video shoots, resulting in a scalable library of over 15 videos produced in a short timeframe.
                          </p>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 11. TOOLS USED */}
      <section className="py-12 px-6 bg-black border-t border-white/10">
          <RevealOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-8">Tools Used</h3>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                      {[
                          { name: 'Synthesia', icon: <Monitor size={16} /> },
                          { name: 'Canva', icon: <PenTool size={16} /> },
                          { name: 'Figma', icon: <Layout size={16} /> }
                      ].map(tool => (
                          <span key={tool.name} className="text-lg font-bold text-white flex items-center gap-2">
                              {tool.icon} {tool.name}
                          </span>
                      ))}
                  </div>
              </div>
          </RevealOnScroll>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black text-center text-textMuted text-sm border-t border-white/10">
         <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="ghost" icon={<ArrowLeft size={16} />}>Back to Home</Button>
            </Link>
         </div>
         <p>© {new Date().getFullYear()} Arian Naidu. All Rights Reserved.</p>
      </footer>
    </div>
  );
};