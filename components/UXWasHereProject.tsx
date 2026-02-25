import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, Users, Search, MessageSquare, Layout, ExternalLink, Smartphone } from 'lucide-react';
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

export const UXWasHereProject: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-textMain font-sans selection:bg-secondary selection:text-white">
      <Navbar />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <ArrowLeft size={32} className="rotate-180" /> {/* Using ArrowLeft rotated as close/back */}
            </button>
            <img 
              src={selectedImage} 
              alt="Full size preview" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* 1. HERO SECTION (Consistent Style) */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-6 px-6 pt-24 overflow-hidden">
        {/* Background Image Behind Text */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40 z-10"></div>
          <img 
            src="https://i.ibb.co/tMMyKD9S/dsds.png" 
            alt="UX Was Here Hero" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Eunoia Design Jam 2024
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
              UX Was Here
            </h1>
            
            <p className="text-lg text-textMuted max-w-2xl mb-8 leading-relaxed">
              Transforming a static beta platform into a thriving, accessible ecosystem for designers to connect, learn, and grow together.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Role</h3>
                  <p className="text-white font-medium">UX/UI Designer</p>
               </div>
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Duration</h3>
                  <p className="text-white font-medium">3 Days</p>
               </div>
               <div>
                  <h3 className="text-xs font-bold text-textMuted uppercase tracking-wider mb-2">Focus</h3>
                  <p className="text-white font-medium">Research, Prototyping</p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-12 px-6 bg-surface relative overflow-hidden">
          {/* Background Placeholder with Overlay */}
          <div className="absolute inset-0 z-0">
             <img src="https://i.ibb.co/qF74pcYc/ddd-1.png" alt="Overview Background" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-surface/90"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                  <p className="text-lg text-textMuted leading-relaxed">
                      "UX Was Here" is a community platform designed to bridge the gap between junior designers and industry mentors. However, the beta version suffered from low engagement and poor discoverability. Our challenge was to reimagine the mobile experience to foster genuine connection and make resources accessible to diverse users.
                  </p>
              </RevealOnScroll>
          </div>
      </section>

      {/* 3. CLIENT INFO */}
      <section className="py-8 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                  <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-white">Client & Context</h2>
                      {/* Logo Placeholder */}
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                          <img src="https://i.ibb.co/606Qw3Z6/Instagram-post-1.png" alt="Client Logo" className="w-full h-full object-cover" />
                      </div>
                  </div>
                  <p className="text-textMuted leading-relaxed">
                      UX Was Here is a community-driven initiative aimed at connecting aspiring designers with industry professionals. It serves primarily junior designers and students who are looking for mentorship, portfolio reviews, and industry insights. The platform's core purpose is to democratize design education and create a safe, inclusive space for asking questions and sharing professional growth.
                  </p>
              </RevealOnScroll>
          </div>
      </section>

      {/* 4. MY ROLE (Image Removed) */}
      <section className="py-8 px-6 bg-surfaceHighlight">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8">My Role</h2>
                  <div className="bg-background rounded-2xl p-8 border border-white/5">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-textMuted">
                          <li className="flex items-start gap-3">
                              <span className="text-secondary mt-1.5">•</span>
                              <span><strong className="text-white">Competitor Research:</strong> Analyzed market gaps in existing design communities.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-secondary mt-1.5">•</span>
                              <span><strong className="text-white">Brainstorming & Ideation:</strong> Facilitated team sessions to define core features.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-secondary mt-1.5">•</span>
                              <span><strong className="text-white">Feature Lead:</strong> Led the design and logic for the group chat functionality.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-secondary mt-1.5">•</span>
                              <span><strong className="text-white">Prototyping:</strong> Created high-fidelity interactive flows in Figma.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-secondary mt-1.5">•</span>
                              <span><strong className="text-white">Presentation:</strong> Designed the final pitch deck for the judges.</span>
                          </li>
                      </ul>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 5. RESEARCH & KEY FINDINGS (Images Removed, Data Presented) */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-3xl font-bold text-white mb-8">Research & Key Findings</h2>
                  
                  {/* User Survey Data Grid */}
                  <div className="mb-12">
                      <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
                          <Users size={20} /> User Survey Insights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="p-6 bg-surfaceHighlight rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-secondary/30 transition-colors">
                              <div className="h-20 flex items-center justify-center">
                                <span className="text-6xl font-black text-white">91%</span>
                              </div>
                              <p className="text-sm text-textMuted leading-snug mt-2">
                                  Have previously participated in a UX Design Jam or networking event.
                              </p>
                          </div>
                          <div className="p-6 bg-surfaceHighlight rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-secondary/30 transition-colors">
                              <div className="h-20 flex items-center justify-center">
                                <span className="text-6xl font-black text-white">68%</span>
                              </div>
                              <p className="text-sm text-textMuted leading-snug mt-2">
                                  Have primarily met other designers through Design Jams or networking events.
                              </p>
                          </div>
                          <div className="p-6 bg-surfaceHighlight rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-secondary/30 transition-colors">
                              <div className="h-20 flex items-center justify-center">
                                <span className="text-6xl font-black text-secondary">76%</span>
                              </div>
                              <p className="text-sm text-white font-medium mb-3 mt-2">
                                  Feel uncomfortable networking with new people.
                              </p>
                              <div className="flex flex-wrap justify-center gap-2">
                                  <span className="px-2 py-1 bg-black/40 rounded text-[10px] text-textMuted">Imposter Syndrome</span>
                                  <span className="px-2 py-1 bg-black/40 rounded text-[10px] text-textMuted">Fear of Rejection</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Competitor Analysis Text Block */}
                  <div>
                      <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
                          <Search size={20} /> Competitor Analysis
                      </h3>
                      <div className="bg-surfaceHighlight p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                              <Target size={120} />
                          </div>
                          <div className="relative z-10 space-y-4">
                              <p className="text-textMuted leading-relaxed">
                                  After looking at websites like <strong className="text-white">IterateUX</strong>, we identified a common theme: the mentor–early designer relationship often feels vertical and transactional. This means it relies on a hierarchy where the mentor holds all the power and the mentee simply receives advice, rather than a mutual exchange.
                              </p>
                              <p className="text-textMuted leading-relaxed">
                                  We explored <strong className="text-white">LinkedIn</strong> as a connector but found that most social media platforms still induce a layer of professional anxiety. Through this analysis, we found that we must incorporate a <strong className="text-white">team-building activity</strong> amongst large groups of designers and a way to integrate this into real-life connections to lower the barrier to entry.
                              </p>
                          </div>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 6. PROBLEM STATEMENT */}
      <section className="py-8 px-6 bg-surface border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-6">The Problem</h2>
                  <p className="text-textMuted text-lg">
                      The current beta platform suffers from a lack of active engagement. Users sign up but find little reason to return daily. Networking is intimidating for juniors, and existing tools don't facilitate natural, low-pressure connections, leading to a "ghost town" effect.
                  </p>
              </RevealOnScroll>
          </div>
      </section>

      {/* 7. OBJECTIVE (New Section) */}
      <section className="py-8 px-6 bg-surface border-b border-white/5">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Objective</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-surfaceHighlight p-8 rounded-2xl border-l-4 border-secondary shadow-lg">
                          <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Challenge 01</h3>
                          <p className="text-xl text-white font-medium italic leading-relaxed">
                              "How Might We facilitate designers in anticipating event attendees effortlessly?"
                          </p>
                      </div>
                      <div className="bg-surfaceHighlight p-8 rounded-2xl border-l-4 border-primary shadow-lg">
                          <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Challenge 02</h3>
                          <p className="text-xl text-white font-medium italic leading-relaxed">
                              "How Might We enable designers to network and establish real-life connections effectively?"
                          </p>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 8. PROPOSED SOLUTIONS */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Proposed Solutions</h2>
              </RevealOnScroll>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Solution 1 */}
                  <RevealOnScroll className="space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                          <MessageSquare className="text-secondary" />
                          <h3 className="text-xl font-bold text-white">Event-Based Group Chats</h3>
                      </div>
                      <p className="text-textMuted">
                          Instead of static forums, we introduced temporary, event-specific group chats. This creates a sense of urgency and shared context, making it easier for users to start conversations around a specific topic or talk.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative">
                              <img src="https://i.ibb.co/b54BhQwC/image-91.png" className="w-full h-auto object-contain" alt="Group Chat Screen 1" />
                          </div>
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative">
                              <img src="https://i.ibb.co/wh8cG0X2/messages-2.png" className="w-full h-auto object-contain" alt="Group Chat Screen 2" />
                          </div>
                      </div>
                      <p className="text-xs text-center text-textMuted">Event Group Chat Flows</p>
                  </RevealOnScroll>

                  {/* Solution 2 */}
                  <RevealOnScroll delay={100} className="space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                          <Users className="text-secondary" />
                          <h3 className="text-xl font-bold text-white">User Pairing System</h3>
                      </div>
                      <p className="text-textMuted">
                          To combat the anxiety of cold outreach, we designed an automated "Study Buddy" pairing system. Users are matched based on learning goals and time zones, facilitating 1:1 connections without the awkwardness.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative">
                              <img src="https://i.ibb.co/yBbmFW17/events-details-1.png" className="w-full h-auto object-contain" alt="Pairing Screen 1" />
                          </div>
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative">
                              <img src="https://i.ibb.co/sdtCCGk5/events-details-1-1.png" className="w-full h-auto object-contain" alt="Pairing Screen 2" />
                          </div>
                      </div>
                      <p className="text-xs text-center text-textMuted">User Pairing Flows</p>
                  </RevealOnScroll>
              </div>
          </div>
      </section>

      {/* 9. USER PERSONA */}
      <section className="py-12 px-6 bg-surfaceHighlight">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8">User Persona</h2>
                  <div className="bg-background rounded-2xl border border-white/5 p-8 flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                          {/* Small Circle Image for Alex */}
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary mb-4">
                              <img src="https://i.ibb.co/JwYd2x00/male-professional-headshot-tips-mens-corporate-headshots-guide.webp" className="w-full h-full object-cover" alt="Alex Persona" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Alex, 24</h3>
                          <p className="text-sm text-textMuted">Junior UX Designer</p>
                      </div>
                      <div className="w-full md:w-2/3 space-y-6">
                          <div>
                              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">Background</h4>
                              <p className="text-textMuted text-sm">Recent bootcamp graduate looking for their first role. Feels overwhelmed by the job market and isolated in their learning journey.</p>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                              <div>
                                  <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">Pain Points</h4>
                                  <ul className="text-textMuted text-sm list-disc ml-4">
                                      <li>Imposter syndrome</li>
                                      <li>Fear of asking "dumb" questions</li>
                                      <li>Lack of regular feedback</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">Goals</h4>
                                  <ul className="text-textMuted text-sm list-disc ml-4">
                                      <li>Find a dedicated mentor</li>
                                      <li>Build a consistent peer network</li>
                                      <li>Get constructive portfolio feedback</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 10. WIREFRAMES */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-4">Low-Fidelity Wireframes</h2>
                  <p className="text-textMuted text-lg mb-8 max-w-4xl">
                      Our initial wireframes centered on two core features: a segmented event organizer for virtual and physical gatherings, and a unified chat interface for group collaboration. Designing for introverted creatives presented a unique challenge: we needed to foster community without the typical 'social fatigue' found in most platforms. These early sketches represent our move toward a more thoughtful, non-cliché system where design files and conversations coexist naturally.
                  </p>
                  <div className="bg-surface rounded-lg border border-white/10 overflow-hidden max-w-4xl mx-auto">
                      <img src="https://i.ibb.co/7xGSFPNx/ddsss.png" className="w-full h-48 md:h-64 object-cover object-top" alt="Low Fidelity Wireframes Overview" />
                  </div>
                  <p className="text-center text-xs text-textMuted mt-4">Wireframes Overview</p>
              </RevealOnScroll>
          </div>
      </section>

      {/* 11. VISUAL DESIGN */}
      <section className="py-12 px-6 bg-surface">
          <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8">Visual Design</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      {[
                        { src: "https://i.ibb.co/LqvbmKY/events-main-3.png", title: "First Launch" },
                        { src: "https://i.ibb.co/SDk586ht/profile-1.png", title: "Sign Up" },
                        { src: "https://i.ibb.co/gbNqB1QQ/sign-up-page-1.png", title: "Events Main" },
                        { src: "https://i.ibb.co/60nVj52R/first-launch-1.png", title: "Event Details" },
                        { src: "https://i.ibb.co/pr1kGG54/gnarly-attendee-list.png", title: "Attendee List" },
                        { src: "https://i.ibb.co/LhJ5YG2f/gnarly-messages.png", title: "Messages" },
                        { src: "https://i.ibb.co/4n2Bc3s6/gnarly-chat.png", title: "Chat Feature" },
                        { src: "https://i.ibb.co/GQ1YdCd6/gnarly-explore.png", title: "Explore Main" },
                        { src: "https://i.ibb.co/DP4GnJ8B/events-main-3.png", title: "Recommended Group Chats" },
                        { src: "https://i.ibb.co/vxdZc2Sn/profile-1.png", title: "People You May Know" }
                      ].map((item, index) => (
                          <div key={index} className="space-y-2 cursor-pointer group" onClick={() => setSelectedImage(item.src)}>
                              <div className="bg-black rounded-xl border border-white/10 overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                                  <img src={item.src} className="w-full h-auto object-contain" alt={`Hi-Fi Screen ${index + 1}`} />
                              </div>
                              <p className="text-center text-xs text-textMuted group-hover:text-white transition-colors">{item.title}</p>
                          </div>
                      ))}
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 12. BEFORE / AFTER */}
      <section className="py-12 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Evolution</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-3 flex flex-col items-center">
                          <p className="text-sm text-textMuted text-center mb-2">Original interface was cluttered and lacked clear hierarchy.</p>
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative w-1/2">
                               <div className="absolute top-2 left-2 bg-red-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">BEFORE</div>
                               <img src="https://i.ibb.co/8D336P59/before.png" className="w-full h-auto object-contain" alt="Before Interface" />
                          </div>
                      </div>
                      <div className="space-y-3 flex flex-col items-center">
                          <p className="text-sm text-textMuted text-center mb-2">Redesigned interface focuses on clarity, contrast, and accessibility.</p>
                          <div className="bg-surfaceHighlight rounded-xl overflow-hidden border border-white/10 relative w-1/2">
                               <div className="absolute top-2 left-2 bg-green-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">AFTER</div>
                               <img src="https://i.ibb.co/8DRGG4q2/after.png" className="w-full h-auto object-contain" alt="After Interface" />
                          </div>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 13. PROTOTYPE LINK */}
      <section className="py-12 px-6 bg-surface border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-6">Experience the Prototype</h2>
                  <p className="text-textMuted text-lg mb-8">
                      Interact with the full high-fidelity prototype to see the user flows and animations in action.
                  </p>
                  <a 
                    href="https://www.figma.com/proto/kpd4pJxG5Dt1sIorE0UQ9Y/TEAM-31-EUNIOA-FIGMA?page-id=7814%3A12401&node-id=7812-24211&p=f&viewport=492%2C424%2C0.1&t=NDI9KR43saMeoLpZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7812%3A24211" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button icon={<ExternalLink size={18} />}>View Figma Prototype</Button>
                  </a>
              </RevealOnScroll>

              {/* Tools Used Section */}
              <RevealOnScroll delay={200} className="mt-16 pt-12 border-t border-white/5">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-textMuted mb-8">Tools Used</h3>
                 <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                    {[
                      { name: 'Figma', icon: <Layout size={16} /> },
                      { name: 'Protopie', icon: <Smartphone size={16} /> }
                    ].map(tool => (
                      <span key={tool.name} className="text-lg font-bold text-white flex items-center gap-2">
                         {tool.icon} {tool.name}
                      </span>
                    ))}
                 </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 14. REFLECTIONS */}
      <section className="py-12 px-6 bg-surfaceHighlight">
          <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                  <h2 className="text-2xl font-bold text-white mb-8">Reflections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                          <h3 className="text-lg font-bold text-white mb-3">Challenges Faced</h3>
                          <p className="text-textMuted text-sm leading-relaxed">
                              The 3-day timeline was our biggest constraint. We had to make ruthless prioritization decisions, cutting a planned "Mentor Matching" feature to ensure the core Chatroom experience was polished and fully prototyped. Balancing accessibility compliance with a modern aesthetic also required multiple iterations.
                          </p>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-white mb-3">Results</h3>
                          <p className="text-textMuted text-sm leading-relaxed">
                              The project demonstrated the power of user-centered design under pressure. Our solution received an Honorable Mention for "Best Accessibility Integration" at the Design Jam. User testing indicated a significant reduction in the time required to find and join community events.
                          </p>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
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