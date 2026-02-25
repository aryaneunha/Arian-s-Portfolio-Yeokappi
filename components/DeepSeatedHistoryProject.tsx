import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Film, Camera, Users, Calendar, Award, Play, Mic, Monitor, PenTool, Clapperboard, ArrowRight, Video, ChevronLeft, ChevronRight } from 'lucide-react';
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

export const DeepSeatedHistoryProject: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const museumImages = [
    "https://i.ibb.co/QFt062jf/509419259-1199313255265396-7246966617428911762-n.jpg", // Image 1
    "https://i.ibb.co/3y3yQczj/494286516-1199310015265720-3142809180586477568-n.jpg", // Image 2
    "https://i.ibb.co/14Mf49X/509357091-1199313348598720-808674312924739067-n.jpg", // Image 3
    "https://i.ibb.co/kV0ttGCs/509427261-1199313321932056-3657371075687652148-n.jpg"  // Image 4
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % museumImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + museumImages.length) % museumImages.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-primary selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden">
         {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50 z-10"></div>
          <img 
            src="https://i.ibb.co/QFt062jf/509419259-1199313255265396-7246966617428911762-n.jpg" 
            alt="Deep-Seated History Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Award size={14} /> Official Selection: Museum of Vancouver 2025
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Deep-Seated History
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mb-6 leading-relaxed">
              An intimate documentary exploring how a single object can hold the weight of memory, migration, and identity across generations.
            </p>

            <div className="flex flex-wrap justify-start gap-8 text-sm text-textMuted border-t border-white/5 pt-8">
               <div className="flex flex-col items-start gap-1">
                  <span className="font-bold uppercase tracking-wider text-xs">Role</span>
                  <span className="text-white">Cinematographer & Co-Producer</span>
               </div>
               <div className="flex flex-col items-start gap-1">
                  <span className="font-bold uppercase tracking-wider text-xs">Duration</span>
                  <span className="text-white">4:27</span>
               </div>
               <div className="flex flex-col items-start gap-1">
                  <span className="font-bold uppercase tracking-wider text-xs">Genre</span>
                  <span className="text-white">Short Documentary</span>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-12 px-6 bg-surface relative border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="flex flex-col items-center lg:items-start">
            <RevealOnScroll className="w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
               <img src="https://i.ibb.co/xS2mRZND/506493175-1199309601932428-8277072471656562577-n.jpg" />
            </RevealOnScroll>
            <p className="text-xs text-textMuted mt-3 opacity-80 text-center lg:text-left font-medium">Official exhibition poster for <em>Where Time Sat Still</em> at the Museum of Vancouver (Design by MOV).</p>
          </div>

          {/* Right: Text */}
          <RevealOnScroll>
             <h2 className="text-2xl font-bold leading-relaxed text-white mb-6">
               "Objects are not just things. They are vessels of time."
             </h2>
             <p className="text-lg text-textMuted leading-relaxed">
               Through the intimate story of Jonathan Cauri, <em className="text-white">Deep-Seated History</em> reveals the emotional resonance of a childhood high chair that traveled across continents. Produced by a multidisciplinary team including Arian Haresh Naidu, Ryan Jinyu Guo, Hei Tung Angela Chan, Eric Tzu, and Taji Wamai, the film was honored with a showcase at the Museum of Vancouver's exhibition <em>Where Time Sat Still</em>.
             </p>
          </RevealOnScroll>

        </div>
      </section>

      {/* 3. EXHIBITION FEATURE (CAROUSEL) */}
      <section className="py-12 px-6 bg-background">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <RevealOnScroll>
               <div className="border-l-4 border-primary/50 pl-8">
                  <h2 className="text-4xl font-bold text-white mb-6">A Museum Feature</h2>
                  <p className="text-lg text-textMuted mb-6 leading-relaxed">
                     Selection for the Museum of Vancouver's <em>Where Time Sat Still</em> exhibition was a testament to the film's ability to transcend a simple student project. The exhibition curated works that explored the intersection of memory, cultural identity, and material culture.
                  </p>
                  <p className="text-lg text-textMuted leading-relaxed">
                     Our film served as a visual anchor for the theme of "Inheritance," prompting visitors to reflect on the artifacts that define their own family histories.
                  </p>
               </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="relative group">
               {/* Image Carousel */}
               <div className="bg-surfaceHighlight shadow-2xl border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
                      <img 
                        src={museumImages[currentSlide]} 
                        alt={`Museum Display Slide ${currentSlide + 1}`} 
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                      
                      {/* Controls */}
                      <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-black transition-colors z-10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-black transition-colors z-10"
                      >
                        <ChevronRight size={24} />
                      </button>
                  </div>
                  
                  {/* Overlay Info (Moved Below) */}
                  <div className="bg-surfaceHighlight p-6 border-t border-white/10">
                     <h4 className="text-white font-bold text-lg mb-1">Deep-Seated History (2025)</h4>
                     <p className="text-xs text-textMuted">
                        Museum Exhibition View {currentSlide + 1} / {museumImages.length}
                     </p>
                  </div>
               </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* 4. CONCEPT & STORY */}
      <section className="py-12 px-6 bg-surfaceHighlight relative">
         <div className="max-w-5xl mx-auto text-center mb-8">
            <RevealOnScroll>
               <h2 className="text-3xl font-bold text-white mb-8">The Narrative Pivot</h2>
               <p className="text-textMuted max-w-2xl mx-auto leading-relaxed">
                  Initially conceived as a dual-narrative piece, we made the critical directorial decision to focus exclusively on Jonathan Cauri's story. His articulate vulnerability and the physical presence of the spoon, the only remaining artifact from his childhood high chair, offered a stronger, more unified emotional arc than a fragmented approach.
               </p>
            </RevealOnScroll>
         </div>

         <div className="max-w-6xl mx-auto">
             <RevealOnScroll>
                <div className="relative w-full overflow-hidden rounded-2xl group">
                    <img src="https://i.ibb.co/xqKP8bwk/Screenshot-2026-02-20-at-7-31-26-PM-1.png" alt="The Chair Object" className="w-full h-auto block opacity-60 sepia-[.3]" />
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-6">
                       <p className="text-white font-serif italic text-2xl md:text-3xl drop-shadow-lg">"It's the only thing that's been with me everywhere."</p>
                    </div>
                </div>
             </RevealOnScroll>
         </div>
      </section>

      {/* 5. MY ROLE */}
      <section className="py-12 px-6 bg-background">
         <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
               <h2 className="text-4xl font-bold text-white mb-8 text-center">Cinematography & Co-Production</h2>
            </RevealOnScroll>

            <div className="space-y-12">
               {/* Cinematography */}
               <RevealOnScroll className="space-y-8 flex flex-col">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                        <Camera className="text-primary" size={32} />
                        <h3 className="text-2xl font-bold text-white">The Visual Language</h3>
                    </div>
                    <p className="text-textMuted leading-relaxed mb-8 max-w-3xl">
                        As cinematographer, my goal was intimacy without intrusion. I utilized natural window light to bathe the subject in warmth, reflecting the nostalgia of the narrative. Framing was deliberately tight, hands touching wood, dust motes in the air to emphasize texture and physical connection.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src="https://i.ibb.co/G1Bszs6/Screenshot-2026-02-20-at-7-32-25-PM-Nero-AI-Image-Upscaler-Photo-Face.png" alt="Camera Setup" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                     </div>
                     <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src="https://i.ibb.co/6JJWdGM4/Screenshot-2026-02-20-at-7-32-04-PM-Nero-AI-Image-Upscaler-Photo-Face.png" alt="Cinematic Frame" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                     </div>
                  </div>
               </RevealOnScroll>

               {/* Co-Production */}
               <RevealOnScroll delay={200} className="space-y-8 flex flex-col">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                        <Users className="text-secondary" size={32} />
                        <h3 className="text-2xl font-bold text-white">Production Management</h3>
                    </div>
                    <p className="text-textMuted leading-relaxed mb-8 max-w-3xl">
                        Beyond the lens, I facilitated the pre-production phase, researching the psychology of objects and refining our interview questions to elicit deeper storytelling. During post-production, I collaborated on the archival search, finding historical context that grounded Jonathan's personal journey.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src="https://i.ibb.co/MyBP3sBV/Screenshot-2026-02-21-at-6-28-20-PM.png" alt="Crew Silhouette" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                     </div>
                     <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                         <img src="https://i.ibb.co/XrTMm1md/Screenshot-2026-02-21-at-6-28-52-PM.png" alt="Storyboard Sheet" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                     </div>
                  </div>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* 6. PRODUCTION PROCESS */}
      <section className="py-12 px-6 bg-surface border-y border-white/5">
         <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
               <h2 className="text-3xl font-bold text-white mb-8 text-center">Process to Picture</h2>
            </RevealOnScroll>
            
            <div className="space-y-8">
               {/* Phase 1 */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2 text-primary font-bold text-6xl opacity-20">01</div>
                  <div className="md:col-span-10 space-y-4">
                     <h3 className="text-xl font-bold text-white">Discovery & Pre-Production</h3>
                     <p className="text-textMuted">
                        We began with a thematic inquiry: "What objects do we carry?" This led to drafting interview questions designed to bypass superficial descriptions and access core memories. We scouted locations that offered visual texture, Jonathan's own living space provided the perfect authentic backdrop.
                     </p>
                  </div>
               </div>

               {/* Phase 2 */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                   <div className="md:col-span-2 text-primary font-bold text-6xl opacity-20">02</div>
                   <div className="md:col-span-10 space-y-4">
                      <h3 className="text-xl font-bold text-white">Production & B-Roll</h3>
                      <p className="text-textMuted">
                         Filming was an exercise in patience. We prioritized the interview audio, allowing silence to linger. For B-roll, I focused on macro shots, the spoon's close up shots, the wear on the metal, building a visual vocabulary of resilience and age.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                         <img src="https://i.ibb.co/nN7dwYgG/hhh.jpg" alt="B-Roll Detail 1" className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity rounded-xl border border-white/5" />
                         <img src="https://i.ibb.co/pjwxScf5/dfddfd.jpg" alt="B-Roll Detail 2" className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity rounded-xl border border-white/5" />
                      </div>
                   </div>
               </div>

               {/* Phase 3 */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                   <div className="md:col-span-2 text-primary font-bold text-6xl opacity-20">03</div>
                   <div className="md:col-span-10 space-y-4">
                      <h3 className="text-xl font-bold text-white">Refinement</h3>
                      <p className="text-textMuted">
                         Post-production required a ruthless edit. We stabilized handheld footage to maintain a dreamlike quality rather than a chaotic one. Color grading shifted towards warm ambers and deep shadows to mimic the feeling of memory. Subtitles were added, including translations for Kenyan concepts, ensuring cultural nuance was preserved.
                      </p>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. FINAL FILM */}
      <section className="py-12 px-6 bg-background relative">
          <div className="max-w-5xl mx-auto text-center">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">The Final Cut</h2>
                  
                  {/* Video Placeholder */}
                  <a href="https://www.youtube.com/watch?v=Aejjvfm37qg" target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-video bg-surfaceHighlight border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer mb-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                      <img 
                        src="https://i.ibb.co/tMY1DLxQ/Untitled-design.jpg" 
                        alt="Video Thumbnail" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:scale-110 transition-transform duration-500 z-20">
                          <Play className="text-white fill-white ml-1" size={32} />
                      </div>
                      <span className="absolute bottom-6 right-6 text-xs text-white/90 font-mono z-20 bg-black/50 px-2 py-1 rounded">04:27</span>
                  </a>

                  {/* Feedback Removed */}
              </RevealOnScroll>
          </div>
      </section>

      {/* 9. IMPACT & RECOGNITION */}
      <section className="py-12 px-6 relative overflow-hidden bg-surfaceHighlight">
          {/* Background Wall Texture */}
          <div className="absolute inset-0 opacity-10">
              <img src="https://i.ibb.co/LXyss5zj/Museum-of-Vancouver.jpg" alt="Museum Wall Texture" className="w-full h-full object-cover grayscale" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
              <RevealOnScroll>
                  <Award size={48} className="text-primary mx-auto mb-8" />
                  <h2 className="text-4xl font-bold text-white mb-8">Legacy</h2>
                  <p className="text-xl text-textMuted leading-relaxed mb-8">
                      Seeing our film in the Museum of Vancouver was a surreal moment. It wasn't just about the recognition; it was about knowing that Jonathan's story resonated with people. This project taught me that when you treat a personal story with genuine care and respect, it connects with others in a powerful way.
                  </p>
              </RevealOnScroll>
          </div>
      </section>

      {/* 10. TOOLS */}
      <section className="py-12 px-6 bg-background border-t border-white/5">
          <RevealOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-8">Tools Used</h3>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                      {[
                          { name: 'Cinema Camera', icon: <Camera size={16} /> },
                          { name: 'Premiere Pro', icon: <Video size={16} /> },
                          { name: 'After Effects', icon: <Clapperboard size={16} /> },
                          { name: 'Audition', icon: <Mic size={16} /> }
                      ].map(tool => (
                          <span key={tool.name} className="text-lg font-bold text-white flex items-center gap-2">
                              {tool.icon} {tool.name}
                          </span>
                      ))}
                  </div>
              </div>
          </RevealOnScroll>
      </section>

      {/* 11. CREDITS */}
      <section className="py-12 px-6 bg-black text-center text-textMuted text-sm">
          <RevealOnScroll>
              <div className="max-w-2xl mx-auto space-y-8">
                  <div>
                      <h4 className="font-bold uppercase tracking-widest text-white mb-4">Filmmakers</h4>
                      <p>Arian Haresh Naidu • Ryan Jinyu Guo • Hei Tung Angela Chan • Eric Tzu • Taji Wamai</p>
                  </div>
                  <div>
                      <h4 className="font-bold uppercase tracking-widest text-white mb-4">Featuring</h4>
                      <p>Jonathan Cauri</p>
                  </div>
                  <div>
                      <h4 className="font-bold uppercase tracking-widest text-white mb-4">Special Thanks</h4>
                      <p>Museum of Vancouver • School of Interactive Arts & Technology</p>
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