import React from 'react';

const ProjectsCard = ({ project }) => {
  const { titleUpper, image, titleLower, description, tags, demoUrl, githubUrl } = project;

  return (
    <div className="w-full bg-slate-900/80 p-6 rounded-2xl shadow-lg border border-white/10 hover:border-purple-500/50 group transition-all duration-300 hover:scale-[1.03] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium text-white group-hover:text-cyan transition">{titleUpper}</h3>
      </div>
      
      {/* Placeholder para a imagem */}
      <div className="aspect-video bg-white/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-white/10">
        {image ? <img src={image} alt={titleLower} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <span className="text-gray-500 text-sm font-medium tracking-wider">SEM IMAGEM</span>}
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className="text-2xl font-bold text-white mb-4">{titleLower}</h4>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-purple/30">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan transition flex items-center gap-1">
          Live Demo <i className="ri-external-link-line"></i>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan transition flex items-center gap-1">
          GitHub <i className="ri-github-line"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;