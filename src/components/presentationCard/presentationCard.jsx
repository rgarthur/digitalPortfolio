import { useState } from "react";

export function PresentationCard({ img, title, desc, longDesc }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <div className="flex items-start gap-4 transition-all duration-500">
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform hover:scale-105"
        onClick={handleClick}>
        <img className="w-full h-48 object-cover" src={img} />

        <div className="p-5">
          <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 text-base">{desc}</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isClicked ? 'w-[800px] opacity-100 ml-8' : 'w-0 opacity-0 ml-0'}
      bg-blue-950/40 backdrop-blur-md rounded-2xl p-5 border border-white/20`}>
        <div className="p-8 w-[800px]">
          <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2">Sobre Mim</h3>
          <p className="text-lg leading-relaxed whitespace-pre-line text-white">
            {longDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
