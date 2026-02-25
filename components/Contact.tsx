import React from 'react';
import { Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from './Button';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  const RESUME_LINK = "https://drive.google.com/file/d/1tflWmJkv79d5yZDDlLzgoslKLhTi7HS0/view?usp=sharing";

  return (
    <section id={SectionId.CONTACT} className="pt-24 bg-surfaceHighlight relative min-h-[60vh] flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-6 mb-24 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto">
            I am currently open to full-time roles in UX/UI and Visual Design. 
            Have a project in mind or just want to say hi? Drop me a line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <a href="mailto:byarian12@gmail.com?subject=Project Inquiry&body=Hi Arian, I'd like to chat about..." className="group flex flex-col items-center p-8 bg-background rounded-2xl border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Email Me</h3>
              <p className="text-textMuted text-sm">byarian12@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/arian-naidu/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-background rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Connect</h3>
              <p className="text-textMuted text-sm">LinkedIn Profile</p>
            </a>

            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-background rounded-2xl border border-white/5 hover:border-green-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                <Download size={24} />
              </div>
              <h3 className="font-bold text-white mb-1">Resume</h3>
              <p className="text-textMuted text-sm">Download PDF</p>
            </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-white">Arian Naidu</h4>
            <div className="flex items-center justify-center md:justify-start gap-2 text-textMuted mt-2">
              <MapPin size={16} />
              <span>Vancouver, BC</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-surfaceHighlight rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Open to full-time work</span>
          </div>

          <div className="text-textMuted text-sm">
            © {new Date().getFullYear()} Arian Naidu. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};