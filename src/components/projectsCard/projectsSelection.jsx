import React, { useState } from 'react';
import ProjectsCard from './projectsCard';
import moneySaved from '../../assets/moneysavedLogo.png';


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
    image: moneySaved,  
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
      
      <div className="container mx-auto relative z-10 space-y-12">
        
        {/* Título com efeito de brilho */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
            <span className="absolute -inset-1 blur-2xl opacity-50 bg-purple"></span>
            <span className="relative">Meus Projetos</span>
          </h2>
          <div className="w-16 h-1 bg-purple mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition text-sm flex items-center gap-2 
                ${filter === cat 
                  ? 'bg-purple text-white shadow-lg' 
                  : 'bg-dark-purple text-white/70 hover:bg-purple/50'
                }`}
            >
              <div className={`w-2 h-2 rounded-full ${filter === cat ? 'bg-cyan' : 'bg-white/50'}`}></div>
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectsCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 text-gray-400 bg-dark-purple rounded-xl border border-dashed border-purple/30">
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