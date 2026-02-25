import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink, PenTool, Layout, Monitor, Instagram, Camera, Calendar, ArrowRight, Layers, Type, Image as ImageIcon, Quote, Book, Video } from 'lucide-react';
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

export const DouglasRoyalsProject: React.FC = () => {
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
            src="https://i.ibb.co/mrsKF0NW/coverdoug.png" 
            alt="Douglas Royals Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Professional Work 2023–2025
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              Douglas <br/> Royals
            </h1>
            <p className="text-lg text-textMuted max-w-2xl mb-12 leading-relaxed">
              Forging a unified, high-octane visual identity for collegiate athletics across digital, print, and physical environments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Role</h3>
                <p className="text-white font-medium">Graphic Designer</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Focus</h3>
                <p className="text-white font-medium">Branding, Social, Motion</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Context</h3>
                <p className="text-white font-medium">Athletics Department</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Outcome</h3>
                <p className="text-primary font-bold">+30% Engagement</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="pt-12 pb-12 px-6 bg-surface relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The Heart of <span className="text-primary">The Game</span></h2>
            <div className="prose prose-invert text-lg text-slate-400 space-y-6">
              <p>
                The Douglas Royals Athletics Department represents the competitive spirit of Douglas College. With multiple varsity teams and a passionate student base, the visual language needed to reflect energy, precision, and pride.
              </p>
              <p>
                <strong>The Challenge:</strong> The existing branding was fragmented. Social media lacked a cohesive voice, event graphics were inconsistent, and the "Royals" identity felt disconnected across platforms.
              </p>
              <p>
                <strong>My Responsibility:</strong> To overhaul the visual output. From high-speed gameday graphics to designing large-format banners for the Douglas Royals Athletic banquet event, I was tasked with creating a system that could scale across sports and mediums while maintaining a premium, collegiate aesthetic.
              </p>
            </div>
            
            {/* Recommendation Section */}
            <div className="mt-16 p-6 bg-surfaceHighlight border border-white/10 rounded-2xl relative shadow-lg">
                <Quote className="absolute top-4 right-4 text-white/5" size={48} />
                <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden shrink-0 border border-white/10">
                         {/* Placeholder for Nick Bondi's avatar since it wasn't provided directly, using generic generic or initials */}
                         <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-400 font-bold">NB</div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Nick Bondi <span className="text-textMuted font-normal text-xs ml-1">• 1st</span></h4>
                        <p className="text-xs text-textMuted">Writer, Editor, Content Professional & Communications Specialist</p>
                        <p className="text-xs text-slate-500 mb-3 mt-1">Nick managed me directly at Douglas College</p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            "Arian was a key contributor to the Athletics & Recreation Marketing and Communications team during his time at Douglas College. He helped with our social media redesign, creating graphics and video for our annual Athletics Banquet, and took on tasks on the fly and executed them at a high level."
                        </p>
                    </div>
                </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200} className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-24">
            <div className="space-y-4 translate-y-8">
              <img src="https://i.ibb.co/jkvnfNHp/Rectangle-36.jpg" alt="Brand Asset 1" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
              <img src="https://i.ibb.co/x8K3J1Xz/470143323-18449395309069290-5480695900813046896-n.jpg" alt="Brand Asset 2" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
            <div className="space-y-4">
               <img src="https://i.ibb.co/V0qzDLfC/Rectangle-47.png" alt="Brand Asset 3" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
               <img src="https://i.ibb.co/wr8Y5w9p/4.png" alt="Brand Asset 4" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. GOALS & CONSTRAINTS */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="mb-8 border-b border-white/10 pb-8">
               <h2 className="text-3xl font-bold mb-4">Goals & Constraints</h2>
               <p className="text-textMuted max-w-2xl">Balancing creative ambition with the fast-paced reality of sports schedules.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Unified Identity', desc: 'Consolidate fragmented visuals into a single, recognizable design language across 5+ sports teams.', icon: <Layout className="text-primary" /> },
              { title: 'Speed & Scale', desc: 'Develop templates allowing for real-time score updates and rapid turnaround during tournaments.', icon: <ExternalLink className="text-secondary" /> },
              { title: 'Fan Engagement', desc: 'Stop the scroll. Create high-contrast, motion-centric visuals that grab attention on Instagram and Twitter.', icon: <Instagram className="text-pink-500" /> }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className="p-8 bg-surfaceHighlight rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="mb-6 bg-background w-14 h-14 rounded-full flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRANDING SYSTEM */}
      <section className="py-12 px-6 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold mb-6">Constructing the Identity</h2>
              <p className="text-slate-400 text-lg">
                The Royals brand demands authority. I utilized a bold, geometric typographic stack paired with a sophisticated palette of Deep Forest Green and Obsidian. The system relies on sharp angles, dynamic photography cutouts, and subtle grit textures to convey athleticism.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200} className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {/* Color Swatches - 6 Tiles Grid */}
               <div className="bg-[#1C1E21] h-32 rounded-xl flex flex-col justify-end p-4 text-white font-mono text-xs shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="font-bold mb-1">Obsidian</span>
                  <span className="opacity-60">#1C1E21</span>
               </div>
               <div className="bg-[#0B1F11] h-32 rounded-xl flex flex-col justify-end p-4 text-white font-mono text-xs shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="font-bold mb-1">Deep Forest</span>
                  <span className="opacity-60">#0B1F11</span>
               </div>
               <div className="bg-[#214427] h-32 rounded-xl flex flex-col justify-end p-4 text-white font-mono text-xs shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="font-bold mb-1">Hunter Green</span>
                  <span className="opacity-60">#214427</span>
               </div>
               <div className="bg-[#4A4E56] h-32 rounded-xl flex flex-col justify-end p-4 text-white font-mono text-xs shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="font-bold mb-1">Slate Grey</span>
                  <span className="opacity-60">#4A4E56</span>
               </div>
               <div className="bg-[#F9F9F9] h-32 rounded-xl flex flex-col justify-end p-4 text-black font-mono text-xs shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="font-bold mb-1">Pearl White</span>
                  <span className="opacity-60">#F9F9F9</span>
               </div>
               {/* Summary Tile */}
               <div className="bg-surfaceHighlight border border-white/10 h-32 rounded-xl flex flex-col justify-center items-center p-4 text-center shadow-lg hover:border-primary/50 transition-colors">
                   <span className="text-white font-bold text-xs uppercase tracking-wider">Brand Palette</span>
                   <span className="text-[10px] text-textMuted mt-1">Primary & Secondary</span>
               </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL MEDIA GRAPHICS */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
           <RevealOnScroll>
             <div className="flex flex-col md:flex-row justify-between items-end mb-8">
               <div>
                 <h2 className="text-4xl font-bold mb-4">Digital Engagement</h2>
                 <p className="text-textMuted max-w-xl">
                   Social media is the front line of collegiate sports. I designed a suite of templates for Player Spotlights, Gameday Hype, and Score Updates that resulted in a <span className="text-white font-bold">30% follower increase</span>.
                 </p>
               </div>
               <a href="https://www.instagram.com/douglasroyals/?hl=en" target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" className="mt-6 md:mt-0" icon={<Instagram size={18} />}>View Feed</Button>
               </a>
             </div>
           </RevealOnScroll>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              
              {/* Image 1 */}
              <RevealOnScroll delay={0} className="group cursor-pointer">
                 <a href="https://www.instagram.com/p/C2A0mnfyfKZ/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                       <Instagram className="text-white drop-shadow-lg" size={32} />
                     </div>
                     <img src="https://i.ibb.co/zV170RHW/89106292-3ade-47c3-ab44-1be5b8431673.png" alt="Social Post 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                 </a>
               </RevealOnScroll>

              {/* Image 2 */}
               <RevealOnScroll delay={100} className="group cursor-pointer">
                 <a href="https://www.instagram.com/p/CzeiLyPvi13/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                       <Instagram className="text-white drop-shadow-lg" size={32} />
                     </div>
                     <img src="https://i.ibb.co/Gffqd3f3/63034c60-0459-4168-8e6d-fcb71bcfb40e.png" alt="Social Post 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                 </a>
               </RevealOnScroll>

              {/* Image 3 */}
               <RevealOnScroll delay={200} className="group cursor-pointer">
                 <a href="https://www.instagram.com/p/C2A76t0Sz1x/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                       <Instagram className="text-white drop-shadow-lg" size={32} />
                     </div>
                     <img src="https://i.ibb.co/677ppGdq/470060569-18449385808069290-8042753117856029755-n.jpg" alt="Social Post 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                 </a>
               </RevealOnScroll>

              {/* Image 4 */}
               <RevealOnScroll delay={300} className="group cursor-pointer">
                 <a href="https://www.instagram.com/p/CzZzdiQP298/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                       <Instagram className="text-white drop-shadow-lg" size={32} />
                     </div>
                     <img src="https://i.ibb.co/Q3KjStcK/399372058-18375998305069290-957622397883054272-n.jpg" alt="Social Post 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                 </a>
               </RevealOnScroll>

           </div>
        </div>
      </section>

      {/* 6. OTHER FORMATS */}
      <section className="py-12 px-6 bg-surfaceHighlight">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
             <h2 className="text-4xl font-bold mb-8 text-center">Other Formats & Graphics</h2>
          </RevealOnScroll>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Twitter Header */}
            <RevealOnScroll className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group h-auto">
               <img 
                 src="https://i.ibb.co/Zzx4BPxy/Volleyball-Championships-Twitter-Post.jpg" 
                 alt="Twitter Header Design" 
                 className="w-full h-auto block" 
               />
               <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <h3 className="text-2xl font-bold text-white drop-shadow-md">PACWEST Tournament Header</h3>
                 <p className="text-slate-300 drop-shadow-md">Digital Dimensions: 1500px x 500px</p>
               </div>
            </RevealOnScroll>

            {/* Bento Grid - 3 Columns to ensure no vertical gaps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                
                {/* Column 1: Tall Image */}
                <div className="space-y-6">
                    <RevealOnScroll delay={100} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group relative h-auto">
                       <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                            <span className="text-white font-bold drop-shadow-md">Fitness Classes</span>
                            <p className="text-xs text-slate-300 mt-1">11" x 17" Poster</p>
                          </div>
                       </div>
                       <img src="https://i.ibb.co/n4cHt1Z/dssd.png" alt="Fitness Graphic" className="w-full h-auto block" />
                    </RevealOnScroll>
                </div>

                {/* Column 2: Two smaller images */}
                <div className="space-y-6">
                    <RevealOnScroll delay={200} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group relative h-auto">
                       <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                             <span className="text-white font-bold drop-shadow-md">Announcements</span>
                             <p className="text-xs text-slate-300 mt-1">11" x 8.5" Landscape</p>
                          </div>
                       </div>
                       <img src="https://i.ibb.co/ynVPCx8G/Rectangle-46.png" className="w-full h-auto block" />
                    </RevealOnScroll>

                    <RevealOnScroll delay={400} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group relative h-auto">
                       <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                             <span className="text-white font-bold drop-shadow-md">Player Profile</span>
                             <p className="text-xs text-slate-300 mt-1">1080px x 1350px</p>
                          </div>
                       </div>
                       <img src="https://i.ibb.co/VcZn9sv0/Rectangle-38.png" className="w-full h-auto block" />
                    </RevealOnScroll>
                </div>

                {/* Column 3: Tall Image */}
                <div className="space-y-6">
                    <RevealOnScroll delay={300} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group relative h-auto">
                       <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                            <span className="text-white font-bold drop-shadow-md">Facility Hours</span>
                            <p className="text-xs text-slate-300 mt-1">11" x 17" Poster</p>
                          </div>
                       </div>
                       <img src="https://i.ibb.co/6Rc9gjmg/Rectangle-39.png" className="w-full h-auto block" />
                    </RevealOnScroll>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. LIVE STREAM GRAPHICS (Updated from Scoreboard Architecture) */}
      <section className="py-12 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
           <div className="mb-8">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 mb-4 text-red-500 font-bold tracking-widest uppercase text-xs">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Live Broadcast
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">Live Stream Graphics</h2>
                <p className="text-slate-400 leading-relaxed max-w-3xl">
                   Designing for live sports broadcasts on YouTube requires immediate clarity. Viewers watching on mobile devices need to read scores and player stats instantly. I created a high-contrast broadcast package used for real-time overlays during matches, ensuring professional-grade presentation for the Royals' digital audience.
                </p>
              </RevealOnScroll>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll className="w-full rounded-2xl overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-slate-900">
                <img src="https://i.ibb.co/sJvmT34M/Slide-4-3-1.jpg" alt="Live Stream Graphics UI" className="w-full h-auto block opacity-90" />
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                       <CheckCircle className="text-green-500" size={24} />
                       <span className="text-white font-medium">High Contrast Typography</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                       <Monitor className="text-green-500" size={24} />
                       <span className="text-white font-medium">YouTube & OBS Optimization</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                       <CheckCircle className="text-green-500" size={24} />
                       <span className="text-white font-medium">Real-time Overlay Assets</span>
                    </div>
                 </div>
              </RevealOnScroll>
           </div>
        </div>
      </section>

      {/* 8. PROCESS */}
      <section className="py-12 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-8">Behind the Scenes</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {[
               { 
                 title: 'Research and Planning', 
                 img: 'https://i.ibb.co/99MHjcsc/IMG-7261.jpg', 
                 desc: 'Writing down and analyzing professional sport trends.' 
               },
               { 
                 title: 'Layout Iteration', 
                 img: 'https://i.ibb.co/Y4YDyykN/IMG-8215.jpg', 
                 desc: 'Planning out the layouts on Adobe CC.' 
               },
               { 
                 title: 'Production', 
                 img: 'https://i.ibb.co/9m1nSGPY/IMG-9787.jpg', 
                 desc: 'Shooting for content for social media.' 
               }
             ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150} className="space-y-4">
                   <div className="aspect-[4/3] bg-background rounded-xl overflow-hidden border border-white/5">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-textMuted">{item.desc}</p>
                   </div>
                </RevealOnScroll>
             ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY */}
      <section className="py-12 px-6 bg-background">
         <div className="max-w-6xl mx-auto">
           <RevealOnScroll>
              <h2 className="text-4xl font-bold mb-8">Team Posters</h2>
           </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    
    <img src="https://i.ibb.co/GNPH7Vp/Rectangle-48.png" alt="Douglas Royals Graphic 1" className="w-full h-auto rounded-2xl border border-white/5 hover:border-white/20 transition-colors shadow-lg" />

    <img src="https://i.ibb.co/hxSLY3QH/Rectangle-52.png" alt="Douglas Royals Graphic 2" className="w-full h-auto rounded-2xl border border-white/5 hover:border-white/20 transition-colors shadow-lg" />

    <img src="https://i.ibb.co/y308SPn/Rectangle-53.png" alt="Douglas Royals Graphic 3" className="w-full h-auto rounded-2xl border border-white/5 hover:border-white/20 transition-colors shadow-lg" />

</div>
         </div>
      </section>

      {/* 10. IMPACT & RESULTS */}
      <section className="py-12 px-6 bg-surfaceHighlight relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

         <div className="max-w-5xl mx-auto relative z-10 text-center">
            <RevealOnScroll>
               <h2 className="text-4xl md:text-5xl font-bold mb-8">The Result</h2>
               <p className="text-xl text-slate-300 leading-relaxed mb-8">
                 The refreshed Douglas Royals identity has set a new standard for collegiate athletics branding in the conference. The cohesive system has not only improved workflow efficiency but has significantly amplified student pride and external engagement.
               </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="w-full max-w-4xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12">
               <img src="https://i.ibb.co/V0RCpZSG/IMG-3191.jpg" alt="Impact Hero" className="w-full h-full object-cover" />
            </RevealOnScroll>

            {/* 11. TOOLS */}
            <RevealOnScroll delay={300}>
               <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-8">Tools Used</h3>
               <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                  {[
                    { name: 'Adobe Photoshop', icon: <ImageIcon size={16} /> },
                    { name: 'Adobe Illustrator', icon: <PenTool size={16} /> },
                    { name: 'Adobe InDesign', icon: <Book size={16} /> },
                    { name: 'After Effects', icon: <Video size={16} /> },
                    { name: 'Figma', icon: <Layout size={16} /> }
                  ].map(tool => (
                    <span key={tool.name} className="text-lg font-bold text-white flex items-center gap-2">
                       {tool.icon} {tool.name}
                    </span>
                  ))}
               </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* Footer Simple */}
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