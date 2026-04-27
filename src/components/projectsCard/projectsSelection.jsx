import React, { useState } from 'react';
import ProjectsCard from './projectsCard';
import moneySaved from '../../assets/moneysavedLogo.png';
import msMobile from '../../assets/msMobile.png';


const initialProjects = [
  {
    id: 1,
    category: 'Web',
    titleUpper: 'MoneySaved',
    image: moneySaved,
    titleLower: 'Versão Web',
    description: 'Um site com propósito simples de administração financeira pessoal, único, prático e fácil de usar.',
    tags: ['React', 'Laravel'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rgarthur/MoneySaved-Web',
  },
  {
    id: 2,
    category: 'Mobile',
    titleUpper: 'MoneySaved Mobile',
    image: msMobile,  
    titleLower: 'Versão Mobile',
    description: 'Um aplicativo com propósito simples de administração financeira pessoal, único, prático e fácil de usar.',
    tags: ['Kotlin'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rgarthur/Money-Saved',
  },
  {
    id: 3,
    category: ['Web', 'Desktop', 'Mobile'],
    titleUpper: 'API Contratos',
    titleLower: 'API + Web',
    description: 'API feita com ASP.NET CORE com propósito de automatizar a importação de dados em planilhas contratuais, sendo altamente escalável',
    tags: ['ASP.NET CORE', 'SQL Server', 'C#', 'React'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rgarthur/APIContratos',
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('Todos');
  const [projects] = useState(initialProjects);

  const categories = ['Todos', 'Web', 'Mobile', 'Desktop'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(filter)
          : project.category === filter
      );

  return (
    <section className="bg-midnight py-16 px-6 relative overflow-hidden">
      <div className="particles-overlay absolute inset-0 opacity-10"></div>
      
      <style>
        {`
          @keyframes scaleFade {
            0% { opacity: 0; transform: scale(0.95) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-scaleFade {
            animation: scaleFade 0.4s ease-out forwards;
          }
        `}
      </style>
      
      <div className="container mx-auto relative z-10 space-y-12">
        
        {/* Título com efeito de brilho */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            Meus Projetos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm border 
                ${filter === cat 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border-transparent scale-105' 
                  : 'bg-slate-900/80 text-gray-300 hover:text-white border-white/10 hover:border-indigo-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:-translate-y-0.5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Projetos */}
        <div className="flex flex-wrap justify-center gap-10 transition-all duration-500">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={`${project.id}-${filter}`} className="w-full md:w-[calc(50%_-_1.25rem)] lg:w-[calc(33.333%_-_1.7rem)] animate-scaleFade flex">
                <ProjectsCard project={project} />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-16 text-gray-400 bg-slate-900/80 rounded-xl border border-dashed border-indigo-500/50 animate-scaleFade">
              <i className="ri-folder-open-line text-4xl mb-4"></i>
              <p>Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;