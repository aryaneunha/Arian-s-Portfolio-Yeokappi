import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { SectionId } from '../types';

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.WORK} className="py-12 px-6 bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
          <p className="mt-4 text-textMuted max-w-2xl">
            A selection of my recent work in UX research, digital media, and brand strategy.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id}
              className="group relative bg-surfaceHighlight rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-primary/10 block"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{project.subtitle}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-textMuted mb-6 line-clamp-2">{project.overview}</p>
                <span className="inline-flex items-center text-sm font-medium text-white group-hover:underline">
                  View Case Study <ChevronRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};