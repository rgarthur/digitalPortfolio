import { useState } from "react";

export function PresentationCard({ img, title, desc, longDesc }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8 transition-all duration-500 w-full">
      <div className="group w-full lg:w-1/3 max-w-sm lg:max-w-none bg-slate-900/80 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] rounded-2xl p-5 border border-white/10 transition-all duration-300 flex flex-col">
        <div className="overflow-hidden rounded-xl">
          <img className="w-full h-72 lg:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105" src={img} />
        </div>

        <div className="p-5 pb-2 text-center flex-1 flex flex-col justify-center">
          <h2 className="font-bold text-xl lg:text-2xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{title}</h2>
          <p className="text-indigo-300 font-medium uppercase tracking-widest text-sm mt-1">{desc}</p>
        </div>
      </div>

      <div className="w-full lg:w-2/3 bg-slate-900/80 rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 flex flex-col justify-center">
        <div className="w-full">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Sobre Mim</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
          <p className="text-base lg:text-lg leading-relaxed whitespace-pre-line text-gray-300">
            {longDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
